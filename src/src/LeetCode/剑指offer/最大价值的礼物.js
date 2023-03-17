let maxSum = 0
var maxValue = function (grid) {
    // 用dfs写，算最大的路径
    //
    let temp = 0
    dfs(0, 0, grid, temp)
    return maxSum
};
const dfs = (i, j, grid, temp) => {
    let m = grid.length, n = grid[0].length
    if (i < 0 || i > m - 1 || j < 0 || j > n - 1) return
    // 到边界终止
    if (i === m - 1 && j === n - 1) {
        temp += grid[i][j]
        maxSum = Math.max(maxSum, temp)
        return
    }
    // 不需要剪枝
    temp += grid[i][j]
    dfs(i + 1, j, grid, temp)
    dfs(i, j + 1, grid, temp)
}
//
// var maxValue2 = function(grid) {
//     // 用dfs写，算最大的路径
//     //
//     let res = 0
//     for(let i=0;i<grid.length;i++){
//         for(let j=0;j<grid[0].length;j++){
//             // 判断
//             let temp=0
//             // console.log(res+'--');
//             // debugger
//             let tmp = dfs2(i,j,grid,temp)
//             res = Math.max(res, tmp)
//         }
//     }
// };
// const dfs2 = (i, j, grid,temp)=>{   // 一直卡死在其中，没跳出
//     let m = grid.length, n = grid[0].length
//     if(i<0||i>m-1||j<0||j>n-1) return
//     // 到边界终止
//     if(i===m-1&&j===n-1){
//         temp += grid[i][j]
//         return temp
//     }
//     // 不需要剪枝
//     temp += grid[i][j]
//     dfs2(i+1,j,grid,temp)
//     dfs2(i,j+1,grid,temp)
// }
var maxValue3 = function (grid) {
    // 用dfs写，算最大的路径
    // dfs会超时，使用动态规划
    let m = grid.length, n = grid[0].length
    const dp = Array.from(Array(m).fill(0), () => Array(n).fill(0));
    console.log(dp)
    dp[0][0] = grid[0][0]
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue
            if (i === 0)
                dp[i][j] = grid[i][j] + dp[i][j - 1]  // 沿着i移动
            if (j === 0)
                dp[i][j] = grid[i][j] + dp[i - 1][j]  // 沿着j移动
            if (i !== 0 && j !== 0)
                dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1])
        }
    }
    return dp[m - 1][n - 1]
}
let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
console.log(maxValue3((grid)))