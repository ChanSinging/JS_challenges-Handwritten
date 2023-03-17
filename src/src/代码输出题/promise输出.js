/**
 * @name: promise输出
 * @author: cxy
 * @date: 2023/2/21 19:22
 * @description：promise输出
 * @update: 2023/2/21 19:22
 */
const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve();  // 对应then
        }, 0); // 宏任务
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });
}));
first().then((arg) => {
    console.log(arg);
});
console.log(4);

// 3,7,4,1,2,5
