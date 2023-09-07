const io = new IntersectionObserver((entry)=>{
	entry.forEach(item=>{
		// 当前元素是可见时
		if(item.isIntersecting){
			item.target.src = item.target.dataset.src;
			io.unobserve(item.target) // 停止观察当前元素，避免不可见时再次调用callback函数
		}else{
			console.log('目标离开视图');
		}
	})
})
const img = document.querySelector('data-src')
img.forEach(im=>{
	io.observe(im);
})