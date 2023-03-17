/**
 * @name: 得到最少K个黑色方块的涂色次数
 * @author: cxy
 * @date: 2023/3/9 16:38
 * @description：得到最少K个黑色方块的涂色次数
 * @update: 2023/3/9 16:38
 */
let blocks = "WBWBBBW", k = 2
console.log(minimumRecolors(blocks, k))

function minimumRecolors (blocks, k) {
    // 查看连续的黑色块，在填充B
    let n = blocks.length, count = 0, res = 0
    for (let i = 1; i < n; i++) {
        if (blocks[i] === 'B' && blocks[i - 1] === 'B') {
            count++
        }
        res = Math.max(res, count)
        console.log(res);
    }
    if (res === k) return 0
}
