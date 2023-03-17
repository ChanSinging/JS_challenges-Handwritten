/**
 * @name: 千分位隔开
 * @author: cxy
 * @date: 2023/2/21 11:06
 * @description：千分位隔开
 * @update: 2023/2/21 11:06
 */
// 有小数点 和无小数点通用
const format1 = (n) => {
    let str = n.toString() // 包含小数的字符串
    let decimal = str.split('.')[1] // 小数
    let num = str.split('.')[0]  // 整数
    let count = 0
    const res = []
    // 倒序遍历
    for(let i=num.length-1;i>=0;i--){
        res.unshift(num[i])
        count += 1
        if(count%3===0){
            res.unshift(',')
            count=0
        }
    }
    return res.join('') + '.' + decimal
}
console.log(format1(1432212332300.13123121));
