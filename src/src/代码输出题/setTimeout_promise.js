setTimeout(()=>{
	Promise.resolve(1).then((val)=>console.log(val))
	console.log(2);
},0)
setTimeout(()=>{
	console.log(20);
},0)