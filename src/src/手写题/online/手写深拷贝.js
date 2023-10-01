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
function deepClone3(target){
    if(target!==null && typeof target == 'object'){
        let res = Array.isArray(target) ? [] : {};
        for(let k in target){
            if(target.hasOwnProperty(k)){
                res[k] = deepClone3(target[k])
            }
        }
        return res;
    }else{
        return target;
    }
}
// 修改成map
function deepClone4(targte){
    let map = new Map();
    const deepClone = (target) => {
        if(target!==null && typeof target == 'object'){
            let res = Array.isArray(target) ? [] : {};
            for(let k in target){
                if(target.hasOwnProperty(k)){
                    if(map.get(k)) return target;
                    map.set(target, res);
                    res[k] = deepClone3(target[k])
                }
            }
            return res;
        }else{
            return target;
        }
    }
    return deepClone(targte)
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
console.log(deepClone4(target))
