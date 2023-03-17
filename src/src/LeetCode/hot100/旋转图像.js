/**
 * @name: 旋转图像
 * @author: cxy
 * @date: 2023/2/19 14:47
 * @description：旋转图像
 * @update: 2023/2/19 14:47
 */
var rotate = function (matrix) {
    // 旋转图像
    // 评论来的idea 先上下反转 再左右反转
    let size = matrix.length
    let n = parseInt(matrix.length / 2)
    // 上下反转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < size; j++) {
            let tmp = matrix[i][j]
            maxtrix[i][j] = maxtrix[size - i - 1][j]
            maxtrix[size - i - 1][j] = tmp
        }
    }
    // 左右反转
    for (let i = 0; i < size; i++) {
        for (let j = i; j < size; j++) {
            let tmp = maxtrix[i][j]
            maxtrix[i][j] = maxtrix[j][i]  // 4-i-1
            maxtrix[j][i] = tmp
        }
    }
    return maxtrix
};
let maxtrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(rotate(maxtrix))
