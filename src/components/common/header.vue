<style lang="less" scoped>
  @import url("../../assets/style/main.less");
  .head {	
  	padding: 10px;
  	background-color: @basicColor;
    align-items: center;
    color: #fff;
  	.head-img {
  	  .box(30px, 30px);
  	  margin-right: 15px;
  	}
  }
</style>

<template>
  <div class="head display_box_t">
    <img src="/static/icon/left-arrow.svg" class="head-img" />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
  export default {
    props: {
    	  title: {
    	  	type: String
    	  }
    }
  }
</script>

