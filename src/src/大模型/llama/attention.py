import torch
from torch import nn
import torch.nn.functional as F
from transformers import PretrainedConfig
import math
from embeding import apply_rotary_emb, repeat_kv, precompute_freq_cis

class ModelConfig(PretrainedConfig):
    model_type = "Tiny-K"
    def __init__(
            self,
            dim: int = 768,
            n_layers: int = 12,
            n_heads: int = 16,
            n_kv_heads: int = 8,
            vocab_size: int = 6144,
            hidden_dim: int = None, # type: ignore
            multiple_of: int = 64,
            norm_eps: float = 1e-5,
            max_seq_len: int = 512,
            dropout: float = 0.0,
            flash_attn: bool = True,
            **kwargs,
    ):
        self.dim = dim
        self.n_layers = n_layers
        self.n_heads = n_heads
        self.n_kv_heads = n_kv_heads
        self.vocab_size = vocab_size
        self.hidden_dim = hidden_dim
        self.multiple_of = multiple_of
        self.norm_eps = norm_eps
        self.max_seq_len = max_seq_len
        self.dropout = dropout
        self.flash_attn = flash_attn
        super().__init__(**kwargs)

class Attention(nn.Module):
    def __init__(self, args: ModelConfig):
        super().__init__()
        # 根据是否指定n_kv_heads，确定用于键
        self.n_kv_head = args.n_heads if args.n_kv_heads is None else args.n_kv_heads
        # 确保总头数可以被键值头数整除。
        assert args.n_heads % self.n_kv_head == 0
        
        # 模型并行处理
        model_parallel_size = 1
        # 本地计算头数
        self.n_local_heads = args.n_heads // model_parallel_size
        # 本地键值头
        self.n_local_kv_heads = self.n_kv_head // model_parallel_size
        # 重复次数，用于扩展键和值的尺寸
        self.n_rep = self.n_local_heads // self.n_local_kv_heads
        # 每个头的维度
        self.head_dim = args.dim // args.n_heads
        
        # 定义投影的权重矩阵
        self.wq = nn.Linear(args.dim, args.n_heads * self.head_dim, bias=False)
        self.wk = nn.Linear(args.dim, args.n_kv_heads * self.head_dim, bias=False)
        self.wv = nn.Linear(args.dim, args.n_kv_heads * self.head_dim, bias=False)
        # 输出权重
        self.wo = nn.Linear(args.n_heads * self.head_dim, args.dim, bias=False)
        
        # 定义dropout
        self.attn_dropout = nn.Dropout(args.dropout)
        self.resid_dropout = nn.Dropout(args.dropout)
        self.dropout = args.dropout
        
        # 检查是否支持flash attention
        self.flash = hasattr(torch.nn.functional, 'scaled_dot_product_attention')
        if not self.flash:
            # 若不支持flash
            print("WARNING")
            mask = torch.full((1, 1, args.max_seq_len, args.max_seq_len), float("-inf"))
            mask = torch.triu(mask, diagonal=1)
            # 注册为模型的缓存
            self.register_buffer("mask", mask)
            
    def forward(self, x, freqs_cos, freq_sin):
      bsz, seqlen, _ = x.shape
      xq, xk, xv = self.wq(x), self.wk(x), self.wv(x)
      # 调整形状以适应头的维度
      xq = xq.view(bsz, seqlen, self.n_local_heads, self.head_dim)
      xk = xk.view(bsz, seqlen, self.n_local_kv_heads, self.head_dim)
      xv = xv.view(bsz, seqlen, self.n_local_kv_heads, self.head_dim)

      # 应用旋转嵌入 rope
      xq, xk = apply_rotary_emb(xq, xk, freqs_cos, freq_sin)

      # 对键和值进行拓展
      xk = repeat_kv(xk, self.n_rep)
      xv = repeat_kv(xv, self.n_rep)

      # 将头作为批次维度处理
      xq = xq.transpose(1,2);
      xk = xk.transpose(1,2);
      xv = xv.transpose(1,2);

      # 根据是否支持Flash Attention，选择实现方式。
      if self.flash:
          output = torch.nn.functional.scaled_dot_product_attention(xq, xk, xv, attn_mask=None, dropout_p=self.dropout if self.training else 0.0, is_causal=True)
      else:
          scores = torch.matmul(xq, xk.transpose(2, 3)) / math.sqrt(self.head_dim)
          assert hasattr(self, 'mask')
          scores = scores + self.mask[:, :, :seqlen, :seqlen] # type: ignore
          scores = F.softmax(scores.float(), dim=-1).type_as(xq)
          scores = self.attn_dropout(scores)
          output = torch.matmul(scores, xv)
      
      # 恢复时间维度并合并
      output = output.transpose(1,2).contiguous().view(bsz, seqlen, -1)

      # 最终投影回残差流
      output = self.wo(output)
      output = self.resid_dropout(output)
      return output

# args = ModelConfig()
# # 创建Attention实例
# attention_model = Attention(args)

# # 模拟输入数据
# batch_size = 1
# seq_len = 50  # 假设实际使用的序列长度为50
# dim = args.dim
# x = torch.rand(batch_size, seq_len, dim)  # 随机生成输入张量
# # freqs_cos = torch.rand(seq_len, dim // 2)  # 模拟cos频率，用于RoPE
# # freqs_sin = torch.rand(seq_len, dim // 2)  # 模拟sin频率，用于RoPE

# freqs_cos, freqs_sin = precompute_freq_cis(dim//args.n_heads, seq_len)

# # 运行Attention模型
# output = attention_model(x, freqs_cos, freqs_sin)

# # attention出来之后的形状 依然是[batch_size, seq_len, dim]
# print("Output shape:", output.shape)