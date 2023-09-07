/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-08-03 16:28:24
 * @LastEditors: chansinging
 * @LastEditTime: 2023-08-03 17:00:07
 */
// console.log(1);
// async function fnOne() {
//     console.log(2);
//     await fnTwo();
//     console.log(3);//
// }
// async function fnTwo() {
//     console.log(4);
// }
// fnOne();
// setTimeout(() => {
//     console.log(5);
// }, 2000);

// let p = new Promise((resolve, reject) => {
//     console.log(6);
//     resolve();
//     console.log(7);//
// })
// setTimeout(() => {
//     console.log(8)
// }, 0)
// p.then(() => {
//     console.log(9); //
// })
console.log(10);
// 1 2 4 | 6 9 | 10 7 3 | 5 8
// 1 2 4 | 6 7 10 3 9 | 5 8
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度
function outer(){
    var a = 5;
    function inner(){console.log(a);var a =10}
    return inner; 
}
var innerFunc = outer(); 
innerFunc()