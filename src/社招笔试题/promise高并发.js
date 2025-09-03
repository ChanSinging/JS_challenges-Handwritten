// 使用 Promise.all 与 Promise.race 实现并发请求限制（3个并发）
async function runWithConcurrency(tasks, limit) {
  const results = [];
	// 使用Set来追踪正在执行的任务
  const executing = new Set();
	for(let i=0;i<tasks.length;i++) {
		if (executing.length >= limit){
		  Promise.race(tasks[i]);
		}
		// 创建并执行新任务
		const p = tasks[i].then((res) => {
			executing.delete(p);
			return res;
		})
		.catch((err) => {
			executing.delete(err);
			throw err;
		});

		executing.add(p);
		results.push(p);
	}

	return Promise.all(results);
}