/**
 * @name: didi_test
 * @author: cxy
 * @date: 2023/2/27 15:09
 * @description：didi_test
 * @update: 2023/2/27 15:09
 */
// 千分位分隔
let nums = 123123676

function thousand (nums) {
    //先转化
    // let len = nums.length
    // if(len<=3) return nums
    // // let str2str =nums.toString().split('')
    // const res = []
    // let count = 0
    // let string = nums + ''
    // // 倒序遍历
    // for (let i=string.length-1;i>=0;i--){
    //     res.unshift(string[i])
    //     count += 1
    //     // 如果计数3
    //     if(count%3===0 && i){
    //         res.unshift(',') // 加入，
    //         count=0
    //     }
    // }
    // return res.join('')  // 123,123
    let string = nums + ''
    let count = 0
    const res = []
    // 倒序遍历
    for(let i=string.length-1;i>=0;i--){
        res.unshift(string[i])
        count += 1
        if(count%3===0){
            res.unshift('#')
            count=0
        }
    }
    return res.join('')
}

console.log(thousand(nums));
// let str2str =nums.toString().split('')
// let string = nums + ''
// console.log(str2str)
// console.log(string[1]);
