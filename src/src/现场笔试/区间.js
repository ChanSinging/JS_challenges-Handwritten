/**
 * @name: 区间
 * @author: cxy
 * @date: 2023/3/7 20:00
 * @description：区间
 * @update: 2023/3/7 20:00
 */
let str = 'abcdef'
let domain = [ [ '2', '4' ], [ '3', '6' ] ]
console.log(make(domain, str));
// console.log('a'.append('b'))

function make(nums, str){
    let newStr = str
    for (let i=0;i<nums.length;i++){
        // 处理几次
        // 获取中间字符
        let left = nums[i][0]-'0'-1, right = nums[i][1]-'0'-1
        let stack = [], midStr = []
        let leftStr = newStr.slice(0,left)
        let rightStr = newStr.slice(right+1 , newStr.length)
        for (let j=left;j<=right;j++) {
            stack.push(newStr[j])
        }
        // console.log(right, left);
        // 填数组
        for (let j=0;j<=right-left;j++){
            midStr.push(stack[j])
            midStr.push(stack[j])
        }
        midStr = midStr.join('').toString()
        console.log(leftStr, midStr, rightStr);
        newStr = leftStr.concat(midStr).concat(rightStr)
        console.log(newStr);
    }
    return newStr
}
function make2(newStr){

}
