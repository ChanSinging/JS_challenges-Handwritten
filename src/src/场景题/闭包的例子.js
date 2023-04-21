/**
 * @name: 闭包的例子
 * @author: cxy
 * @date: 2023/3/21 21:40
 * @description：闭包的例子
 * @update: 2023/3/21 21:40
 */

// function fa(){
//     let a = 1011;
//     return function fb(){
//         console.log(a)
//     }
// }
// let fc = fa();
// fc()

function makeCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

let counter = makeCounter();

console.log(counter()); // 输出: 1
console.log(counter()); // 输出: 2
console.log(counter()); // 输出: 3



