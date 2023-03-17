/**
 * @name: 数组扁平化
 * @author: cxy
 * @date: 2023/2/15 11:58
 * @description：数组扁平化
 * @update: 2023/2/15 11:58
 */
function fn (arr) {
    let arr1 = []
    // 递归进fn 最底层是用arr.push()
    arr.forEach((val) => {
        if (val instanceof Array) {  // 判断是不是数组
            arr1 = arr1.concat(fn(val))
            console.log('val 在 array原型链上' + `${val}`)
        } else {
            arr1.push(val)
            console.log('val 不在 array原型链上' + `${val}`)
        }
    })

    return arr1
}

// 使用reduce实现，
function fn2 (arr) {
    return arr.reduce((prev, cur) => {
        return prev.concat(Array.isArray(cur) ? fn(cur) : cur)
    }, [])
}

// 使用reduce实现
function fn5 (arr) {
    return arr.reduce((a, b) => a.concat(Array.isArray(b) ? fn5(b) : b), [])   // 相比原始的 (deep=1，Array.isArray(b)?fn5(b) :b) 再次向下遍历
}

function fn3 (arr) {
    return arr.flat(Infinity)
}

// toString
function fn4 (arr) {
    let arr2 = arr.toString().split(',')
    console.log();
    let arr1 = arr2.map(value => {
        return parseInt(value)
    })
    return arr1
}

//

var arr = [1, 2, [3, 4, 5, [6, 7, 8], 9], 10, [11, 12]];
console.log(fn(arr))
// 重点学习fn fn3
