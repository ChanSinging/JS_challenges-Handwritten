nums = [3,30,34,5,9]
var minNumber = function(nums) {
    return nums.sort((a, b) => {
        const stra = a + '';
        const strb = b + '';
        console.log(strb+'--'+stra);
        return (stra + strb) - (strb + stra);
    });
};
console.log(minNumber(nums))

// 比较字符串整数的排序
function compareDigitSum(a,b){
    let s1 = a +  '' + b;
    let s2 = b +  '' + a;
    return s1 > s2 ? true : false;

}