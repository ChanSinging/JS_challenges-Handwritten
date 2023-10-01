// retry 是报错会尝试，尝试超过一定次数才真正的 reject

function promiseRetry(promiseFn, times, delay){
	return new Promise((resolve, reject)=>{
		function attemp(){
			promiseFn().then(data => {
				resolve(data);
			}).catch(err => {
				if(times == 0){
					reject(err);
				}else{
					times--;
					setTimeout(attemp, delay);
				}
			})
		}
	})
}