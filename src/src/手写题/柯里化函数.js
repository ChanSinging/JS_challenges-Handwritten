function curry(func){
	return function curried(...args) {
		console.log(func.length, args.length);
		if(args.length >= func.length){  // args的数量大于func的数量
			return func.apply(this, args);
		}else{ // 返回一个函数,
			return function (...moreArgs) {
				return curried.apply(this, args.concat(moreArgs))
			}
		}
	}
}

function add(a, b, c) {
	return a + b + c;
}
let curryAdd = curry(add);
// console.log(curryAdd(1)(2)(10));
// console.log(curryAdd(1,2)(10));
// console.log(curryAdd(1,2,10));
console.log(curryAdd(1,2,10));