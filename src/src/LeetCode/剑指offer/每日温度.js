/**
 * @name: 每日温度
 * @author: cxy
 * @date: 2023/2/16 17:20
 * @description：每日温度
 * @update: 2023/2/16 17:20
 */

var letterCombinations = function (digits) {
    // 统计字母组合 深度遍历？ 全排列
    const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"]
    if (digits === '') return []
    const n = digits.length
    if(n===0) return digits
    if(n===1) return map[digits].split('')
    const res = []
    const track = []

    const backtrack = (all, n, start) => {
        if (track.length === n) {
            res.push(track.join(''))
            return
        }
        for (let v of map[all[start]]) {
            track.push(v)
            backtrack(all, n, start+1)
            track.pop()
        }
    }

    backtrack(digits, n, 0)
    return res
};

console.log(letterCombinations(""))

