function race(){
	const data = Promise.race([
		fetch('/api'),
		new Promise((resolve, reject)=>{
			setTimeout(()=>reject(new Error('请求超时')), 5000)
		})  // 设置两个请求，加以赛跑
	]).then(res => res.json())
	.catch(err => console.log(err));
}

