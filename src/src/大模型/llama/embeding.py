import torch
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

	print(freqs_cis.shape, shape)

	# 将freqs_cis调整为新的形状
	return freqs_cis.view(shape)

# 旋转嵌入
def apply_rotary_emb(
    xq: torch.Tensor,
    xk: torch.Tensor,
    freqs_cos: torch.Tensor,
    freqs_sin: torch.Tensor
):

    # 将查询和键张量转换为浮点数，并重塑形状以分离实部和虚部
    xq_r, xq_i = xq.float().reshape(xq.shape[:-1] + (-1, 2)).unbind(-1)
    xk_r, xk_i = xk.float().reshape(xk.shape[:-1] + (-1, 2)).unbind(-1)
    # 重新塑形频率张量以进行广播
    freqs_cos = reshape_for_broadcast(freqs_cos, xq_r)
    freqs_sin = reshape_for_broadcast(freqs_sin, xq_r)

    # 应用旋转，分别计算旋转后的实部和虚部
		# z_rotated = z_original * e^(iθ)
    #      = (a + bi) * (cosθ + i*sinθ)
    #      = (a*cosθ - b*sinθ) + i*(a*sinθ + b*cosθ)
    xq_out_r = xq_r * freqs_cos - xq_i * freqs_sin
    xq_out_i = xq_r * freqs_sin + xq_i * freqs_cos
    xk_out_r = xk_r * freqs_cos - xk_i * freqs_sin
    xk_out_i = xk_r * freqs_sin + xk_i * freqs_cos

    # 将最后两个维度合并，并还原为原始张量的形状
    xq_out = torch.stack([xq_out_r, xq_out_i], dim=-1).flatten(3)
    xk_out = torch.stack([xk_out_r, xk_out_i], dim=-1).flatten(3)

    return xq_out.type_as(xq), xk_out.type_as(xk)

xq = torch.randn(1, 50, 6, 48)
xk = torch.randn(1, 50, 6, 48)
cos, sin = precompute_freq_cis(288 //6, 50)
# print(cos.shape, sin.shape)
# xq_out, xk_out = apply_rotary_emb(xq, xk, cos, sin)
# print(xq_out, xk_out)

