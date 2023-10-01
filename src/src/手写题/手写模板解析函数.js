function render(template, data){
	const reg = /{{(.*?)}}/g;
	const res = template.replace(reg, (match, variable)=>{
		let value = data[variable.trim()];
		return value !== undefined ? value : match;
	});
	return res;
}

let template = '我是{{name}}，职业{{job}}，工资{{salary}}';
let person = { name: '阿巴', job: '前端', salary:30000};
// console.log(render(template, person)); // 我是阿巴，职业前端，工资30000
console.log(parseInt('12.7pdsadax'));