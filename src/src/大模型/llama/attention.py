import torch
from torch import nn
import torch.nn.functional as F

def repeat_kv(x: torch.Tensor, n_rep: int):
	# 获取输⼊张量的形状：批量⼤⼩、序列⻓度、键/值对头的数量、每个头的维度⼤⼩
	batch_size, slen, n_kv_heads, head_dim = x.shape
	# 如果重复次数是1，返回原始张量
	if n_rep == 1:
		return x
	# 对张量进行扩展和重塑操作以重复键值对
	return (
		x[:,:,:,None,:]
		.expand(batch_size, slen, n_kv_heads, n_rep, head_dim)
		.reshape(batch_size, slen, n_kv_heads*n_rep, head_dim)
	)

# 旋转嵌入，获取一个实部和虚部
def precompute_freq_cis(dim: int, end: int, theta: float = 1000.0):
	# torch.arange(0, dim, 2)[: (dim // 2)].float()生成了一个从0开始，步长为2的序列，长度为dim的一半
	# 每个元素除以dim，再取theta的倒数，得到频率
	freqs = 1.0 / (theta ** torch.arange(0, dim, 2)[: (dim // 2)].float() / dim)
	t = torch.arange(end, device=freqs.device)
	# 计算外积
	freqs = torch.outer(t, freqs).float()
	# 计算频率的余弦值
	freqs_cos = torch.cos(freqs)
	# 计算频率的正弦值
	freqs_sin = torch.sin(freqs)
	return freqs_cos, freqs_sin

# 构造调整张量形状的reshape_for_broadcast函数
def reshape_for_broadcast(freqs_cis: torch.Tensor, x: torch.Tensor):
	# 获取x的维度数
	ndim = x.ndim

	# 构造一个新的形状，除了第二维和最后一维，其他是i
	shape = [d if i == 1 or i == ndim - 1 else 1 for i, d in enumerate(x.shape)]

	# 将freqs_cis调整为新的形状
	return freqs_cis.view(shape)

x = torch.randn(1, 50, 64)
y = torch.randn(1, 100, 64, 24)
reshape = reshape_for_broadcast(x, y)
print(reshape)