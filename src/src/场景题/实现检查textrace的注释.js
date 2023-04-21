/**
 * @name: 实现检查textrace的注释
 * @author: cxy
 * @date: 2023/4/21 15:02
 * @description：实现检查textrace的注释
 * @update: 2023/4/21 15:02
 */
/*
 * @Descripttion:
 * @Author: chansinging
 * @version:
 * @Date: 2023-04-09 20:43:19
 * @LastEditors: chansinging
 * @LastEditTime: 2023-04-09 20:43:32
 */
//使用JS写一段代码：实现一个算法，验证textarea中的数据不包含单行注释：//，遇到它就进行提示，但是遇到链接如http://www.baidu.com这类情况需要进行保留
// 获取textarea元素
const textarea = document.getElementById("myTextarea");

// 获取textarea中的文本内容
const content = textarea.value;

// 以换行符为分隔符，将文本内容分成多行
const lines = content.split("\n");

// 遍历每一行，查找单行注释
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 如果这一行包含单行注释
    if (line.includes("//")) {

        // 如果这一行是一个链接，跳过提示
        if (line.includes("http://") || line.includes("https://")) {
            continue;
        }

        // 提示用户
        alert("第 " + (i+1) + " 行包含单行注释");
    }
}
