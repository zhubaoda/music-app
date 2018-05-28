<style lang="less" scoped>
  @import url("../assets/style/main.less");
  .index {
  	width: 100%;
  	position: relative;
  	.head-nav {
  	   .fixed;
  	   width: 100%;
  	}
  	.black {
  	  .fixed;
  	  .box(100vw, 100vh);
  	  background-color: rgba(0, 0, 0, .6);
  	}
  	.left-slider {
  	  .box(80%, 100%);
  	  background-color: blue;
  	  position: fixed;
  	  top: 0;
  	  left: 0; 
  	  z-index: 30;
  	}
  }
</style>

<template>
  <div class="index">
    <index-head @switchNav="switchNav" class="head-nav"/>
    <div class="black" v-show="sliderShow" @click="cancelSlider"></div>
    <transition name="slider">
      <div class="left-slider" v-if="sliderShow">
    	   23321
      </div>
    </transition>
  </div>
</template>

<script>
  import indexHead from '@/components/index/head';
  export default {
  	components: { indexHead },
  	data () {
  	  return {
  	  	sliderShow: false
  	  }
  	},
  	methods: {
  	  // 头组件事件
  	  switchNav (idx) {
  	  	if (idx === 0) {
  	  	  this.sliderShow = !this.sliderShow;
  	  	}
  	  },
  	  // 让侧边栏消失
  	  cancelSlider () {
  	  	this.sliderShow = false;
  	  }
  	}
  }
</script>
