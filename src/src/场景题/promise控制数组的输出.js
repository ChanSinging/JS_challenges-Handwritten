// async function execute(array){
// 	let res = []
// 	for(let i=0;i<array.length;i++){
// 		res = await array[i](res);
// 	}
// 	return res;
// }
// function asyncFunction(val){
// 	return new Promise((resolve, reject)=>{
// 		setTimeout(()=>{
// 			const res = val ? val+1 : 1;
// 			resolve(res);
// 		}, 1000)
// 	})
// }
// // 异步数组
// const promises = [
// 	asyncFunction,
// 	asyncFunction,
// 	asyncFunction,
// 	// 添加更多的异步函数...
// ];

// // 执行异步数组中的 Promise 操作
// execute(promises)
// 	.then(res => {
// 		console.log('最终结果：', res);})
// 	.catch(error => {
// 		console.error('出现错误：', error);
// 	  });
async function executeAsyncArray(array) {
	let result; // 存储中间结果
  
	for (let i = 0; i < array.length; i++) {
	  // 等待前一个 Promise 执行完成并获取结果
	  result = await array[i](result);
	}
  
	return result; // 返回最终结果
  }
  
  // 示例异步函数
  function asyncFunction(value) {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		const result = value ? value + 1 : 1;
		resolve(result);
	  }, 1000);
	});
  }
  
  // 异步数组
  const promises = [
	asyncFunction,
	asyncFunction,
	asyncFunction,
	// 添加更多的异步函数...
  ];
  
  // 执行异步数组中的 Promise 操作
  executeAsyncArray(promises)
	.then(finalResult => {
	  console.log('最终结果：', finalResult);
	})
	.catch(error => {
	  console.error('出现错误：', error);
	});
// promise