/**
 * @name: 组合总和
 * @author: cxy
 * @date: 2023/2/18 16:39
 * @description：组合总和
 * @update: 2023/2/18 16:39
 */
var combinationSum = function(candidates, target) {
    // 选出组合的和==7的数组  整数可以多次使用
    const res = [], track = []

    const dfs = (nums, start) => {
        if(sum([...track]) === target){
            res.push([...track])
            return
        }
        if(sum([...track])>target) return
        for(let i=start; i<nums.length; i++){
            // 如何剪枝
            track.push(nums[i])
            dfs(nums,i)
            track.pop()
        }

    }

    dfs(candidates, 0)
    return res
};
const sum = (arr)=>{
    let s = 0;
    for (let i=arr.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s;
}
let nums = [2,3,6,7]
let t = 7
// console.log(combinationSum(nums, t))

