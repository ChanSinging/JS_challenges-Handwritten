/**
 * @name: 手写快排
 * @author: cxy
 * @date: 2023/2/27 10:06
 * @description：手写快排
 * @update: 2023/2/27 10:06
 */
function quickSort (nums, l, r) {
    // console.log(l + '-' + r);
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
    console.log(j);
    console.log(nums);
    quickSort(nums, l, j) // left边界和 j（靠近中点）
    quickSort(nums, j + 1, r)
}
function quickSort2(nums, l, r){
    if(l>=r) return;
    let left=l-1, right=r+1, mid = nums[l+r>>1];
    while(left<right){
        //左边
        left++;
        while(nums[left] < mid) left++;
        right--;
        while(nums[right] > mid) right--;
        if(left<right){
            let t = nums[left];
            nums[left] = nums[right];
            nums[right] = t;
        }
    }
    // left right 遍历
    quickSort2(nums, l, right);
    quickSort2(nums, right+1, r);
}
let nums = [13,41,6,9,1,3,0];  // 0 1 3 6 9 13 41
let nums2 = [5,2,4,1,3,6,0];
quickSort2(nums2,0,nums2.length-1)
console.log(nums2[nums2.length-4]);