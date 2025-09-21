import torch
from torch import nn
import math
import torch.nn.functional as F

class RMSNorm(torch.nn.Module):
    def __init__(self, dim: int, eps: float = 1e-6):
        super().__init__()
        self.eps = eps
        self.weight = nn.Parameter(torch.ones(dim))

    def _norm(self, x):
        return x * torch.rsqrt(x.pow(2).mean(-1, keepdim=True) + self.eps)

    def forward(self, x):
        output = self._norm(x.float()).type_as(x)
        return output * self.weight
    
norm = RMSNorm(64, 10.222);
input = torch.randn(1, 50, 64);
# output = norm(input)
# print(output);
# print(output.shape)