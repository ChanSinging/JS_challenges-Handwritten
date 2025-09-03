function executePromisesWithRetry(promiseFactories, maxRetries = 3) {
	const res = [];
	let index = 0;
	const promiseLeng = promiseFactories.length;

	function executing() {
		if (index >= promiseLeng) {
			return Promise.resolve(res);
		}

		let retryTime = 0;
		
		// 执行当前 Promise 并处理重试逻辑
		function retry() {
			return promiseFactories[index].then((result) => {
				res.push(result);
				index++;
				executing(); // 串行执行
			}).catch((err) => {
				retryTime++;
				if (retryTime <= maxRetries){
					return retry();
				} else {
					return Promise.reject(err);
				}
			})
		}

		return retry();
	}

	return executing();
}

// loadsh的get方法
function get(object, defaultVal) {
	if(object === undefined) {
		return defaultVal;
	}
	const newPath = Array.isArray(path) ? object : object.split(/[\.\[\]]/).filter(Boolean);
	let res = path;
	for(let key of path) {
		if(key === undefined) return defaultVal;
		res = newPath[key];
	}
	return res === undefined ? defaultVal : res;
}

// 手撕字符串解码, "3[a]2[bc]" 解码为 "aaabcbc"。
function decodeString(str) {
	const st = [];
	let currentNum = 0;
	let currentStr = '';
	for (let ch of str) {
		if(ch === '['){
			st.push(currentNum);
			st.push(currentStr);
			currentNum = 0;
			currentStr = '';
		} else if (ch === ']') {
			const num = st.pop();
			const preStr = st.pop();
			currentStr = preStr + currentStr.repeat(num);
		} else if(!isNaN(ch)){
			currentNum = currentNum * 10 + parseInt(ch);
		} else {
			currentStr += ch;
		}
	}
	return currentStr;
}

console.log(decodeString("3[a]2[bc]"));





