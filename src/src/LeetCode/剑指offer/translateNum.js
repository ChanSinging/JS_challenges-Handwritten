function translateNum (num) {
    // 试着用回溯解决
    const res = []
    
}
// console.log(translateNum(12258))
let str = "A man, a plan, a canal: Panama"
// let s = str.replace(/[^a-zA-Z0-9]/g,"").replace(/\s/g,"").toLowerCase()
// let s = str.replace(/\s/g, "") // 去空格
let res = ''
for(let v of str){
    let c=v.toLowerCase();
    if(c>='a'&&c<='z'||c>='0'&&c<='9') res+=c;
}
console.log(res)
let s = str.replace(/[^a-zA-Z0-9]/g,"")
let t = [...s].reverse().join('')
console.log(s);