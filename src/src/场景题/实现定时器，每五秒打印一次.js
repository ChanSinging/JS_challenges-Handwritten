// 实现定时器，每五秒打印一次
function slove(times){
	setTimeout(()=>{
		console.log(`output nums per ${times} seconds`);
	}, times)
}
slove(5)