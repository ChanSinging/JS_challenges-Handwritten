const list = [1,2,3,4]
let map = []
for (li of list){  // in是数组的下标，of是数值
    map.push(li*2)
}
console.log(map);
const double = x => x*3
console.log(list.map(double));
// console.log(list);

var lengthOfLongestSubstring = function(s) {
    // 利用双指针判定
    if(s.length<=1 || !s) return s.length;
    let left = 0, right = 1
    let max = 0
    let temp
    while(right<s.length){
        temp = s.slice(left,right)
        console.log(left+'--'+right)
        console.log(s.charAt(right)+(temp.indexOf(s.charAt(right))))
        if(temp.indexOf(s.charAt(right))!==-1){ // right下标的字符 存在temp中 即为重复
            left++
            continue
        }else{
            right++
        }
        if(right-left>max) max= right-left
    }
    return max
};
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s))