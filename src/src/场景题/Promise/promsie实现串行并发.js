const fetchNums = [];
// for遍历
function iteratorPromise(fetchNums) {
	for (let i = 0; i < fetchNums.length; i++) {
		fetchNums[i].then((result) => {
			console.log(result);
			return result;
		}).catch((err) => {
			console.log(err);
		})
	}
}

// 使用reduce，实现串行，一个接着一个,有两种方式实现
function inOrder(arr) {
	const res = [];
	return new Promise((resolve, reject) => {
		arr.reduce((pre, cur) => {
			return pre.then(cur)
				.then(data => res.push(data));
		}, Promise.resolve()).then(() => resolve(res));
	})
}
function fetchInSequence(url) {
	let res = [];
	return url.reduce((pre, cur) => {
		return pre.then((res) => {
			return fetch(cur).then(response => res.push(response))
				.then((data) => {
					results.push(data);
					return results;
				});
		});
	}, Promise.resolve([]))
}
