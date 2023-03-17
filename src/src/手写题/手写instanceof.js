/**
 * @name: 手写instanceof
 * @author: cxy
 * @date: 2023/2/28 11:15
 * @description：手写instanceof
 * @update: 2023/2/28 11:15
 */
// 判断原型是否在原型链上
// 首先 instanceof 左侧必须是对象, 才能找到它的原型链
// instanceof 右侧必须是函数, 函数才会prototype属性
function instanceofFunc(left, right) {
    const state = ['number','string','boolean','symbol','undefined']
    if(state.includes(typeof left)) return false
    let proto = Object.getPrototypeOf(left) // 获取对象的原型
    let prototype = right.prototype  // 获取构造函数的proto对象
    // 构造函数的prototype
    while(true) {
        if(!proto) return false
        if(proto === prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}

function insatnceof3(left, right) {
    const state = ['number','string','boolean','symbol','undefined']
    if(state.includes(typeof left)) return false

    let RP = right.prototype  // 取 R 的显示原型
    let L = left.__proto__ // 取 L 的隐式原型
    while(true) {
        if(L === null) return false
        if(L === RP) return true
        L = L.__proto__  //没找到继续向上一层原型链查找
    }
}




// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// const auto = new Car('Honda', 'Accord', 1998);
console.log(instanceofFunc([], Array));


// instance原理是判断其在原型链能否找到改类型的，只能判断正确引用,不能判断基本数据类型
console.log([12,3,3] instanceof Array)
