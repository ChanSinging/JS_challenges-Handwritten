/**
 * @name: async await
 * @author: cxy
 * @date: 2023/2/20 21:57
 * @description：async await
 * @update: 2023/2/20 21:57
 */
// async function fun0 () {
//     console.log(2)
//     return 1
// }
//
// fun0().then(value => {
//     console.log('value '+value)
// })
//
// async function fun1 () {
//     console.log('fun1 output')
//     return new Promise(function (resolve, reject){
//         resolve('Promise')
//     })
// }
// fun1().then(val => {
//     console.log('val '+val)
// })
// 使用async/await获取成功的结果

// await用法
// 定义一个异步函数，3秒后才能获取到值(类似操作数据库)
function getSomeThing(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('获取成功')
        },3000)
    })
}

async function test(){
    let a = await getSomeThing();
    console.log(a)
}
test(); // 3秒后输出：获取成功
