/**
 * @name: 解析url
 * @author: cxy
 * @date: 2023/2/23 10:43
 * @description：解析url
 * @update: 2023/2/23 10:43
 */
// 解析url
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

function parseParam(url){
    // const paramStr = /.+\?(.+)$/.exec(url)[1]
    const paramStr = url.split("?")[1]
    const paramArr = paramStr.split('&')
    let paramObj = {}
    paramArr.forEach(param => {
        if(/=/.test(param)) {
            let [key,val] = param.split('=')
            val = decodeURIComponent(val)  // decode
            val = /^d+$/.test(val) ? parseFloat(val) : val  // 判断是否是转为数字

            if (paramObj.hasOwnProperty(key)) { // 如果存在key, 表示有重复的
                paramObj[key] = [].concat(paramObj[key], val)
            } else {  // 如果不存在
                paramObj[key] = val
            }
        } else { // 处理没有value对象
            paramObj[param] = true
        }
    })
    return paramObj
}

console.log(parseParam(url));

function parseUrl2(url) {
    const result = {
        protocol: "",
        host: "",
        port: "",
        path: "",
        params: {},
        hash: ""
    };

    const protocolRegex = /^(.*):\/\//; // 匹配协议部分的正则表达式
    const hostRegex = /\/\/([^\/:]+)(?::(\d+))?/; // 匹配主机和端口部分的正则表达式
    const hashRegex = /#(.*)/; // 匹配哈希部分的正则表达式
    const queryRegex = /\?(.*)/; // 匹配查询参数部分的正则表达式

    const protocolMatch = url.match(protocolRegex);
    console.log(protocolMatch);
    if (protocolMatch) {
        result.protocol = protocolMatch[1];
        url = url.slice(protocolMatch[0].length);
    }

    const hostMatch = url.match(hostRegex);
    if (hostMatch) {
        result.host = hostMatch[1];
        result.port = hostMatch[2] || "";
        url = url.slice(0, hostMatch.index) + url.slice(hostMatch.index + hostMatch[0].length);
    }

    const hashMatch = url.match(hashRegex);
    console.log(hashMatch);
    if (hashMatch) {
        result.hash = hashMatch[1];
        url = url.slice(0, hashMatch.index);
    }

    const queryMatch = url.match(queryRegex);
    if (queryMatch) {
        const query = queryMatch[1];
        const params = query.split("&");
        for (const param of params) {
            const [name, value] = param.split("=");
            result.params[name] = decodeURIComponent(value);
        }
        url = url.slice(0, queryMatch.index);
    }

    result.path = url;

    return result;
}
const url2 = "http://www.example.com/path/to/page.html?param1=value1&param2=value2#section3";
const result = parseUrl2(url2);
console.log(result);
