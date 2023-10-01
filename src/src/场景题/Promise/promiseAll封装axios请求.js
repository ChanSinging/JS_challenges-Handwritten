const axios = require('axios');

// 
function axiosRequest(urls){
	const promsies = urls.map(url => axios.get(url));
	return Promise.all(promsies).then((reponses)=>{
		return reponses.map(reponse => reponse.data)
	}).catch(err=>{
		console.log(err);
		throw err;
	})
}
const urls = ['https://api.example.com/data1', 'https://api.example.com/data2'];
axiosRequest(urls).then(data=>{
	console.log(data);
}).catch(err=>{
	console.log(err);
})