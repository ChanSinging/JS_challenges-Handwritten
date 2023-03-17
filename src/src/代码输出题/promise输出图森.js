/**
 * @name: promise输出图森
 * @author: cxy
 * @date: 2023/3/1 16:05
 * @description：promise输出图森
 * @update: 2023/3/1 16:05
 */
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0)
async1();
new Promise(function(resolve) {
    console.log('promise1');
    resolve();
}).then(function() {
    console.log('promise2');
});
/** script start
 *  async1 start
 *  async2
 *  promise1  走async
 *  async1 end
 *  promise2
 *  setTimeout
 * **/
