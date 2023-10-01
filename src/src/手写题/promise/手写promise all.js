/**
 * @name: 手写promise all
 * @author: cxy
 * @date: 2023/2/17 16:43
 * @description：手写promise all  处理多个请求，将一个页面所用的在不同接口的数据一起请求起来，
 * @update: 2023/2/17 16:43
 */
/** 核心思想是接受一个Promise实例的数组或具有Iterator接口作为对象
 这个方法返回一个新的promise对象，遍历传进来的参数用Promise将参数包一层，变成一个promise对象
 参数所有回调成功才是成功
 **/
function promiseAll(promises) {
    return new Promise(function (resolve, reject) {
        if(!Array.isArray(promises)){
            throw new TypeError(`参数得是一个数组`)
        }
        // 新数组的下标
        let resolvedCounter = 0
        let promiseNum = promises.length
        let resolvedResult = []
        // 一次遍历promise数组
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i].then(value => {
                resolvedCounter++
                resolvedResult[i] = value
                if(resolvedCounter === promiseNum) {
                    // 遍历完全部的promise数组
                    return resolve(resolvedResult)
                }
            }, error=>{
                return reject(error)
            }))
        }
    })
}

let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(p1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(p2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(p3)
    }, 3000)
})
MyPromise.promiseAll([p1, p2, p3].then(res => {
    console.log(res)
}))
