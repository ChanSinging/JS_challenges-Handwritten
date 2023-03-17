/**
 * @name: 乘积最大子数组
 * @author: cxy
 * @date: 2023/2/22 19:45
 * @description：乘积最大子数组
 * @update: 2023/2/22 19:45
 */
var maxProduct = function(nums) {
    // 动态规划
    let max = 1
    let min = 1
    let res = -Infinity
    // dp要存储一个绝对值尽可能大的
    for(let i=0;i<nums.length;i++){
        if(nums[i]<0){
            // 存在负数，max和min对换，
            let tmp = min
            min = max
            max = tmp
        }
        max = Math.max(nums[i],nums[i]*max)
        min = Math.min(nums[i],nums[i]*min)
        res = Math.max(res, max)
    }

    return res
};
let nums = [-2,3,-4]
console.log(maxProduct(nums))
