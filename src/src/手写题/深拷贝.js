// let a = {
//     age: 1
// }
// let b = a
// a.age = 2
// console.log(b.age) // 2
let a = {
    age: 1, c () {
    },
}
let b = Object.assign({}, a)  // a!=b
// let b = {...a}  es6 最新
a.age = 2
// console.log(b.age)

// 青铜段位
let obj = JSON.parse(JSON.stringify(a))

// 白银对位
function deepClone (target) {
    if (target !== null || typeof target === 'object') {
        let result = ''
        for (let a in target) {
            if(target.hasOwnProperty(a))
                result[a] = deepClone(target[a])
        }
        console.log(result)
        return result
    }
    return target
}

// 黄金段位   就记住
function deepClone3(target) {
    if(target !== null && typeof target === 'object') {
        // 判断是否是数组
        let result = Array.isArray(target) ? [] : {};
        for(let k in target) {
            if(target.hasOwnProperty(k)){
                result[k] = deepClone3(target[k])
            }
        }
        return result
    } else {
        return target
    }
}

function cloneDeepJson(obj){
    return JSON.parse(JSON.stringify(obj))
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

// 铂金段位 正确理解引用类型概念的能力；精确判断数据类型的能力。
function deepClone5(){
	let map = new Map()
	function deepClone (target) {
        if (target !== null && typeof target === 'object') {
            let result =  Array.isArray(target) ? [] : {};
            if(map.get(target)) return map.get(target);//返回自身
            map.set(target, result);
            for (let k in target) {
                if (target.hasOwnProperty(k)) {
                    result[k] = deepClone(target[k]);
                }
            }
            return result;
        } else {
            return target;
        }
    }
    return deepClone(target)
}

// 星耀版深拷贝
function deepClone4(target) {
    // 获取数据类型
    function getType(target) {
        return Object.prototype.toString.call(target)
    }
    //判断数据是不是引用类型
    function isObject(target) {
        return target !== null && (typeof target === 'object' || typeof target === 'function');
    }
    //处理不需要遍历的应引用类型数据
    function handleOherData(target) {
        const type = getType(target);
        switch (type) {
            case "[object Date]":
                return new Date(target)
            case "[object RegExp]":
                return cloneReg(target)
            case "[object Function]":
                return cloneFunction(target)

        }
    }
    //拷贝Symbol类型数据
    function cloneSymbol(targe) {
        const a = String(targe); //把Symbol字符串化
        const b = a.substring(7, a.length - 1); //取出Symbol()的参数
        return Symbol(b); //用原先的Symbol()的参数创建一个新的Symbol
    }
    //拷贝正则类型数据
    function cloneReg(target) {
        const reFlags = /\w*$/;
        const result = new target.constructor(target.source, reFlags.exec(target));
        result.lastIndex = target.lastIndex;
        return result;
    }
    //拷贝函数
    function cloneFunction(targe) {
        //匹配函数体的正则
        const bodyReg = /(?<={)(.|\n)+(?=})/m;
        //匹配函数参数的正则
        const paramReg = /(?<=\().+(?=\)\s+{)/;
        const targeString = targe.toString();
        //利用prototype来区分下箭头函数和普通函数，箭头函数是没有prototype的
        if (targe.prototype) { //普通函数
            const param = paramReg.exec(targeString);
            const body = bodyReg.exec(targeString);
            if (body) {
                if (param) {
                    const paramArr = param[0].split(',');
                    //使用 new Function 重新构造一个新的函数
                    return new Function(...paramArr, body[0]);
                } else {
                    return new Function(body[0]);
                }
            } else {
                return null;
            }
        } else { //箭头函数
            //eval和函数字符串来重新生成一个箭头函数
            return eval(targeString);
        }
    }
    /**
     * 遍历数据处理函数
     * @array 要处理的数据
     * @callback 回调函数，接收两个参数 value 每一项的值 index 每一项的下标或者key。
     */
    function handleWhile(array, callback) {
        let index = -1;
        const length = array.length;
        while (++index < length) {
            callback(array[index], index);
        }
    }
    function clone(target, map) {
        if (isObject(target)) {
            let result = null;
            if (getType(target) === "[object Array]") {
                result = []
            } else if (getType(target) === "[object Object]") {
                result = {}
            } else if (getType(target) === "[object Map]") {
                result = new Map();
            } else if (getType(target) === "[object Set]") {
                result = new Set();
            }

            // 解决循环引用
            if (map.has(target)) {
                return map.get(target);
            }
            map.set(target, result);

            if (getType(target) === "[object Map]") {
                target.forEach((value, key) => {
                    result.set(key, clone(value, map));
                });
                return result;
            } else if (getType(target) === "[object Set]") {
                target.forEach(value => {
                    result.add(clone(value, map));
                });
                return result;
            } else if (getType(target) === "[object Object]" || getType(target) === "[object Array]") {
                const keys = getType(target) === "[object Array]" ? undefined : Object.keys(target);

                function callback(value, key) {
                    if (keys) {
                        // 如果keys存在则说明value是一个对象的key，不存在则说明key就是数组的下标。
                        key = value
                    }
                    result[key] = clone(target[key], map)
                }
                handleWhile(keys || target, callback)
            } else {
                result = handleOherData(target)
            }
            return result;
        } else {
            if (getType(target) === "[object Symbol]") {
                return cloneSymbol(target)
            } else {
                return target;
            }
        }
    }
    let map = new WeakMap;
    const result = clone(target, map);
    map = null;
    return result
}
