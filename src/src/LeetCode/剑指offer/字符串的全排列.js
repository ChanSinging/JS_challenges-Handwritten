s = "abc"
s = [...s]

var permutation = function (s) {
    // 全排列，回溯
    // 需要设置used
    const res = [], track = [], used = []
    str = [...s]
    str.sort()
    console.log(str)
    backtravse(str, track)
    return res

    function backtravse (str, track) {
        if (s.length === track.length) {
            res.push(track.toString().split(',').join(''))
        }
        for (let i = 0; i < str.length; i++) {
            if(used[i])
                continue;
            //重复的序列排除
            if(i>0 && str[i]===str[i-1]&&!used[i-1]) continue; //!used[i-1] 意味着上一个i-1是true 固定相同的元素在排列中的相对位置
            track.push(str[i])
            used[i]=true
            // 进入下一个决策树
            backtravse(str, track)
            used[i]=false
            // 取消选择
            track.pop()
        }
    }
};
ss = "suvyls"
console.log(permutation(ss))