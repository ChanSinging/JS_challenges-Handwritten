const obj = {
	name: 'cxy',
	age: 18
}
const handle = {
	set(target, name, val){
		console.log('设置属性');
		target[name] = val;
	},

	get(target, name, val){
		console.log(`读取属性 ${name}`);
		return target[name];
	},

	deleteProperty(target, name){
		delete target[name];
	}
}
const proxy = new Proxy(obj, handle);

proxy.name; // 读取属性 name
proxy.age = 31; // 设置属性 age 为 31