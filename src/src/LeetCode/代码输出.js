/**
 * @name: 代码输出
 * @author: cxy
 * @date: 2023/2/7 10:42
 * @description：代码输出
 * @update: 2023/2/7 10:42
 */
let x = 3;
function fn(x) {
    return function(y) {
        console.log(y + (++x));  // 5+(4+1)
    }
}
let f = fn(4)(5);
console.log(x);// 10 3
