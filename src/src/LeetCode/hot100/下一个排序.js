/**
 * @name: 下一个排序
 * @author: cxy
 * @date: 2023/2/17 14:48
 * @description：下一个排序
 * @update: 2023/2/17 14:48
 */
var nextPermutation = function (nums) {
    // 下一个字典序更大的排列，如果没有则重拍
    // dfs 找出所有的组合
    const res = [], track = []
    const dfs = (nums, start) => {
        if (track.length === nums.length) {
            res.push([...track])
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (track.includes(nums[i])) continue
            track.push(nums[i])
            dfs(nums, 0)
            track.pop()
        }

    }
    dfs(nums, 0)
    const newNums = []
    for (let i of res) {
        newNums.push(Number(i.join('')));
    }
    newNums.sort((a, b) => a - b)
    let base = nums.join('')
    for (let i = 0; i < newNums.length; i++) {
        if(newNums[i]>base){
            return newNums[i]
        }
    }
    return newNums[0]
};
let nums = [1,2,3]
console.log(nextPermutation(nums))
