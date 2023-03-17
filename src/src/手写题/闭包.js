function a() {
    const num = 123;
    // 闭包问题
    function b() {
        console.log(num);
    }
    b();
}
a()
// reduce使用
const dp = [1,2,4,5,7]
let sum = dp.reduce((a, b)=>a+b)
console.log(sum);