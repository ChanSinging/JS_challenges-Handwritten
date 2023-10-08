function exeuctor(handler){
    handler()
}
const obj = {
    count: 0,
    inc: function(){
        this.count++
    }
}
// 改变this的指向
// exeuctor(()=>obj.inc());
exeuctor(obj.inc.bind(obj));
console.log(obj.count)