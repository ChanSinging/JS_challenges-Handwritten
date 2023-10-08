// Promise.allSettled([
// 	Promise.resolve(33),
// 	new Promise((resolve)=>setTimeout(()=>resolve(66), 0)),
// 	99,
// 	Promise.reject(new Error('error'))
// ]).then(val => console.log(val));
let nums = [1,2,3,45,5]
let nums2 = nums
nums2.push(100)
console.log(nums);