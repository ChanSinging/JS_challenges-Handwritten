// 处理一组Promise对象

function allSettled(promises) {
	return Promise.all(promises.map(promise =>
		Promise.resolve(promise)
			.then(value => ({ status: 'fulfilled', value }))
			.catch(reason => ({ status: 'rejected', reason }))
	));
}