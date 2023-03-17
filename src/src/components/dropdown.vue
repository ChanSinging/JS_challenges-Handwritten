<!--
    * @Name: dropdown
    * @Author: cxy
    * @Date: 2023/1/28 17:52
    * @Description：dropdown
    * @Update: 2023/1/28 17:52
-->
<template>
    <div
        class="my-dropdown"
        @click.stop="trigger === 'click' ? (showMenu = !showMenu) : ''"
        @mouseenter="trigger === 'hover' ? (showMenu = true) : ''"
        @mouseleave="trigger === 'hover' ? (showMenu = false) : ''"
        ref="myDropDdown"
    >
        <div class="tip-text" ref="tipText">
            <slot></slot>
        </div>
        <slot name="list"></slot>
    </div>
</template>

<script>
import emitter from "./emitter";
export default {
    name: "MyDropdown",
    componentName: "MyDropdown",
    mixins: [emitter],
    props: {
        // 触发显示方式
        trigger: {
            type: String,
            default: "click",
        },
        // 下来菜单的出现位置（上方，下方）
        placement: {
            type: String,
            default: "bottom",
            validator: function (value) {
                // 这个值必须匹配下列字符串中的一个
                return ["bottom", "top"].includes(value);
            },
        },
    },
    data() {
        return {
            //控制菜单是否显示
            showMenu: false,
        };
    },
    mounted() {
        //初始化自定义事件
        this.initEvent();
    },
    methods: {
        // 初始化
        initEvent() {
            //订阅当item点击的时候，发布on-click事件，告知外部
            this.$on("item-click", (params) => {
                this.$emit("on-click", params);
                this.showMenu = false;
            });
            //空白点击要隐藏菜单，需要执行的函数需要绑定this指向
            this.handleEmptyDomElementClickBindThis =
                this.handleEmptyDomElementClick.bind(this);
            window.addEventListener("click", this.handleEmptyDomElementClickBindThis);
        },

        // 处理空白区域点击，隐藏菜单列表
        handleEmptyDomElementClick(e) {
            if (!Array.from(this.$refs.myDropDdown.childNodes).includes(e.target)) {
                this.showMenu = false;
            }
        },
    },
    beforeDestroy() {
        // 移除window上面的事件
        window.removeEventListener(this.handleEmptyDomElementClickBindThis);
    },
    watch: {
        //变化的时候，通知子组件隐藏菜单列表
        showMenu() {
            this.broadcast("MyDropdownMenu", "set-menu-status", this.showMenu);
        },
    },
};
</script>

<style lang="less">
.my-dropdown {
    position: relative;
}
</style>
