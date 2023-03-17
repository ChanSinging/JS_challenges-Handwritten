<!--
    * @Name: didi
    * @Author: cxy
    * @Date: 2023/3/6 11:19
    * @Description：didi
    * @Update: 2023/3/6 11:19
-->
<template>
    <span>{{ data.name }}</span>
    <span>{{ data.level }}</span>
    <span>{{ data.point }}</span>
    <button click="checkPoint">积分详情</button>
    <button click="checkLevel">查看权益</button>
    <piontDailog v-if="data.isPoint"></piontDailog>
    <levelDailog v-if="data.isLevel"></levelDailog>MPX
</template>

<script setup>
import {reactive, onMounted} from "vue";

const data = reactive({
    name: null,
    level: null,
    icon: null,
    point: '',
    isPoint: false,
    isLevel: false
})
const checkPoint = () => {
    data.isPoint = !data.isPoint
}
const checkLevel = () => {
    data.isLevel = !data.isLevel
}
const getDetail = () => {
    this.$api.getDetail((param) => {
        data.name = param.name,
        data.icon =  param.icon,
        data.point =  param.point,
        data.level = param.level
    })
}
onMounted = ()=> {
    getDetail()
}
</script>

<style scoped>

</style>
