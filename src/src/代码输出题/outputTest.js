setTimeout(() => {

    console.log(1);

}, 0);


console.log(2);  // first


(new Promise((resolve) => {

    console.log(3);

})).then(() => {

    console.log(4);

});


console.log(5);

/** setTimeout最后输出 setTimeout是宏任务，宏任务最后执行，使得微任务
 *  没有函数覆盖的
 *
 * **/
let arr = [1,3,4,4,5]
let set = new Set(arr)
console.log([...set]); // Array.from