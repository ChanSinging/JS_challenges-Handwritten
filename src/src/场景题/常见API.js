/**
 * @name: 常见API
 * @author: cxy
 * @date: 2023/3/5 20:06
 * @description：常见API
 * @update: 2023/3/5 20:06
 */
// 监听点击事件
const logoutBtn = document.getElementById('logout-btn');
logoutBtn.addEventListener('click', function(event) {
    event.preventDefault();
    const confirmation = confirm('您确定要退出吗？');
    // 如果用户点击了“确定”按钮，则 confirm 方法返回 true
    if (confirmation) {
        // 确认退出，执行退出操作
        // ...
    } else {
        // 取消退出，不执行任何操作
    }
});
logoutBtn.addEventListener('click',function (event) {
    event.preventDefault()
    const confiramtion = confirm('are you sure to exit')
    if (confiramtion) {

    }
})
