/**
 * @name: 区间合并
 * @author: cxy
 * @date: 2023/2/15 16:47
 * @description：区间合并
 * @update: 2023/2/15 16:47
 */
var merge = function (intervals) {
    let res = [];
    intervals.sort((a, b) => a[0] - b[0]);
    console.log(intervals);
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        let cur = intervals[i];
        if (prev[1] >= cur[0]) { // 有重合
            prev[1] = Math.max(cur[1], prev[1]);
        } else {       // 不重合，prev推入res数组
            res.push(prev);  // prev[1]一直在更新
            prev = cur;  // 更新 prev
        }
    }
    res.push(prev);  // 最后一次的遍历还没放入
    return res;
};
let nums = [[1,3],[2,6],[8,10],[15,18]]
console.log(merge(nums))
