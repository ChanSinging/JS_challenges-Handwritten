const res2 = []

function movingCount (m, n, k) {
    // 本题关键是k，k有多少和为k的子集，子集的大范围限制在(m-1,n-1)
    if (k === 0) return 1

    let count = 0
    for (let i = 0; i <= k; i++) {
        for (let j = 0; j <= k; j++) {
            if (i + j > k || i > m - 1 || j > n - 1) continue
            count++
            res2.push([i, j])
        }
    }
    return count

}

// 本题适用于深度优先
const res = []

function movingCount2 (m, n, k) {
    const visited = Array(m).fill(0).map(_ => Array(n).fill(false))

    function sum (n) {
        let ans = 0
        while (n) {
            ans += n % 10
            n = Math.floor(n / 10)
        }
        return ans
    }

    function dfs (x, y) {
        // 位数和大于k，超出边界m n, 已经访问过的true
        if (sum(x) + sum(y) > k || x > m - 1 || y > n - 1 || visited[x][y]) return 0
        visited[x][y] = true
        res.push([x, y])
        return 1 + dfs(x + 1, y) + dfs(x, y + 1)
    }

    return dfs(0, 0)
}

let m = 11, n = 8, k = 16
console.log(movingCount2(m, n, k))
console.log(movingCount(m, n, k));
// console.log(res2)  //87
// console.log(res)  //88
// res and res2
// 差集 数组res1相对于res2所没有的 res2 ===>res
// let _res2Set = new Set(res)
// let _res22Set = new Set(res2)
// let diff = res2.filter(item => !_res2Set.has(item))
// console.log(diff)
// console.log(res.filter(item => _res22Set.has(item)))
for (let i = 0; i < res.length; i++) {
    if(!res2.includes(res[i])) console.log(res[i])
}

