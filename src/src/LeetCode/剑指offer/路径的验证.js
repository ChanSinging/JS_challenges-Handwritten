function exist (board, word) {
    let words = [...word]
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            // 用k表示word长度的遍历
            if (dfs(board, words, i, j, 0)){ return true}

        }
    }
    return false
}

const dfs = (board, word, i, j, k) => {
    let m = board.length, n = board[0].length
    // 临界值
    if (i < 0 || j < 0 || i >= m || j >= n || word[k] !== board[i][j]) return false
    // word遍历完了
    if (k === word.length - 1) return true
    // 剪枝，表示遍历过字符 置空
    board[i][j] = ''
    let res = dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i, j + 1, k + 1) || dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i, j - 1, k + 1)
    // 上面递归完后，要将字符变回来，复原现场，毕竟两层 for 循环和后面的递归调用 每次都要用到 board 数组
    // board[i][j] = word[k]
    return res
}
let board = [["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","B"],["A","A","A","A","B","A"]]
let word = "AAAAAAAAAAAAABB"
console.log(exist(board, word));
console.log()