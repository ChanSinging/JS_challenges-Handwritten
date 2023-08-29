function arrange(name) {
	let tasks = [];
	let delay = 0;
	let isFirstTask = false;

	function notify() {
		console.log(`${name} is notified`);
	}

	async function execute() {
		await new Promise((resolve) => setTimeout(resolve, delay * 1000));
		notify();
		tasks.forEach((task, idx) => {
			setTimeout(() => {
				console.log(`> Start to ${task}`);
			}, (isFirstTask && idx === 0 ? delay : 0) * 1000);
		});
	}

	function doTask(task) {
		tasks.push(task);
		return {
			wait: wait,
			waitFirst: waitFirst,
			do: doTask,
			execute: execute
		};
	}

	function waitFirst(seconds) {
		delay += seconds;
		return {
			wait: wait,
			waitFirst: waitFirst,
			do: doTask,
			execute: execute
		};
	}

	function wait(seconds) {
		delay = seconds;
		isFirstTaskDelayed = true;
		return {
			wait: wait,
			waitFirst: waitFirst,
			do: doTask,
			execute: execute
		};
	}

	return {
		wait: wait,
		waitFirst: waitFirst,
		do: doTask,
		execute: execute
	};
}
// let a = ["1","2","3"].map(parseInt)
function test(){
	var a = 1;
	return function(){
		return ++a;
	}
}
var bb = test();
console.log(bb());
console.log(bb());
// 示例用法
// arrange("William").execute(); // > William is notified
// arrange("William").do("commit").execute(); // > William is notified
// // 											 // > Start to commit
// arrange("William").wait(5).do("commit").execute(); // > William is notified
// // 													// 等待 5 秒
// // 													// > Start to commit
// arrange("William").waitFirst(5).do("push").execute(); // 等待 5 秒
// 													   // > William is notified
// 													   // > Start to push