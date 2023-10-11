// 密码强度 0~3  0无强度、1低强度、2中强度、3高强度
/*
将checkPwd写在Vue3的watch或者computed计算属性
*/
const checkPwd = (password) => {
	let val = password || '';
	let lv = 0; //初始化提示消息为空
	if (val.match(/[a-z]/g)) { lv++; } //验证是否包含字母
	if (val.match(/[0-9]/g)) { lv++; }  // 验证是否包含数字
	if (val.match(/(.[^a-z0-9])/g)) { lv++; } //验证是否包含字母，数字，字符
	if (val.length < 6) { lv = 0; } //如果密码长度小于6位，提示消息为空
	if (lv > 3) { lv = 3; }
	return lv
}