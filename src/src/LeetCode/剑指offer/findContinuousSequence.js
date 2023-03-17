/**
 * @name: findContinuousSequence
 * @author: cxy
 * @date: 2023/2/8 15:15
 * @description：findContinuousSequence
 * @update: 2023/2/8 15:15
 */
const res = []
var findContinuousSequence = function (target) {
    const track = []
    // 连续正数的和, 有点动态规划
    const visited = new Array(target).fill(0) // 0表示未访问
    backtrace(track, target, visited)
    return res
};

function backtrace (track, target, visited) {
    if (sumNum(track) === target && numsDiff(track)) {  // 连续的数
        res.push(Array.from(track))
        return
    }
    for (let i = 1; i < target; i++) {
        if (visited[i] === 1) continue
        track.push(i)
        visited[i] = 1
        backtrace(track, target, visited)
        track.pop()
        visited[i] = 0
    }
}

const sumNum = (nums) => {
    let sum = 0
    nums.forEach((val) => {
        sum += val;
    }, 0)
    return sum
}
const numsDiff = (nums) => {
    // 判断nums数是否连续
    for (let i = 1; i < nums.length; i++) {
        if(nums[i]-nums[i-1]!==1) return false
    }
    return true
}
console.log(findContinuousSequence(12));
