function promiseAll(promises){
	// 手写一个promise all
	return new Promise((resolve, reject)=>{
		let promiseNum = promises.length;
		let count = 0;
		let res = []
		for(let i=0;i<promiseNum;i++){
			Promise.resolve(promises[i]).then(val=>{
					count++;
					res[i]=val;
					if(count==promiseNum){
						return resolve(resolvedResult)
					}
				}, error=>{
					return reject(error)
				})
		}
	})
}

// 合并发送多个网络请求 使用axios封装
function fetchAllRequest(urls){
	const promises = urls.map(url => axios.get(url));
	return Promise.all(promises).then((response)=>{
		// 处理数据
		return response.map(response => response.data)
	}).catch((err)=>{
		console.log('err');
		throw err;
	})
}
// 测试
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
fetchAllRequest(urls).then((dataArray)=>{
	console.log(dataArray);
}).catch((err)=>{
	console.log(err);
})