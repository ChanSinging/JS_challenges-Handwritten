/**
 * @name: moka_test
 * @author: cxy
 * @date: 2023/2/15 14:06
 * @description：moka_test
 * @update: 2023/2/15 14:06
 */
/**
 * @param {{start: number, end: number}} first - 第一个区间
 * @param {{start: number, end: number}} second - 第二个区间
 * start end 是number 且需要考虑 小数情况
 * @return {boolean} 是否有交集
 */

function isOverlapped (first, second) {
    // TODO
    let fisrtRight = 0, secondLeft = 99999 // Number.MAX
    // 排序 first second
    let fisrtStart = first['start']
    let secondStart = second['start']
    // console.log(fisrtStart,secondStart);
    if(fisrtStart > secondStart){  // 交换first second
        let tmp = first
        first = second
        second = tmp
    }
    // 遍历判定
    for (let key in first) {
        fisrtRight = first[key] > fisrtRight ? first[key] : fisrtRight //end
    }
    for (let key in second) {
        secondLeft = second[key] < secondLeft ? second[key] : secondLeft  //start
    }
    // console.log(fisrtRight,secondLeft);
    if (fisrtRight >= secondLeft) {
        return true
    }
    return false
}

// test case
const a = { start: 3, end: 5 };
const b = { start: 9, end: 10 };
const c = { start: 4, end: 6 };
const d = { start: 5, end: 8 };
const f = { start: 6, end: 8 };
// const r1 = isOverlapped(a, b);
// const r2 = isOverlapped(c, d);
// console.log(r1, r2); // false true
console.log(isOverlapped(f, a))
