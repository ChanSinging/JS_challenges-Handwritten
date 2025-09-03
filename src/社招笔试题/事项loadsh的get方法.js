function get(object, path, defaultValue) {
	if (!object) return defaultValue;
	const paths = Array.isArray(path)
		? path
		: path.replace(/\[(\w+)\]/g, '.$1').split('.').filter(Boolean);
	let result = object;
	for (let key of paths) {
		result = result != null ? result[key] : undefined;
		if (result === undefined) break;
	}
	return result === undefined ? defaultValue : result;
}


function get(object, path, defaultValue) {
	if(!object) return defaultValue;
	const path = Array.isArray(path) ? path : path.split(/[\.\[\]]/).filter(Boolean);  // 正则匹配
	let res = object;
	for (let key of path) {
		if (key === undefined) {
			return defaultValue
		}
		res = path[key];
	}
	return res;
}



// 示例用法
const obj = { a: [{ b: { c: 3 } }] };
console.log(get(obj, 'a[0].b.c')); // 3
console.log(get(obj, ['a', '0', 'b', 'c'])); // 3
console.log(get(obj, 'a[1].b.c', 'default')); // 'default'