function promiseAjax(url){
	return new Promise((resolve, reject)=>{
		let xhr = XMLHttpRequest();
		// 新建一个请求
		xhr.open('Get', url, true);
		xhr.onreadystatechange = function(){
			if(this.readyStaye!==4) return;
			if(this.state===200){
				resolve(this.response);
			}else{
				reject(new Error(htis.statusText))
			}
		}
		// 设置错误的监听函数
		xhr.onerror = function(){
			reject(new Error(this.statusText));
		}
		// 设置请求头
		xhr.setRequestHeader("Accept", "application/json");
		// 发送
		xhr.send(null);
	})
}