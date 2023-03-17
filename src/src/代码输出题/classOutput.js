function output () {
    var name = '123';

    var obj = {
        name: '456',

        getName: function () {

            function printName () {

                console.log(obj['name']);

            }

            printName();

        }

    }
    console.log(name)

    obj.getName();
}

// output()
// 问如何输出456  console.log(obj.name)
// 不用轻易用this.name
// JS对象的调用
/** obj.name
 *  obj['name']
 * **/


function Foo () {

    this.a = 1;
    // return {
    //     a: 2,
    //     b: 3,
    // }

}

Foo.prototype.a = 6; //

Foo.prototype.b = 7;

Foo.prototype.c = 8;

var o = new Foo();

console.log(o.a);  // 先找ownProperty，在找原型链

console.log(o.b);

console.log(o.c);

// 判断数字的===
// let a = 3
// let b = new Number(3)
// let c = 3
// console.log(a);
// console.log(a == b)
// console.log(a === b)
// console.log(b === c)
let arr = ["red","yellow","blue"];
console.log(arr.join(" "))
