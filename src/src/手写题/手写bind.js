function myBind(context){
	// 判断是否是函数
	if(typeof this !== "function") throw TypeError("error");
	const args = [...arguments].slice(1);
	const fn = this;
	return function Fn(){
		return fn.apply(
			this instanceof Fn ? this : context,
			args.concat(...arguments)
		)
	}
}

// 手写call apply
function myApply(context){
	// 判断是否是函数
	if(typeof this !== "function") throw TypeError("error");
	let res = null;
	context = context || window;
	context.fn = this;
	// 调用方法
	if(arguments[1]){
		res = context.fn(...arguments[1]);
	} else {
		res = context.fn();
	}
	return res;
}

// 手写call函数
function myCall(context){
	if(typeof this !== "function") throw TypeError("error");
	// 获取参数
	let args = [...arguments], res = null;
	context = context || window;
	context.fn = null;
	res = context.fn(args);
	return res;
}