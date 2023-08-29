/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-03-17 10:21:53
 * @LastEditors: chansinging
 * @LastEditTime: 2023-08-03 15:30:16
 */
/**
 * @name: 防抖和节流
 * @author: cxy
 * @date: 2023/2/13 16:47
 * @description：防抖和节流
 * @update: 2023/2/13 16:47
 */
function debounce(func, wait){
    let timerout
    return function () {
        const conexts = this
        const args = [...arguments]
        // 如果定时器有时间 清空
        if(timerout) clearTimeout(timerout)

        timerout = setTimeout(()=>{
            func.apply(conexts, args)   // this指向自己本身
        }, wait)
    }
}

function throttle(func, wait) {
    let timeout
    return function () {
        let contexts = this
        let args = [...arguments]

        if(!timeout) {
            timeout = setTimeout(()=>{
                func.apply(contexts, args)
                timeout = null
            }, wait)
        }
    }
}

// 防抖
function debounce1(fn, wait){
    let timeout = null
    return function () {
        const contexts = this
        const args = [...arguments]
        if(timeout) {
            clearTimeout(timeout)
            timeout = null
        }
        timeout = setTimeout(()=>{
            fn.apply(contexts, args)
        }, wait)
    }
}

// 调用第三方库lodash实现防抖和节流
// 可以使用_.debounce函数来创建一个防抖函数。这个函数接受两个参数：要执行的函数和延迟时间（毫秒）。
const debouncedFn = _.debounce(myFunction, 500);
// 添加函数的监听
input.addEventListener('input', debouncedFn);

// 节流
const throttledFn = _.throttle(myFunction, 500);
input.addEventListener('input', throttledFn);