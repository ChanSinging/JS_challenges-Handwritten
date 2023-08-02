function delay(time){
    return new Promise((resolve)=>{
        setTimeout(resolve, time);
    })
}
delay(1000).then(()=>{
    console.log("1s pass");
})