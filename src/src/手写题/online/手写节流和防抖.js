/**
 * @name: 手写节流和防抖
 * @author: cxy
 * @date: 2023/2/28 15:37
 * @description：手写节流和防抖
 * @update: 2023/2/28 15:37
 */
// 防抖 重复点击重复开始计时
function debounce (func, wait) {
    let timer = null
    return function () {
        let context = this
        let args = [...arguments]
        if (timer) {
            clearTimeout(timer) // 重新计时
            timer = null
        }
        timer = setTimeout(() => {
            func.apply(context, args)
        }, wait)
    }
}

// 节流，按最开始的时间来计算
function throttle (func, wait) {
    let timer = null
    return function () {
        let context = this
        let args = [...arguments]
        // timer为空时
        if (!timer) {  //如果定时器为空, 不重新计时
            timer = setTimeout(() => {
                func.apply(context, args)
                timer = null // 置空 时间置空
            }, wait)
        }
    }
}
// 附加条件的防抖
function debounceWithTimeout (func, delay, executeTimeout) {
    let timeoutId;
    return function (...args) {

        clearTimeout(timeoutId);
        if (executeTimeout)
            setTimeout(() => {
                    func.apply(this, args);
                },
                executeTimeout
            )
        timeoutId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
