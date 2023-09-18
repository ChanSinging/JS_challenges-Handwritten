/**
 * @name: 手写promise race
 * @author: cxy
 * @date: 2023/2/19 16:06
 * @description：手写promise race
 * @update: 2023/2/19 16:06
 */
// 参数是promise的实例数组，然后其then注册的回调函数是
// 数组中的某一个Promise的状态变成fulfilled的时候执行。
// 因为Promise的状态只能改变一次
// Promise.race = function (args) {
//     return new Promise((resolve, reject) => {
//         let len = args.length
//         for (let i = 0; i < len; i++) {
//             args[i].then(resolve, reject)
//         }
//     })
// }
let a = new Number(2)
console.log(a instanceof Number);
