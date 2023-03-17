/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const res = []
// 定义x和y轴的方向
const dx = [1,0,-1,0],dy = [0,1,0,-1]
let direction = 0

var spiralOrder = function(matrix) {
    // 顺时针打印
    // 试试dfs  dfs具有随机性，不能顶线打印
    const n = matrix.length,m=matrix[0].length
    let visited = Array.from(Array(n), () => Array(m).fill(0)); //新建二维数组

    const dfs = (matrix, i, j) =>{
        if(i>=n || j>=m || i<0 || j<0 || visited[i][j]===1) {
            direction++
            direction %= 4
            return
        }
        visited[i][j]=1 // 已经遍历
        res.push(matrix[i][j])
        // 设置上下左右边界,位移递归
        for(let i=0;i<2;i++){
            let mx = i + dx[direction]
            let my = j + dy[direction]
            console.log([mx,my]);
            dfs(matrix,mx,my)
        }
    }

    dfs(matrix, 0, 0)
    return res
};

let num = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(num));
