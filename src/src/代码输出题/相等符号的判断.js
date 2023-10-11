const arr1 = [1,2,3];

const arr2 = [1,2,3];

console.log(arr1 === arr2);// 这里会输出什么  false

const arr3 = arr2;

arr2[1] = 4;

console.log(arr3);// 这里会输出什么？