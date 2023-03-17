<!--
    * @Name: dropdown-menu
    * @Author: cxy
    * @Date: 2023/1/28 17:52
    * @Description：dropdown-menu
    * @Update: 2023/1/28 17:52
-->
<template>
    <!-- 涉及到高度，位移，过渡使用js钩子函数的方式比较好处理些 -->
    <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @leave="leave"
        v-bind:css="false"
    >
        <div class="my-dropdown-menu" v-if="showMeune" ref="myDroupdownMenu">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
import emitter from "./emitter";
export default {
    name: "MyDropdownMenu",
    componentName: "MyDropdownMenu",
    mixins: [emitter],
    data() {
        return {
            showMeune: false,
            timer: null,
        };
    },
    mounted() {
        this.$on("set-menu-status", (status) => {
            this.showMeune = status;
        });
    },
    methods: {
        //进入前，初始化需要过渡的属性
        beforeEnter: function (el) {
            // 初始化
            el.style.opacity = 0;
            el.style.transform = "scaleY(0)";
            el.style.transformOrigin = "top center";
        },
        //dom进入
        enter: function (el, done) {
            //获取文档可视区高度
            const htmlClientHeight = document.documentElement.clientHeight;
            //菜单列表相对于父元素的top偏移量
            const offsetTop = el.offsetTop;
            const scrollHeight = el.scrollHeight;
            //获取当前元素和可视区的一些长度（top,left,bottom等）
            const { bottom } = el.getBoundingClientRect();
            // 说明底部高度不够显示菜单了,这时候我们需要调整菜单朝上面显示
            if (htmlClientHeight - bottom < scrollHeight) {
                el.style.transformOrigin = "bottom center";
                el.style.top = -(scrollHeight + 20) + "px";
            } else {
                //查看是否placement属性，是的话我们主动处理
                if (this.$parent.placement == "top") {
                    el.style.transformOrigin = "bottom center";
                    el.style.top = -(scrollHeight + 20) + "px";
                } else {
                    el.style.top = offsetTop + "px";
                }
            }
            el.style.transform = "scaleY(1)";
            el.style.opacity = 1;
            //根据官网事例，必须在enter和leave里面调用done函数，不然过渡动画不生效（切记）
            done();
        },
        //dom元素离开
        leave: function (el, done) {
            el.style.transform = "scaleY(0)";
            el.style.opacity = 0;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                //根据官网事例，必须在enter和leave里面调用done函数，不然过渡动画不生效（切记）
                done();
            }, 250);
        },
    },
};
</script>

<style lang="less">
.my-dropdown-menu {
    min-width: 100px;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
    z-index: 900;
    transform-origin: top center;
    position: absolute;
    transition: transform 0.25s ease, opacity 0.25s ease;
}
</style>

