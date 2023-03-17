/**
 * @name: moka_test2
 * @author: cxy
 * @date: 2023/2/15 14:35
 * @description：moka_test2
 * @update: 2023/2/15 14:35
 */

// test case
const e = [{ start: 3, end: 5 }, { start: 9, end: 10 }, { start: 4, end: 6 }, { start: 5, end: 8 }, { start: 10, end: 12 }, { start: 11, end: 14 }];

const f = [{ start: 4, end: 7 }, { start: 6, end: 9 }, { start: 1, end: 3 }, { start: 8, end: 10 }];
const g = [{ start: 4, end: 7 }, { start: 9, end: 10 }, { start: 7, end: 9 }];

// console.log(merge(e)); // [{start: 3, end: 8}, {start: 9, end: 14}]
// console.log(merge(f)); // [{start: 1, end: 3}, {start: 4, end: 10}]
// console.log(merge(g)); // [{start: 4, end: 10}]

function merge (nums) {
    // 判断哪些区间出在交集
    const res = []
    nums.sort((a,b) => a['start'] - b['start'])
    console.log(nums);

}

console.log(merge(e))


function isOverlapped (first, second) {
    // TODO
    let fisrtRight = 0, secondLeft = 99999 // Number.MAX
    // 排序 first second
    let fisrtStart = first['start']
    let secondStart = second['start']
    // console.log(fisrtStart,secondStart);
    if (fisrtStart > secondStart) {  // 交换first second
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
