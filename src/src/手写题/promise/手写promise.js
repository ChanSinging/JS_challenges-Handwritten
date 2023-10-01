/**
 * @name: 手写promise
 * @author: cxy
 * @date: 2023/2/17 15:53
 * @description：手写promise
 * @update: 2023/2/17 15:53
 */
// 手写promise  promise.all promise.race
const PENDING = 'pending'   // pending意味等待
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise (fn) {
    // 保存初始化状态
    let self = this

    // 初始化状态
    this.state = PENDING
    // 用于保存resolve或rejected
    this.value = null
    // 用于保存resolve,rejected的回调函数
    this.rejectedCallbacks = []
    this.resolveCallbacks = []  //

    // 状态转变为resolved
    function resolve (value) {
        // 判断传入的元素是否是promise 如果是 则状态改变必须等待前一个状态
        if (value instanceof MyPromise) {
            return value.then(resolve, reject)
        }
        setTimeout(() => {
            // 只有状态为pending才转变
            if (self.state === PENDING) {
                self.state = RESOLVED
                //设置传入的值
                self.value = value
                // 执行回调函数，对调函数的栈得全部取出
                self.rejectedCallbacks.forEach(callbacks => {
                    callbacks(value)
                })
            }
        }, 0)
    }

    function reject (value) {
        setTimeout (() => {
            // 只有状态为pending时才转变
            if (self.state === PENDING) {
                // 修改材料
                self.state = REJECTED
                // 设置传入的值
                self.value = value
                // 执行回调函数
                self.rejectedCallbacks.forEach(callback => {
                    callback(value)
                })
                
            }
        }, 0)
    }

    try {
        fn(resolve, reject)
    } catch (e) {
        reject(e)
    }
}
// 手写promise then
MyPromise.prototype.then = function (onResolved, onRejected) {
    // 判断两个函数类型，因为两个函数都是可选参数
    onRejected = typeof onRejected === 'function' ? onRejected : ()=>{};
    onResolved = typeof onResolved === 'function' ? onResolved : ()=>{};

    // 如果是等待状态，函数加入对应列表
    if(this.state===PENDING){
        this.rejectedCallbacks.push(onRejected)
        this.resolveCallbacks.push(onResolved)
    }

    if(this.state === RESOLVED) {
        onResolved(this.value)
    }
    if(this.state === REJECTED) {
        onRejected(this.value)
    }
}
let p1 = new MyPromise((resolve, reject) => {
    resolve(123)
})
console.log(p1)
p1.then(res =>{
    console.log('success '+res)
}, reason => {
    console.log('failed '+reason)
})
