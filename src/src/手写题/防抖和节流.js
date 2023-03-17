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
