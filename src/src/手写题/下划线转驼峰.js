function getLine2Camle(str){
    let arr = str.split('-')
    return arr.map((li,index)=>{
        if(index==0) {
            return li
        }else {
            return li[0].toUpperCase() + li.slice(1,li.length)
        }
    }).join('')
}
let s = 'get-element-by-id'
let cam = 'getElementById'
// console.log(getLine2Camle(s));
function getCamle2Line(str){
    let res = str.split('').map((li)=>{
        if(li>'A'&&li<'Z'){
            return '-'+li.toLowerCase();
        }else{
            return li;
        }
    }).join('')
    return res;
}
console.log(getCamle2Line(cam));