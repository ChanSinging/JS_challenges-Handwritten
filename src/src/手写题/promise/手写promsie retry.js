// retry 是报错会尝试，尝试超过一定次数才真正的 reject
// 同时超过10s自动失败 
function PromiseRetry(fn, times, delay){
	function retry(){
		return new Promise((reslove, reject)=>{
			fn.then((result) => {
				resolve(result);
			}).catch((err) => {
				if(times==0){
					reject(err);
				}else{
					times--;
					setTimeout(retry, delay);// 重新发起请求
				}
			})
		})
		
	}
	return new Promise.race([
		retry(),
		new Promise((reslove, reject)=>{
			setTimeout(()=>console.log('time out'), 1000)
		})
	]).then(res=>{
		res.json();
	}).catch(err=>{
		console.log(err);
	})
}