/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-04-14 15:41:41
 * @LastEditors: chansinging
 * @LastEditTime: 2023-04-14 16:24:37
 */
// JS观察者模式 on off emit once  该题也是手写eventBus
class Event{
    constructor(){
        this._events = {}
    }
    on(event, callback){//监听event事件，触发时调用callback
        let res = this._events || [];
        res.push(res);
        this._events[event] = res;
        return this;
    }
    off(event, callback){// 停止监听event事件
        let res = this._events[event];
        this._event[event] = callback && res.filter(fn => fn!==callback);
        return this;
    }
    emit(...args){ // 触发事件
        const event = args[0];
        const params = [].slice.call(args, 1);
        const res = this._events[event];
        res.forEach(fn => fn.apply(params))
        return this
    }
    once(event, callback){ //为事件注册单次监听器
        let wrapFanc = (...args) => {
            callback.apply(args)
            this.off(event, wrapFanc)
        }
        this.on(event, wrapFanc)
        return this
    }
}