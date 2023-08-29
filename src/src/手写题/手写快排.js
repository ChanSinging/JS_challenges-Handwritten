/**
 * @name: 手写快排
 * @author: cxy
 * @date: 2023/2/27 10:06
 * @description：手写快排
 * @update: 2023/2/27 10:06
 */
function quickSort (nums, l, r) {
    console.log(l + '-' + r);
    // 使用C++的模板
    if (l >= r) return
    let i = l-1, j = r+1, mid = nums[l + r >> 1]
    while (i < j) {
        i++
        while (nums[i] < mid) i++
        j--
        while (nums[j] > mid) j--
        if (i < j) {
            let tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }
    }
    quickSort(nums, l, j) // left边界和 j（靠近中点）
    quickSort(nums, j + 1, r)
}
let nums = [13,41,6,9,1,3,0]
quickSort(nums,0,nums.length-1)
console.log(nums);