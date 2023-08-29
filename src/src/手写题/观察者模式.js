// 包含订阅者和订阅者
// 观察者模式和发布-订阅模式的区别是 发布-订阅者有调度中心

// 发布者
class Publisher {
	constructor() {
		this.observers = [];
		console.log("publisher created");
	}
	// 增加
	add(obs) {
		this.observers.push(obs);
		console.log('publisher add');
	}
	// 移除
	remove(obs) {
		this.observers.forEach((item, i) => {
			if (item === obs) {
				this.observers.splice(i, 1);
			}
		})
	}
	//通知
	notify() {
		console.log('publisher notify');
		Observer.update();
		this.observers.forEach((obs)=>{
			obs.update(this); // this指向publisher对象
		})
	}
}
// 订阅者
class Observer {
	constructor(){
		console.log('observer created');
	}
	update(){
		console.log('something update');
	}
}