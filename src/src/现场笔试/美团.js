/**
 * @name: 美团
 * @author: cxy
 * @date: 2023/3/11 18:10
 * @description：美团
 * @update: 2023/3/11 18:10
 */

let arr = [2, 3, 5, 7, 11]
arr.sort((a, b) => a - b)
let sum = new Array(5)
let res = new Array(5)
arr.forEach((item, index) => {
    // abc(index, item)
    sum[index] = 0
    res.forEach((it, ind) => {
        sum[index] += Math.abs(it - arr[ind])
    })
})
console.log(sum);
