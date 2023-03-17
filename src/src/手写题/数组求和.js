/**
 * @name: 数组求和
 * @author: cxy
 * @date: 2023/2/21 19:38
 * @description：数组求和
 * @update: 2023/2/21 19:38
 */
let nums = [12, 6, 7, 8, 0]
let sum = nums.reduce((a, b) => {
    return a + b
})
console.log(sum);

// map型数组求和
let arr = [{ a: 9, b: 19, c: 1 }, { c: 2, a: 2 }, { c: 3 }]
let sum2 = arr.reduce((prev, cur) => {
    return prev + cur["c"]
},0)
console.log(sum2);
// 实现柯力化  add(1)(2)(3)
/**
 * 柯力化是接受多个参数的函数转变为一个单一参数的函数，并且返回接受余下的参数且返回结果
 * **/

param = {
    id: userid,
    userTime : { a: 9, b: 19, c: 1 }
}
