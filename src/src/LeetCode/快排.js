function compareDigitSum (a, b) {
    return a > b;
}

function quickSort (nums, lo, hi) {
    if (lo >= hi) {
        return;
    }
    //i索引，num[i]已经是左边小于num[i],右边大于num[i];
    let i = partition(nums, lo, hi);
    //以i为分割点
    quickSort(nums, lo, i - 1);
    quickSort(nums, i + 1, hi);
}

function partition (nums, lo, hi) {
    let pivot = nums[lo];
    let i = lo + 1;//从1开始，
    let j = hi;
    while (i <= j) {
        while (i <= j && compareDigitSum(pivot, nums[i])) {
            i++;
        }
        while (i <= j && compareDigitSum(nums[j], pivot)) {
            j--;
        }
        if (i <= j) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
            j--;
        }
    }
    //交换pivot和num[j]
    nums[lo] = nums[j];
    nums[j] = pivot;
    return j;

}

function qiuckSort2 (nums, l, r) {
    if (l >= r) return
    let i = l - 1, j = r + 1, x = nums[l + r >> 1]
    while (i < j) {
        while (nums[++i] < x)
        while (nums[--j] > x)
        if (i < j) {
            let tmp = nums[i]
            nums[i] = nums[j]
            nums[j] = tmp
        }
    }
    qiuckSort2(nums,l,j)
    qiuckSort2(nums,j+1,r)
}

let nums = [1, 6, 3, 8, 10, 2]
qiuckSort2(nums, 0, nums.length - 1)
console.log(nums);

console.log(2.00000**-21448)
