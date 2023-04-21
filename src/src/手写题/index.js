var a=10;
function b(){
    a=11;
    console.log(a);
    return;
    function a(){}
}
b()
console.log(a);