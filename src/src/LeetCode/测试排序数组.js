var findClosestElements = function(arr, k, x) {
    //二分+双指针
    arr.sort((a,b)=>a-b);
    let index = search(arr, x);
    const res = [];
    let l=index-1, r=index;
    let count=0;
    while (count < k) {
        if (l >= 0 || r < arr.length) {
            if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
                res.push(arr[l]);
                l--;
				console.log(1);
            } else {
                res.push(arr[r]);
                r++;
				console.log(2);
            }
        } else if (l >= 0) {
            res.push(arr[l]);
            l--;
        } else if (r < arr.length) {
            res.push(arr[r]);
            r++;
        }
        count++;
  }
  res.sort((a,b)=>a-b);
  return res;
};

const search = (nums, x) => {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === x) {
      right = mid;
    } else if (nums[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(findClosestElements([1,5,10], 1, 4));