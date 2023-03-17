function cutiting (n) {
    const dp = new Array(n + 1).fill(0)
    dp[0] = 0
    dp[1] = 0
    // i 包含 i,i-j
    for (let i = 2; i <= n; i++) {
        let curNum = 0
        for (let j = 1; j < i; j++) {  // j需要被i减
            curNum = Math.max(curNum, Math.max(j*(i-j),j*dp[i-j]))
        }
        dp[i] = curNum
    }
    console.log(dp[n]);
}

cutiting(11)