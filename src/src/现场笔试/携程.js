/**
 * @name: xiecheng1
 * @author: cxy
 * @date: 2023/3/7 19:07
 * @description：xiecheng1
 * @update: 2023/3/7 19:07
 */
let nums = [2, 4, 2, 3, 2]

function steady (nums) {
    let dp = new Array(nums.length).fill(0)
    let res = 0
    dp[0] = 1
    // dp[1] = Math.abs(nums[0] - nums[1]) >= 1 ? 2 : 1
    for (let i = 1; i < nums.length; i++) {
        for (let j = 1; j <= i; j++) {
            if (Math.abs(nums[j] - nums[j - 1]) <=1) {  // 判定写的有问题
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
        res = Math.max(res, dp[i])

    }
    return res
}

let nums2 = [2, 4, 2, 3, 2]
console.log(steady(nums2))

function steady2 (nums) {
    let ans = 0, left = 0, right = 1
    while (left < nums.length && right < nums.length) {
        if (Math.abs(nums[right] - nums[right - 1]) <= 1) {
            ans = Math.max(ans, right - left + 1)
            right++
        } else {
            left = right + 1
            right = left + 1
        }
    }
    return ans
}
