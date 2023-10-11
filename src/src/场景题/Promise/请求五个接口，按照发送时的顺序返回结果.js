async function request(url){
	const urls = [
		'url1',
		'url2',
		'url3'
	]
	const res = [];
	for(const k of urls){
		try{
			const response = fetch(k);
			const data = await response.json();
			res.push(data);
		}catch(error){
			console.log(error);
			res.push(null);
		}
	}
	return res;
}
// 也可以使用