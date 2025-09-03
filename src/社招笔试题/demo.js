// 将数组转化成树结构
const list = [
	{
		"id": 19,
		"parentId": 0,
	},
	{
		"id": 18,
		"parentId": 16,
	},
	{
		"id": 17,
		"parentId": 16,
	},
	{
		"id": 20,
		"parentId": 17,
	},
	{
		"id": 16,
		"parentId": 0,
	}
];

// 哈希法，创建一个树状数组，带childer
function convert(data) {
	const res = [];
	const map = {};
	data.forEach(item => {
		map[item.id] = { ...item, children: [] };
	})

	data.forEach(item => {
		const node = map[item.id];
		if (item.parentId === 0) {
			res.push(node);
		} else {
			map[item.parentId]?.children.push(node);
		}
	})

	return res;
}

// console.log(JSON.stringify(convert(list)));

// 3. 关于对象的题，思路是用递归做，去除对象中重复的元素
const obj = { a: 1, b: 2, c: 3, a: 4 };

function remove(obj) {
	const res = {};
	for (const key in obj) {
		if (!res.hasOwnProperty(key)) {
			res[key] = obj[key];
		}
	}
	return res;
}
console.log(remove(obj));

// 锯齿程序遍历
function travse(root) {
	const q = [];
	let isFlag = true;
	const res = [];
	q.push(root);
	while (q.length !== 0) {
		const sz = q.length;
		const current = [];
		for (let i = 0; i < sz.length; i++) {
			const node = q.shift();
			if (isFlag) {
				current.push(node.val);
			} else {
				res.unshift(node.val);
			}
			if (node.left) {
				q.push(node.left);
			}
			if (node.right) {
				q.push(node.right);
			}
			isFlag = !isFlag;
		}
		res.push(current);
	}
	return res;
}

// 层序遍历
function inTravse(root) {
	const q = [];
	const res = [];
	q.push(root);
	while(q.length !== 0) {
		const sz = q.length();
		const current = [];
		for (let i=0;i<sz;i++) {
			const node = q.shift();
			current.push(node.val);
			if (node.left) q.push(node.left)
			if (node.right) q.push(node.right);
		}
		res.push(current);
	}
	return res;
}

class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = this.right = nulll;
	}
}

// 函数柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length > fn.length) {
			return fn.apply(this, args);
		} else {
			return function(...args2) {
			 curried.apply(this, args2.concat(...args))
			}
		}
	}
}

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);
// console.log(curriedSum(1)(2)(3));

var a = 'hello'
function fn() {
  console.log(this.a);
}
fn.call(null)

// new 绑定 > 显示绑定 > 隐式绑定 > 默认绑定