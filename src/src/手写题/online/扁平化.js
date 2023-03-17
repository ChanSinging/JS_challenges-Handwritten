/**
 * @name: 扁平化
 * @author: cxy
 * @date: 2023/3/6 9:38
 * @description：扁平化
 * @update: 2023/3/6 9:38
 */
const nums = [1,[23,[23]]]
function flaten1(nums) {
    let tmp = nums.toString().split(',')
    let res = tmp.map(item=>{
        return parseInt(item)
    })
    return res
}
// 递归
function digui(nums) {
    let res = []
    nums.map(item=>{
        if(Array.isArray(item)){
            res = res.concat(digui(item))
        } else {
            res.push(item)
        }
    })
    return res
}

// console.log(digui(nums))

// 数组去重
let nums2 = [1,2,2,24,13,5]
function quchong(nums) {
    return new Set(nums)
}
function quchong2(nums){
    // 使用include
    let res = []
    for (let i=0;i<nums.length;i++) {
        if(res.includes(nums[i])){
            continue
        } else {
            res.push(nums[i])
        }
    }
    return res
}
console.log(quchong2(nums2))
