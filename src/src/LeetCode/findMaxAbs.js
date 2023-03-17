let nums = [2, 4, 5, 6, 7, 8];
// let nums=line.split(',').map((item)=>parseInt(item));
// 找nums分成两个集合，求两者集合的和的绝对值最小
// 讨论如何划分，求数组的一个子集，使得这个子集中的元素的和尽可能接近sum/2
let target = parseInt(nums.reduce((a, b) => a + b) / 2);
let dp = new Array(target + 1).fill(0);
for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
        debugger
        dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
        console.log(dp[j]);
    }
}
// dp算法的dp数组最后一个数是结果
console.log(Math.abs(2 * dp[target] - nums.reduce((a, b) => a + b)));
let arr = [1,2,4,5,6]
// arr.length = 2
arr[10]=11
console.log(arr);
