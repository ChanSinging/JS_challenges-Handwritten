/**
 * @name: 手写深拷贝
 * @author: cxy
 * @date: 2023/2/28 10:54
 * @description：手写深拷贝
 * @update: 2023/2/28 10:54
 */
function deepClone (obj) {
    return JSON.parse(JSON.stringify(obj))
}

function deepClone3 (obj) {
    // 判断obj类型，遍历，新建newObj（判断类型），判断has....，放入new，递归
    if (obj !== null && typeof obj === 'object') {
        let result = Array.isArray(obj) ? [] : {}
        for (let k in obj) {
            // if(obj === obj[k]) continue
            if (obj.hasOwnProperty(k)) {
                result[k] = deepClone3(obj[k]) // 递归赋值
            }
        }
        return result
    } else {
        return obj
    }
}

const target = {
    field1: 1,
    field2: undefined,
    field3: 'ConardLi',
    field4: {
        child: 'child',
        child2: {
            child2: 'child2'
        }
    }
};
console.log(deepClone3(target))
let proto = target.prototype
console.log(proto);
