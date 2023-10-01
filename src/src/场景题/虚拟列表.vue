<template>
	<div>
	  <input type="text" v-model.number="dataLength">条
	  <div class="virtual-scroller" @scroll="onScroll" :style="{height: 600 + 'px'}">
		<div class="phantom" :style="{height: this.dataLength * itemHeight + 'px'}">
		  <ul :style="{'margin-top': `${scrollTop}px`}">
			<li v-for="item in visibleList" :key="item.brandId" :style="{height: `${itemHeight}px`, 'line-height': `${itemHeight}px`}">
			  <div>
				<div>{{item.name}}</div>
			  </div>
			</li>
		  </ul>
		</div>
	  </div>
	</div>
  </template>
  
  <script>
  export default {
	name: "vue-virtual-scroller",
	data() {
	  return {
		itemHeight: 60,
		visibleCount: 10,
		dataLength: 500000, // 总数量
		startIndex: 0,
		endIndex: 10,
		scrollTop: 0
	  }
	},
	computed: {
	  dataList() {
		const newDataList = [...Array(this.dataLength || 0).keys()].map((v, i) => ({
		  brandId: i + 1,
		  name: `第${i + 1}项`,
		  height: this.itemHeight
		}));
		return newDataList
	  },
	  visibleList() {
		return this.dataList.slice(this.startIndex, this.endIndex)
	  }
	},
	methods: {
	  onScroll(e) {
		const scrollTop = e.target.scrollTop
		this.scrollTop = scrollTop
		console.log('scrollTop', scrollTop)
		this.startIndex = Math.floor(scrollTop / this.itemHeight)
		this.endIndex = this.startIndex + 10
	  }
	}
  }
  </script>
  
  <style scoped>
  .virtual-scroller {
	border: solid 1px #eee;
	margin-top: 10px;
	height: 600px;
	overflow: auto
  }
  
  .phantom {
	overflow: hidden
  }
  
  ul {
	background: #ccc;
	list-style: none;
	padding: 0;
	margin: 0;
  }
  
  li {
	outline: solid 1px #fff;
  }
  </style>
  