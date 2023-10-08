const axios = require('axios');

// 封装axois
function axiosRequest(urls) {
	// use promise all 解决
	const promises = urls.map(url => axios.get(url));
	return Promise.all(promises).then(res=>{
		return res.map(res =>res.data);
	}).catch(err=>{
		return err;
	})
}
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
axiosRequest(urls).then(data=>{
	console.log(data);
}).catch(err=>{
	console.log(err);
})