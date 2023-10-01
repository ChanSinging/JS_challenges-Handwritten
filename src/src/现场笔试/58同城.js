function findSurveyArr(surveyPosArr, totalDistance) {
	const result = [];
	const track = [];
	surveyPosArr.sort((a, b) => a - b);

	const dfs =  (start, dis) => {
		if (dis === 0) {
			result.push([...track]);
			return;
		}
		for (let i = start; i < surveyPosArr.length; i++) {
			if (surveyPosArr[i] > dis) break;
			if (i > start && surveyPosArr[i] === surveyPosArr[i - 1]) continue;
			track.push(surveyPosArr[i]);
			dfs(i + 1, dis - surveyPosArr[i]);
			track.pop(); 
		}
	}

	dfs(0, totalDistance);
	let maxLen = 0;
	const res = [];
	for (const li of result) {
		if (li.length > maxLen) {
			maxLen = li.length;
			res.length = 0; // 清空数组
			res.push(li);
		} else if (li.length === maxLen) {
			res.push(li);
		}
	}
	return res;
}

// 示例用法
const surveyPosArr = [10, 1, 2, 7, 6, 1, 1, 5];
const totalDistance = 8;
const maxCombinations = findSurveyArr(surveyPosArr, totalDistance);
console.log(maxCombinations);
