// 继承关系  原型链继承、构造函数继承、ES6 的 class 继承
function parent(){
	this.name = 'xx';
}
function child(){
	this.age = 10;
}
child.prototype = new parent();
var child = new child();

// console.log(child.name);

// 构造函数继承
function parent(){
	this.name = 'xx1';
}
function child2(){
	parent.call(this)
	this.age = 10;
}
var child2 = new child2();
console.log(child2.name);

// class继承
class Parent{
	constructor(){
		this.name = 'chenxingying'
	}
}
class Child3 extends Parent{
	constructor(){
		super();
		this.age = 10;
	}
}
let child3 = new Child3();
console.log(child3.name);

