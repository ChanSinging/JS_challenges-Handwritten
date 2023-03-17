// 统计字符串出现的最多次数
function count (str) {
    let map = new Map()
    for (item of str) {   // of 比那里对象
        if (!map.has(item)) {
            map.set(item, 1)
        } else {
            map.set(item, map.get(item) + 1)
        }
    }
    let strs = []
    let max = 0
    map.forEach((value, key) => {
        console.log(value + '==' + key);
        if (value === max) {  // 出现次数和max一样，push到结果
            strs.push(key)
        } else if (value > max) {  // 出现次数大于max
            strs = [key]
            max = value
        }
    })
    console.log([max, strs])
    return [max, strs]
}

const str = 'hello! world'
count(str)
