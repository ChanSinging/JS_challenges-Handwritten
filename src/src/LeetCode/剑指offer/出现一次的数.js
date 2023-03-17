/**
 * @name: 出现一次的数
 * @author: cxy
 * @date: 2023/1/29 12:26
 * @description：出现一次的数
 * @update: 2023/1/29 12:26
 */

// hashmap 的js实现
var singleNumber = function (nums) {
    // 找到只出现一次的数 1.异或 2.map(set get)
    let map = new Map()
    // seen.set(nums[0], 1)
    for (let i = 0; i < nums.length; i++) {
        const ch = nums[i]
        if (isNaN(map.get(nums[i]))) {
            map.set(ch, 1)
        } else {
            const count = map.get(ch)
            map.set(ch, count + 1)
        }
    }
    // for (let key of map) {
    //     if (key[1] === 1) return key[0]
    // }
    // 统计出现最多的字符
    let seen = map
    let max = 0
    let str = []
    // for (let [value,key] of seen) {
    //     console.log([value, key])
    // }
    // seen.forEach((value,key) => {
    //     if(value===max){
    //         str.push(value)
    //     } else if (value>max) {
    //         str = [value]
    //         max = key
    //     }
    // })
    // console.log(str, max)
};

function single (nums) {
    // 新建一个计数数组
    let numCount = [];
    // 将技术数组清零
    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]] = 0;
    }
    // 循环遍历记录数字出现的个数
    for (let i = 0; i < nums.length; i++) {
        numCount[nums[i]]++;
    }
    // 循环遍历数组，计数为1的即为要找的数组
    for (let i = 0; i < nums.length; i++) {
        if (numCount[nums[i]] === 1) return nums[i];
    }
}

const nums = [3, 4, 3, 3]
console.log(singleNumber(nums));
