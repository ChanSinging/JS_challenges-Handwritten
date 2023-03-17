/**
 * @name: didi_2
 * @author: cxy
 * @date: 2023/2/27 15:25
 * @description：didi_2
 * @update: 2023/2/27 15:25
 */
// 实现深拷贝,递归写法
function deepClone(obj) {
    if(obj!==null && typeof obj !== 'object') return
    //开始遍历
    let newObj = Array.isArray(obj) ? [] : {}
    for (let i of obj){
        if(newObj.hasOwnProperty(i)){
            // 存在 concat
            newObj[i] = deepClone(i)
        }
    }
    return newObj;
}
let obj = {name:'cxy', age: '25'}
console.log(deepClone(obj));

function deepClone3(obj){
    return JSON.parse(JSON.stringify(obj))
}
