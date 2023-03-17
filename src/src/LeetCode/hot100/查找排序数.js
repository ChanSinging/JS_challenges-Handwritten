/**
 * @name: 查找排序数
 * @author: cxy
 * @date: 2023/2/18 16:08
 * @description：查找排序数
 * @update: 2023/2/18 16:08
 */
function search(nums, target) {
    // nums.sort((a,b) => a-b)
    // 先旋转在找target
    // 设计一个logn 的时间复杂度
    const n = nums.length
    // for(let i=0;i<n;i++){
    //     if(nums[i]===target){
    //         return i
    //     }
    // }
    // return -1
    // 二分法求解
    let left=0, right=n-1
    while(left<right){
        let mid = left + right >>1
        if(nums[mid]===target) {
            right = mid
        }else
            left = mid+1
    }
    return left

}
let nums = [0,1,2,3,4,5,6,7], target = 0
// console.log(search(nums, target))
let sumEqual = nums.reduce((prev,current,index,nums)=>{
    return prev+current
})
console.log(sumEqual);
