/**
 * @name: 手写reduce
 * @author: cxy
 * @date: 2023/2/23 19:04
 * @description：手写reduce
 * @update: 2023/2/23 19:04
 */
Array.prototype.reduce = function (callback, prev) {
    // this 代表这个源数组
    console.log(callback);
    for (let i = 0; i < this.length; i++) {
        if (prev === undefined) {
            prev = callback(this[i], this[i + 1], i + 1, this)
            i++
        } else {
            prev = callback(prev, this[i], i, this)
        }
    }
    return prev
}
let nums = [1, 2, 3, 4, 5]
// console.log(nums.reduce((a, b) => a = a + b),0)
let str = "A man, a plan, a canal: Panama"
console.log(str.replace(/\s/g,'').replace(/^a-zA-z0-9/g,''))
