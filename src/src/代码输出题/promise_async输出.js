async function async1() {
	console.log('async1 start')
	await async2()
	console.log('async1 end')
}

async function async2() {
	console.log('async start')
	return new Promise((resolve, reject) => {
		resolve()
		console.log('async2 promise')
	})
}

console.log('script start')
setTimeout(() => {
	console.log('setTimeout')
}, 0);

async1()

new Promise((resolve) => {
	console.log('promise1')
	resolve('dd')
}).then((res) => {
	console.log(res);
	console.log('promise2')
}).then(() => {
	console.log('promise3')
})
console.log('script end')



// await和then安装放入事件队列的顺序输出，开始执行当前主线程下的微任务，即task1，task2，依次输出
// async function async1() {
// 	console.log(1);
// 	await async2();
// 	console.log(2); //
//   }
//   async function async2() {
// 	console.log(3);
//   }
//   console.log(4);
//   setTimeout(function () {
// 	console.log(5);
//   });
//   async1()
//   new Promise(function (resolve, reject) {
// 	console.log(6);
// 	resolve();
//   }).then(function () {
// 	console.log(7); //
//   });
//   console.log(8);
