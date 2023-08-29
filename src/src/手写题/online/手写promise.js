const pending = 'pending'
const rejected = 'rejected';
const resolved = 'resolved';

function myPromise(fn) {
	let self = this;
	this.resolveCallback = [];
	this.rejectedCallback = [];
	this.value = null;
	this.state = pending;
	function resolve(value) { // 返回的也是一个new promise对象
		if (value instanceof myPromise) {
			return value.then(resolve, reject);
		}
		setTimeout(() => {
			//只有状态为penging才转变
			if (self.value == pending) {
				// 修改两个值State和value
				self.state = resolved;
				self.value = value;
				self.resolveCallback.forEach(callbacks => {
					callbacks(value);
				})
			}
		})
	}
	function reject(value) {
		//只有状态为penging才转变
		setTimeout(() => {
			if (self.state == pending) {
				self.state = rejected;
				self.value = value;
				self.rejectedCallback.forEach(callbacks => {
					callbacks(value)
				})
			}
		})
	}
}

myPromise.prototype.then = function (onResolved, onRejected) {
	// resolved
	if (typeof onResolved === 'function') {
		onResolved = onResolved
	} else {
		onResolved = function (val) {
			return val;
		}
	}
	// rejected
	if (typeof onRejected === 'function') {
		onRejected = onRejected
	} else {
		onRejected = function (val) {
			throw val;
		}
	}
	// 如果是等待
	if (this.state == pending) {
		this.resolveCallback.push(onResolved);
		this.rejectedCallback.push(onRejected);
	}
	// 如果是已经resolved
	if (this.state == resolved) {
		onResolved(this.value);
	}
	//如果是已经rejected
	if (this.state == rejected) {
		onRejected(this.value);
	}
}

// 手写promise all  请求多个promise
myPromise.prototype.all = function (promises) {
	return new Promise(function (resolve, reject) {
		if (!Array.isArray(promises)) throw new TypeError('args must be array')
		let resolveCounter = 0;
		let promiseNum = promises.length;
		let resolvedResult = [];
		// 遍历开始
		for (let i = 0; i < promiseNum; i++) {
			Promise.resolve(promises[i]).then(val => {
				resolveCounter++;
				resolvedResult.push(val);
				if (resolveCounter == promiseNum) {
					// 开始执行resolve
					return resolve(resolvedResult);
				}
			}, error => {
				return reject(error);
			})
		}
	})
}
// race 
// Promise.race 将返回第一个完成的 Promise 实例，如果最快的 Promise 成功，则 Promise.race 就成功，如果最快的 Promise 失败，则 Promise.race 就失败
myPromise.prototype.race = function (args) {
	return new Promise((resolve, reject) => {
		for(let i=0; i<args.length; i++){
			// 如果最快的 Promise 成功，则 Promise.race 就成功
			args[i].then(resolve, reject);
		}
	})
}
// 测试代码
// const p1 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve('p1 延时一秒')
// 	}, 1000)
// })
// const p2 = new Promise((resolve, reject)=>{
// 	setTimeout(()=>{
// 		resolve('p1 延时2秒')
// 	}, 2000)
// })
// myPromise.race([p1, p2]).then(res => console.log(res)).catch(err=>console.log(err))