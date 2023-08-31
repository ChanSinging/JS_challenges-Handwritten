class _HardMan {
    constructor(name) {
        this.tasks = [];
        this.tasks.push(() =>
            new Promise(resolve => {
                console.log(`I am ${name}`)
                resolve()
            })
        )
        // 很关键的一步， setTimeout为异步任务，这样可以使得所有的任务
        //入队以后，才开始执行第一个next函数，主要是考虑了restFirst的情况
        setTimeout(async () => {
            for (let task of this.tasks) {
                await task()
            }
        })
       
    }
    wait(sec) {
        return new Promise(resolve => {
            console.log(`//等待${sec}秒..`)
            setTimeout(() => {
                console.log(`Start learning after ${sec} seconds`)
                resolve()
            }, sec * 1000);
        })
    }
    rest(sec) {
        this.tasks.push(() => this.wait(sec))
        return this  //确保每个方法在执行完毕后会返回当前对象的引用，
    }                   //从而可以继续在该对象上调用其他方法
    restFirst(sec) {
        this.tasks.unshift(() => this.wait(sec))
        return this
    }

    learn(params) {
        this.tasks.push(() =>
            new Promise(resolve => {
                console.log(`Learning ${params}`)
                resolve()
            })
        )
        return this
    }
}

const HardMan = function (name) {
    return new _HardMan(name)
}

//HardMan("jack").restFirst(3).learn("Chinese").learn("Englsih").rest(2).learn("Japanese")
HardMan("jack").rest(10).learn("computer") 
// //等待3秒..
// Start learning after 3 seconds
// I am jack
// Learning Chinese
// Learning Englsih
// //等待2秒..
// Start learning after 2 seconds
// Learning Japanese