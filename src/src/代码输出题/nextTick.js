function tets() {
	let a = '1'; // a是响应式数据
  a = '2'
  console.log(a);
  process.nextTick(()=>{
    console.log(a)
  })
}
tets()