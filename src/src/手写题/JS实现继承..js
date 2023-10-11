// 继承关系  原型链继承、构造函数继承、ES6 的 class 继承
// 原型链继承
function parent(){
	this.name = 'xx';
}
function child(){
	this.age = 10;
}
child.prototype = new parent();  // use prototype
var child = new child();

// console.log(child.name);

// 构造函数继承
function parent(){
	this.name = 'xx1';
}
function child2(){
	parent.call(this) // use call
	this.age = 10;
}
var child2 = new child2();
console.log(child2.name);

// 组合寄生方式
function Parent2(name){
	this.name = name;
}
Parent.prototype.sayName = function(){
	console.log('hello');
}
//子类
function Child2(name, age){
	Parent2.call(this, name);
	this.age = age;
}
function inhert(child, father){
	let prototype = Object.create(father.prototype); // 复制一份父类原型
	prototype.constructor = child;
	child.prototype = prototype;
}
inhert(child, father);

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

