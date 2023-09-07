const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})(\/\S*)?$/;
function isHttp(url){
	return urlPattern.test(url);
}
console.log(isHttp('https://www.baidu.com'));