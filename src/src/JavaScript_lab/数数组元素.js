var majorityElement = function(nums) {
    // 找出现最多的
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const ch = nums[i]
        if (isNaN(map.get(nums[i]))) {
            map.set(ch, 1)
        } else {
            const count = map.get(ch)
            map.set(ch, count + 1)
        }
    }
    for (let key of map) {
        if (key[1] > nums.length/2) return key[0]
    }
};
let nums = [1,2,3,2,2,2,5,4,2]
nums.sort((a, b) => a-b)

console.log(frequency);
// console.log(majorityElement(nums))
