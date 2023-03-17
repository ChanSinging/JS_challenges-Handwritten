<!--
    * @Name: dropdown_item
    * @Author: cxy
    * @Date: 2023/1/28 17:52
    * @Description：dropdown_item
    * @Update: 2023/1/28 17:52
-->
<template>
    <div
        :class="[
      'my-dropdownItem',
      divided ? 'my-dropdownItem-divided' : '',
      disabled ? 'my-dropdownItem-disabled' : '',
    ]"
        @click.stop="handleItemClick"
    >
        <slot></slot>
    </div>
</template>

<script>
import emitter from "./emitter";

export default {
    name: "MyDropdownItem",
    componentName: "dropdown-item",
    mixins: [emitter],
    props: {
        divided: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    methods: {
        handleItemClick() {
            if (this.disabled) return;
            // item项点击通知dropdown组件派发到外部的自定义事件
            this.dispatch("MyDropdown", "item-click", this.name);
        },
    },
};
</script>

<style lang="less">
.my-dropdownItem {
    margin: 0;
    line-height: normal;
    padding: 7px 16px;
    clear: both;
    color: #515a6e;
    font-size: 14px !important;
    white-space: nowrap;
    list-style: none;
    cursor: pointer;
    transition: background 0.2s ease-in-out;
    &:hover {
        background: #f3f3f3;
    }
}
.my-dropdownItem-divided {
    border-bottom: 1px solid #eee;
}
.my-dropdownItem-disabled {
    color: #cacdd2;
    cursor: not-allowed;
    &:hover {
        background: #fff;
    }
}
</style>
