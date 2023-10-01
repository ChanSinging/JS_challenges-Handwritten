function countWays(n){
	let dp = new Array(n+1).fill(0)
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	for(let i=3;i<n;i++){
		dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
	}
	return dp[n];
}
// 优化
/*
如果不考虑先后顺序（比如3 级台阶，先走1级再走2 级和先走2级再走1级是同一个解）一共有多少种走法
*/

function countWays2(n){
	return countParition();
}