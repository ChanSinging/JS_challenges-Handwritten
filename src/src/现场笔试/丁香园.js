/**
 * @name: 丁香园
 * @author: cxy
 * @date: 2023/3/16 11:18
 * @description：丁香园
 * @update: 2023/3/16 11:18
 */
// 编写类型判断函数？返回 object array string number boolean
function judge (obj) {
    // 判断string number
    // if (typeof obj === 'boolean') return 'boolean';
    if (Array.isArray(obj)) {
        return 'Array';
    } else {
        return typeof obj
    }
    // if (typeof obj === 'object') return 'object';
    // return null;
}

let nums = [[1, 2, 3], true, '123', 1, Object]

console.log(test(nums));

function test (nums) {
    let map = []
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = judge(nums[i])
    }
    return map
}

// 生成2-32的随机数
function randomNumber () {
    return Math.floor((Math.random()) * 30) + 2
}

function isRandom () {
    for (let i = 0; i < 100; i++) {
        let rand = randomNumber();
        if (rand > 32 || rand < 2) return false
    }
    return true
}

console.log(isRandom());
