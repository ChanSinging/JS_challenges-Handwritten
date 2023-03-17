<template>
    <div>
        <h1>{{ msg }}</h1>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生性别：{{ sex }}</h2>
        <h2>学生年龄：{{ myAge + 1 }}</h2>
        <button @click="updateAge">尝试修改收到的年龄</button>
        <hr>
        <button @click="isShow =! isShow">显示 隐藏</button>
        <!--        <transition name="hello" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">-->
        <transition name="custom" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <h1 v-show="isShow">你好呀</h1>
        </transition>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Student',
    data () {

        console.log(this)
        return {
            msg: '我是一个尚硅谷的学生',
            myAge: this.age,
            isShow: true
        }
    },
    methods: {
        updateAge () {
            this.myAge++
        }
    },
    //简单声明接收
    // props:['name','age','sex']

    //接收的同时对数据进行类型限制
    /* props:{
        name:String,
        age:Number,
        sex:String
    } */

    //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
    props: {
        name: {
            type: String, //name的类型是字符串
            required: true, //name是必要的
        },
        age: {
            type: Number,
            default: 99 //默认值
        },
        sex: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
}
.el-icon-arrow-down {
    font-size: 12px;
}
h1 {
    background-color: #42b983;
}

.hello {

}

.custom-enter-active {
    transition: opacity 2s
}

.hello-enter-active {
    animation: zhuoxi 0.5 linear;
}
</style>
