/**
 * @name: 优势洗牌
 * @author: cxy
 * @date: 2023/2/17 15:46
 * @description：优势洗牌
 * @update: 2023/2/17 15:46
 */
var advantageCount = function(nums1, nums2) {
    let idx1 = [], idx2 = new Array(nums2.length).fill(0)
    for (let i = 0; i < nums2.length; i++) {  //
        idx1[i] = i;
        idx2[i] = i;
    }
    // 将index保存为数值的升序，方便后续用到双指针
    // 下标排序
    idx1.sort((i, j) => nums1[i] - nums1[j]) // 0,1,2,3 升序
    idx2.sort((i, j) => nums2[i] - nums2[j]) //0, 2, 1, 3 升序

    const res = new Array(nums1.length).fill(0)
    let left = 0, right = nums1.length - 1
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[idx1[i]] > nums2[idx2[left]]) {  // 如nums1 [i]值大于nums2 [i]
            res[idx2[left++]] = nums1[idx1[i]]  // 选用idx1[i]的，放置在
        } else {
            res[idx2[right--]] = nums1[idx1[i]]
        }
    }
    return res
};
