/**
 * @name: 根据不同的状态码进行不同的操作
 * @author: cxy
 * @date: 2023/3/5 20:45
 * @description：根据不同的状态码进行不同的操作
 * @update: 2023/3/5 20:45
 */
// 获取表单数据
const username = document.getElementById('username').value;
const password = document.getElementById('password').value;
const email = document.getElementById('email').value;

// 验证表单数据
if (username && password && email) {
    // 表单数据有效，发送 POST 请求
    fetch('/register', {
        method: 'POST',
        body: JSON.stringify({ username, password, email }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => {
            // 检查响应状态码
            if (response.status === 200) {
                // 注册成功，跳转到登录页面
                window.location.href = '/login';
            } else if (response.status === 400) {
                // 表单数据无效，显示错误消息
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = '表单数据无效';
            } else if (response.status === 401) {
                // 用户名或密码错误，显示错误消息
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = '用户名或密码错误';
            } else if (response.status === 500) {
                // 服务器错误，显示错误消息
                const errorMessage = document.getElementById('error-message');
                errorMessage.textContent = '服务器错误';
            }
        })
        .catch(error => {
            // 网络错误，显示错误消息
            const errorMessage = document.getElementById('error-message');
            errorMessage.textContent = '网络错误';
        });
} else {
    // 表单数据无效，显示错误消息
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = '表单数据无效';
}
