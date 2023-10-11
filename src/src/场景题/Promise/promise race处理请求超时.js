function PromiseRace(){
	return Promise.race([
		fetch('/api'),
		new Promise((reslove, reject)=>{
			setTimeout(()=>console.log('time out'), 500)
		})
	]).then(res=>console.log(res.json()))
	.catch(err => console.log(err))
}

