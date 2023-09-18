var subString = function (s){
	// 最长无重复子串
	const n = s.length
	if(!n||!s) return 0
	if(n<=1) return s.length;
	let left = 0,
		right = 1
	let max = 0
	let temp
	while(right<s.length){
		temp = s.slice(left, right)  // 滑动窗口的数组
		console.log(temp+`-${left}-`+`${right}`)
		console.log(s.charAt(right));
		if(temp.indexOf(s.charAt(right))>-1){  //s.charAt(right) 表示index=right的字母，temp.indexOf() > -1表示是否存在该字母
		   left++
		   continue //下次枚举
		}else{
			right++
		}
		if(right-left>max) max = right-left
	}
	return max
}
s = "aaabb"
console.log(subString(s))