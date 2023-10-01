//模拟网络请求任务
function sendPromisesInBatches(promises, batchSize) {
	const results = []; // 存放 Promise 返回值的数组
	// 递归函数，用于按批次发送并行处理 Promise 请求
	function sendBatch(index) {
		const batch = promises.slice(index, index + batchSize); // 获取当前批次的 Promise 数组
		const batchPromises = batch.map(promise => promise()); // 执行每个 Promise
		// 使用 Promise.all 等待当前批次的所有 Promise 执行完毕
		Promise.all(batchPromises)
			.then(batchResults => {
				results.push(...batchResults); // 将当前批次的结果添加到结果数组

				if (index + batchSize < promises.length) {
					// 如果还有剩余的 Promise，继续发送下一批次的请求
					sendBatch(index + batchSize);
				} else {
					// 所有请求执行完毕，返回结果数组
					resolve(results);
				}
			})
			.catch(error => {
				// 如果发生错误，直接返回错误
				console.log(error);
			});
	}
	// 返回一个新的 Promise，用于包装整个过程
	return new Promise((resolve, reject) => {
		sendBatch(0); // 开始发送第一批次的请求
	});
}


// 创建上千个promise
const promises = Array.from({ length: 5000 }).map((_, index) => {
	return () => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(`Promise ${index + 1}`);
			}, 100 * Math.random())
		})
	}
})


// 发送Promsie请求并处理结果
sendPromisesInBatches(promises, 100)
	.then(res => {
		console.log(res);
	}).catch(err => {
		console.log(err);
	})
