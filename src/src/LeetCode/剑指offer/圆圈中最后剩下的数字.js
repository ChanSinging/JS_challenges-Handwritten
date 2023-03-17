/**
 * @name: 圆圈中最后剩下的数字
 * @author: cxy
 * @date: 2023/2/10 20:22
 * @description：圆圈中最后剩下的数字
 * @update: 2023/2/10 20:22
 */
var lastRemaining = function(n, m) {
    let count = m
    const nums = []
    for(let i=0;i<n;i++){
        nums[i]=i
    }
    for(let i=0;i<n-1;i++){
        let index = count%(n-i)-1
        console.log(index);
        nums.splice(index,1) // 删除index下标
        count--
        count += m
    }
    console.log(nums)
};
// console.log(lastRemaining(5,3))   // output=3
// const nums = [1,2,3,45,7]
// for (let i,j of nums) {
//     console.log(i + j)
// }

for (var i=1; i<=5; i++) {
    (function(j) {
        setTimeout( function timer() {
            console.log( j );
        }, j*1000 );
    })(i);
}
