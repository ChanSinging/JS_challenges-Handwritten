function getType (obj) {
    // 判断数据类型
    if(obj===null) return 'null'
    if (typeof obj === 'function') {
        return 'function';
      } else if (Array.isArray(obj)) {
        return 'array';
      } else if (typeof obj === 'object' && obj !== null) {
        return 'object';
      } else {
        //string number boolean null undefined
        return typeof obj;
      }
}

console.log(getType(undefined));