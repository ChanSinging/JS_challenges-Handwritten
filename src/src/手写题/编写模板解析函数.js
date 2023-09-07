function render(tpl, data) {
	const pattern = /\{\{(.*?)\}\}/g; // 匹配模板中的占位符，如 {{name}}
	return tpl.replace(pattern, (match, key) => {
	  const value = data[key.trim()]; // 根据占位符的键从数据中获取对应的值
	  return value !== undefined ? value : match; // 如果值存在则替换占位符，否则保持原样
	});
  }
const template = "Hello, {{name}}! You are {{age}} years old.";
const data = { name: "John", age: 25 };

const result = render(template, data);
console.log(result); // 输出：Hello, John! You are 25 years old.