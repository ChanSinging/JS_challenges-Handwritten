/**
 * @name: 判断字符串数字
 * @author: cxy
 * @date: 2023/2/2 14:36
 * @description：判断字符串数字
 * @update: 2023/2/2 14:36
 */
var strToInt = function(str) {
    //正则
    str = str.replace(/\s+/g,"")
    const pattern2 = new RegExp("[A-Za-z]+")
    const pattern1 = new RegExp("[0-9]+")
    // 负号
    if(str[0]==='-'){
        if(typeof parseInt(str.slice(1,str.length)) === 'number' ) {
            return "-" + isBig(parseInt(str.slice(1, str.length)))
        }else {
            return 0
        }
    }

    //str第一位是英文,./.
    if(!pattern1.test(str[0])) return 0
    // 正常
    if(typeof parseInt(str) === 'number') return isBig(parseInt(str))

    // 数字后面还有英文
    let i=0
    while(!pattern2.test(str[i])) i++
    if(pattern2.test(str[i])) return isBig(parseInt(str.slice(0,i)))
}

function isBig(nums){
    const max = 2147483647
    const min = -2147483648
    if(nums<min) return min
    if(nums>=max) return max
    return nums
}

let str = "-"
console.log(strToInt(str));

