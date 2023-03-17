/**
 * @name: 归并排序
 * @author: cxy
 * @date: 2023/2/23 19:37
 * @description：归并排序
 * @update: 2023/2/23 19:37
 */
// 归并排序
const tmp = new Array(10).fill(0) // 辅助数组
// tmp 保存的是 q[l..mid] , q[mid+1..r] 中从小到大排序的所有数
function merge_sort (nums, l, r) {
    if (l >= r) return
    let mid = l + r >> 1
    // 递归
    merge_sort(nums, l, mid)
    merge_sort(nums, mid + 1, r)
    // k表示排序的个数，i表示左边的边界，j便是中间的节点
    let k = 0, i = l, j = mid + 1

    //第三步：合并子问题
    while (i<=mid && j<=r){  // i小于左边边界，j小于右边的边界
        if(nums[i]<=nums[j]) tmp[k++] = nums[i++]
        else tmp[k++] = nums[j++]
    }
    // 左边没循环完
    while(i<=mid) tmp[k++] = nums[i++]
    // 右边没循环完
    while(j<=r) tmp[k++] = nums[j++]
    // tmp复制回nums
    console.log(tmp, l)
    for (let i=l, j=0;i<=r; i++, j++) nums[i] = tmp[j]

}

const nums = [1, 2, 78, 8, 31, 0]
merge_sort(nums, 0, nums.length - 1)
console.log(nums);
