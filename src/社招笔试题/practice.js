// 函数柯里化
function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			return fn.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args2.concat(...args));
			}
		}
	}
}

function sum(a, b, c) {
	return a + b + c;
}

const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

// 函数组合
function compose(...fn) {
	return function (x) {
		let res = x;
		for (let i = 0; i < fn.length; i++) {
			res = fn[i](res);
		}
		return res;
	}
}

const sum1 = x => x + 1;
const sum2 = x => x * 2;
const sum3 = x => x ** 3;
const composedFn = compose(sum1, sum2, sum3);
// console.log(composedFn(2));

// 版本号排序
const versions = ['1.2.3', '4.11.5', '4.2.0', '1.5.19', '1.5.5', '4.1.3', '2.0.0'];
function sortVersion(versions) {
	versions.sort((v1, v2) => {
		const partA = v1.split('.').map(Number);
		const partB = v2.split('.').map(Number);
		const maxlen = Math.max(partA.length, partB.length);

		for (let i = 0; i < maxlen; i++) {
			const num1 = partA[i] || 0;
			const num2 = partB[i] || 0;
			if (num1 < num2) return 1;
			if (num1 > num2) return -1;
		}
		return 0;
	})
}

// 手写一个all
function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		const promiseRes = [];
		let counter = 0;
		const leng = promises.length();
		for (let i = 0; i < leng; i++) {
			Promise.resolve(promises[i]).then((res)=>{
				if(counter === leng) {
					resolve(promiseRes);
				}
				promiseRes.push(res);
				counter++;
			}).catch((err) => {
				reject(err);
			})
		}
	})
}

// 手写一个race
function promiseAllSettled(promises) {
	return new Promise((resolve, reject) => {
		if(!Array.isArray(promises)) {
			return reject('不是数组');
		}
		const promiseRes = [];
		let counter = 0;
		const leng = promises.length();
		for (let i = 0; i < leng; i++) {
			Promise.resolve(promises[i]).then((res)=>{
				promiseRes.push(res);
				counter++;
			}).catch((err) => {
				promiseRes.push(err);
			}).finally(() => {
				if(counter === leng) {
					resolve(promiseRes);
				}
				counter++;
			})
		}
	})
}
