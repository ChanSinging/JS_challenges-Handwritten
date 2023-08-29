async function asyncl(){
	console.log('a');
	await async2();
	console.log('b');
}
async function async2() {
	console.log('c');
}
console.log('d');
asyncl();
setTimeout(() =>{
	console.log('e');},0
);
new Promise((resolve, reject) =>{
	console.log('f');resolve(null);
}).then(() => {
	console.log('g');
})