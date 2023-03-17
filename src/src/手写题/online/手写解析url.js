/**
 * @name: 手写解析url
 * @author: cxy
 * @date: 2023/2/28 10:36
 * @description：手写解析url
 * @update: 2023/2/28 10:36
 */
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
// { user: 'anonymous', id: [ '123', '456' ], city: '北京', enabled: true }
// 解析url将
// function parseUrl (url) {
//     let str = url.split('?')[1]
//     let str2arr = str.split('&')
//     const paramobj = {}
//     // 遍历
//     for (let item of str2arr) {
//         if (/=/.test(item)) {
//             let [key, value] = item.split('=')
//             let val = decodeURIComponent(value)
//             if (paramobj.hasOwnProperty(key)) {
//                 // concat
//                 paramobj[key] = [].concat(paramobj[key],val)
//             } else {
//                 paramobj[key]=val
//             }
//         } else {
//             paramobj[item] = true
//         }
//     }
//     return paramobj
// }

// console.log(parseUrl(url));
let url2 = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

function parseUrl2(url) {
    let str = url.split('?')[1]
    let paramStr = str.split('&')
    const res = {}
    console.log(paramStr);
    paramStr.forEach((param)=>{
        if(/=/.test(param)) {
            let [key, val] = param.split('=')
            val = decodeURIComponent(val)
            if (res.hasOwnProperty(key)) {
                res[key] = [].concat(res[key], val)
            } else {
                res[key] = val
            }
        }else {
            res[param] = true
        }
    })
    return res
}
console.log(parseUrl2(url2))
