/*
 * @Descripttion: 
 * @Author: chansinging
 * @version: 
 * @Date: 2023-04-15 20:57:32
 * @LastEditors: chansinging
 * @LastEditTime: 2023-04-15 20:57:39
 */
var a = 1
function fun1(){
	this.a = 2
	let b = () => {
	    console.log(this,this.a)
	}
    console.log(this,this.a);
}

fun1()