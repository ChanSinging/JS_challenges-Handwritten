// function Foo(){
// 	var i=0;
// 	return function(){
// 		i++;
// 		console.log(i);
// }
// }
// var f1=Foo(),f2=Foo();
// f1();
// f1();
// f2()
// console.log('undefined' == true);


function A(){
	let a = 1;
	window.B = function(){
		console.log(a);
	}
}
A()
A.B();