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
        if (val instanceof Array) {  // 判断是不是数组 Array.isArray();
            arr1 = arr1.concat(fn(val))
        } else {
            arr1.push(val)
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

// 拍平数组，设置层数
function fn5(arr, depth){
    // let res = [];
    // return arr.reduce((pre, cur)=>{
    //     if(Array.isArray(cur) && depth>0){
    //         return pre.concat(fn(cur, depth-1))
    //     }else{
    //         return pre.concat(cur)
    //     }
    // }, [])   
}
function flattenArray(arr, depth) {
    return arr.reduce((result, item) => {
      if (Array.isArray(item) && depth > 0) {
        return result.concat(flattenArray(item, depth - 1));
      } else {
        return result.concat(item);
      }
    }, []);
  }

var arr = [1, [2, [3, [4, 5]]]];;
console.log(flattenArray(arr, 2))
// 重点学习fn fn3
