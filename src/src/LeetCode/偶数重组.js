/**
 * @name: 偶数重组
 * @author: cxy
 * @date: 2023/2/28 11:38
 * @description：偶数重组
 * @update: 2023/2/28 11:38
 */
let nums = 100002

function oushu (nums) {
    //dfs
    const res = [], track = []
    let str = nums.toString().split('')
    str.sort((a,b) => parseInt(a)-parseInt(b))
    let used = new Array(str.length).fill(false)

    const dfs = (str) => {
        if (track.length === str.length && track[0]!=='0') {
            res.push(Array.from(track))
        }
        for (let i = 0; i < str.length; i++) {
            if (used[i]) continue
            if (i > 0 && str[i] === str [i - 1] && !used[i - 1]) continue
            track.push(str[i])
            used[i] = true
            dfs(str)
            track.pop()
            used[i] = false
        }

    }
    dfs(str)
    let ans = []
    for (let i of res){
        let tmp = i.join('')
        if(tmp %375===0)  ans.push(parseInt(tmp))
    }
    return ans
}

// console.log(oushu(nums))
console.log(Math.ceil(1.78))
