function test(str){
	let res = [];
	// 两个遍历str
	let x=0,y=0;
	for(let i=0;i<str.length;i=i+2){
		let direction = str[i];
		let step = Number(str[i+1]);
		if(direction=='e'){
			x = x + step;
		}else if(direction == 'w'){
			x = x - step;
		}else if(direction == 's'){
			y = y - step;
		}else if(direction == 'n'){
			y = y + step;
		}
		console.log([x, y])
	}
	console.log(x);
	console.log(y);
}
let s = "e1s1w2n2";
// test(s)
// // e1s1w2n2
// var arr = [0,1]
// Object.seal(arr);
// arr.pop()
// function func1() {
// 	try{
// 		throw('Error');
// 	}
// 	finally{
// 		console.log('run');
// 	}
// }
// func1();
// function func3(){
// 	var i=0;
// 	while(i<3){
// 		try{
// 			i++;break;
// 		}
// 		finally{
// 			console.log(i);
// 		}
// 	}
// }
// var a = { n: 10 };
// function out(obj) {
// 	var b = obj;
// 	var c = b;
// 	b.n = 30;
// 	c = { n: 40 };
// 	console.log(a.n);  // 30
// 	console.log(b.n);  // 30
// 	console.log(c.n);  // 40
// }
// out(a);

// T2
function foo() {
	console.log(this.bar);
}
var bar = 'bar1';
var o2 = { bar: 'bar2', foo: foo };
var o3 = { bar: 'bar3', foo: () => { console.log(this.bar) } };
foo(); // undefined
o2.foo(); // bar2
o3.foo(); // bar1