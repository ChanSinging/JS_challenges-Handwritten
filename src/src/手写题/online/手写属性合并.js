/**
 * @name: 手写属性合并
 * @author: cxy
 * @date: 2023/3/1 21:27
 * @description：手写属性合并
 * @update: 2023/3/1 21:27
 */
const obj = [
    { key: "a", val: 1 },
    { key: "a", val: 3 },
    { key: "a", val: 2 },
    { key: "b", val: 4 },
    { key: "a", val: 5 },
];
console.log(transform(obj));

function transform (obj) {
    let res = []
    for (let item of obj){
        let key = item['key']
        let val = item['val']
        if(res.hasOwnProperty(key)){
            res[key] = [].concat(res[key], val)
        }else {
            res[key] = val
        }
    }
    return res
}
