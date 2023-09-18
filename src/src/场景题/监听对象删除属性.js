const obj1 = {
	prop1: "cxy",
	prop2: "luyao",
}
console.log(obj1);
const proxyon = new Proxy(obj1, {
	deleteProperty(target, propotry){
		console.log(`delete propoty ${target}`);
		delete target[propotry];
		return true;
	},
	set{},
	get{}
})

delete proxyon.prop1;
console.log(obj1);