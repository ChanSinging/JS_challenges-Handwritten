/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-04-14 15:41:41
 * @LastEditors: chansinging
 * @LastEditTime: 2023-04-14 16:24:37
 */
// JS观察者模式 on off emit once  该题也是手写eventBus
class EventEmitter{
    constructor(){
        this.task = {}
    }
    on(event, callback){//监听event事件，触发时调用callback
        if(!this.task[event]) this.task[event] = [];
        this.task[event].push(callback);
    }
    off(event, callback){// 停止监听event事件
        const eventListener = this.task[event];
        if(eventListener){
            this.task[event] = eventListener.filters(call => call!==callback);
        }
    }
    emit(event, ...args){ // 触发事件
        const eventListener = this.task[event];
        if(eventListener){
            eventListener.forEach(callback => {
                callback(...args);
            })
        }
    }
    //为事件注册单次监听器
    once(event, callback){ 
        const wrapFanc = (...args) => {
            callback.apply(args)
            this.off(event, wrapFanc)
        }
        this.on(event, wrapFanc)
    }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello, ${name}!`);
}

function farewell(name) {
  console.log(`Goodbye, ${name}!`);
}

// 订阅事件
emitter.on("greet", greet);
emitter.on("farewell", farewell);

// 发布事件
emitter.emit("greet", "John"); // 输出: Hello, John!
emitter.emit("farewell", "Alice"); // 输出: Goodbye, Alice!