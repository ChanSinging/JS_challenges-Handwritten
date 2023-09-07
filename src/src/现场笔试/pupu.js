class PriorityQueue {
	constructor(nums, k) {
		this.queue = nums;
		this.k = k;
	}

	enqueue(element) {
		if (this.isEmpty()) {
			this.queue.push(element);
		} else {
			// 排序将第k大的数放在数组头部
			this.queue.push(element);
			let q = new Array(this.queue.length);
			for(let i=0;i<q.length;i++) q[i]=this.queue[i];
			q.sort();
			let t = q[this.queue.length - this.k];
			this.queue.splice(this.queue.indexOf(t), 1);
			this.queue.unshift(t);
		}
	}

	dequeue() {
		if (this.isEmpty()) {
			return null;
		}
		return this.queue.shift();
	}

	size() {
		return this.queue.length;
	}
	isEmpty() {
		return this.queue.length === 0;
	}
	clear() {
		this.queue = [];
	}
}
const pd = new PriorityQueue([4, 5, 8, 2], 3);
pd.enqueue(3);
console.log(pd);
console.log(pd.dequeue());
pd.enqueue(5);
console.log(pd);
console.log(pd.dequeue());
pd.enqueue(10);
console.log(pd);
console.log(pd.dequeue());

