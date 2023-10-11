<template>
  <div ref="target" @mouseenter="hoverTriger" @mouseleave="hoverTrigerLeave">
	<div class="dropdown-show" ref="reference" @click="clickTrigger">
		<slot name="reference"></slot>  <!--插入的按钮内容-->
	</div>
	<div class="dropdown-show">
		<transition :name="transition" v-show="showPopover">
			<div class="dropdown">
				<slot>{content}</slot> <!--插入的下拉内容-->
			</div>
		</transition>
	</div>
  </div>
</template>
<!--
调用时在中间插入
<template #reference><button>点击展开</button></template>
-->
<script setup>
import { ref, toRefs,  onMounted, watchEffect, onClickOutside} from 'vue';
import PopoverProps from './popover';
const props = defineProps(PopoverProps);
// const data = reactive({})
const target = ref(null);
const visible = ref(false);

onClickOutside(target, (event) => {
  visible.value = false;
});
const showPopover = computed(()=>{
	return visible.value;
})
function clickTrigger(){
	if(props.value=='click'){
		visual.value = !visual.value;
	}
}
function hoverTriger(){
	visible.value = true;
}
function hoverTrigerLeave(){
	visible.value = false;
}

onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
})
watchEffect(()=>{
})
// 使用toRefs解构
// let { } = { ...toRefs(data) } 
defineExpose({
  ...toRefs(data)
})

</script>
<style scoped lang='less'>
</style>