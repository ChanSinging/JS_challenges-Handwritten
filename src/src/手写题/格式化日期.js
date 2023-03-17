/**
 * @name: 格式化日期
 * @author: cxy
 * @date: 2023/2/21 10:54
 * @description：格式化日期
 * @update: 2023/2/21 10:54
 */
const dateFormat = (dateInput, format) => {
    let day = dateInput.getDate()
    let month = dateInput.getMonth() + 1
    let year = dateInput.getFullYear()
    console.log(day, month, year)
    format = format.replace(/yyyy/, year)
    format = format.replace(/MM/, month)
    format = format.replace(/dd/, day)
    return format
}
// console.log(dateFormat(new Date('2020-12-01'), 'yyyy/MM/dd'));

let arr = [1, 2, 3, 4, [2, 4, [5, 8]]]
console.log(arr.toString().split(','))  // 一维的数组

var dayOfYear = function (date) {
    // js实现一年的第几天
    //判断是否是平年和闰年
    let day = date.getDay(),
        month = date.getMonth() + 1,
        year = date.getFullYear(),
        isPin = false,
        sum = 0
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) isPin = true
    const all = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for (let i = 0; i < month - 1; i++) {
        if (i === 1 && isPin) sum++
        sum += all[i]
    }
    sum += day
    return sum
};
console.log(dayOfYear('2020-12-01'))
