<template>
    <div>
        <form>
            <label for="username">用户名：</label>
            <input type="text" id="username" v-model="username" />
            <br />
            <label for="password">密码：</label>
            <input type="password" id="password" v-model="password" />
            <br />
            <button @click="login">登录</button>
        </form>
    </div>
</template>

<script setup lang="ts">
//使用 vue3 + ts 实现一个登录页面，账号六到十一位，无特殊字符，密码六到16位，至少一个特殊字符，登录按钮，要求点击登陆后失败则给予提示，成功就发送网络请求

import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect, computed } from 'vue';
import axios from "axios";

const username = ref("");
const password = ref("");

const login = () => {
    if (
        username.value.length >= 6 &&
        username.value.length <= 11 &&
        /^[a-zA-Z0-9]+$/.test(username.value) &&
        password.value.length >= 6 &&
        password.value.length <= 16 &&
        /[^a-zA-Z0-9]/.test(password.value)
    ) {
        // 登录成功，发送网络请求
        axios
            .post("http://localhost:3000/login", {
                username: username.value,
                password: password.value,
            })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    } else {
        alert("账号或密码不符合规则！");
    }
};

</script>
<style scoped lang='scss'></style>