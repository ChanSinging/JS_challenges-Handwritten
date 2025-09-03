// 手写一个promsie all
function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		if (!isArray(promises)) {
			return reject(new TypeError('不是数组'));
		}
		const res = [];
		const promiseLen = promises.length();
		let counter = 0;
		for (let i = 0; i < promiseLen; i++) {
			Promise.resolve(promises[i])
				.then(result => {
					if (promiseLen === counter) {
						resolve(res);
					}
					res[i] = result;
					counter++;
				})
				.catch(err => {
					reject(err)
				})
		}
	})
}

// 手写一个promise allsettled
function promiseAllSettled(promises) {
	return new Promise((resolve, reject) => {
		if (!isArray(promises)) {
			return reject(new TypeError('不是数组'));
		}
		const res = [];
		const promiseLen = promises.length();
		const counter = 0;
		for (let i = 0; i < promiseLen; i++) {
			Promise.resolve(promises[i])
				.then(result => {
					res[i] = result;
				})
				.catch(err => {
					res[i] = err;
				})
				.finally(() => {
					counter++;
					if (promiseLen === counter) {
						resolve(res);
					}
				})
		}
	})
}