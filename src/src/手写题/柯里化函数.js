function curry(func){
	return function curried(...args) {
		if(args.length >= func.length){  // 如果参数数量大于或等于原始函数 func 的参数数量，就直接调用 func 并返回结果
			return func.apply(this, args);
		}else{  // 否则，它会返回一个新的函数，该函数会将已经传入的参数与新传入的参数合并，并再次调用 curried 函数
			return function(...moreArgs){
				return curried.apply(this, args.concat(moreArgs))
			};
		}
	}
}

function add(a, b, c) {
	return a + b + c;
}
let curryAdd = curry(add);
console.log(curryAdd(1)(2)(10));
console.log(curryAdd(1,2)(10));
console.log(curryAdd(1,2,10));
console.log(curryAdd(1,23,32));