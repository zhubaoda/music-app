<style lang="less" scoped>
  @import url("../../assets/style/main.less");
  .index-head {
    background-color: @basicColor;
    img {
  	  .box(30px, 30px);
    }
    .img-box {
  	  padding: 10px 10px 7px 10px;
    }
    .center {
  	  flex: 1;
  	  justify-content: center;
  	  img {
  	    margin-right: 10px;
  	  }
  	  .music-img {
  	    .box(25px, 25px);
  	  }
    }
  }
</style>

<template>
  <div class="index-head display_box_t">
    <div class="img-box" @click="switchNav(0)">
    	  <img src="/static/icon/sidebar.svg" />
    	</div>
    	<div class="center display_box_t">
    	  <div class="img-box" @click="switchNav(1)">
    	  	<img src="/static/icon/music.svg" class="music-img" />
    	  </div>
    	  <div class="img-box" @click="switchNav(2)">
    	  	<img src="/static/icon/coil.svg" />
    	  </div>
    	  <div class="img-box" @click="switchNav(3)">
    	  	<img src="/static/icon/play.svg" />
    	  </div>
    	</div>
    	<div class="img-box" @click="switchNav(4)">
    	  <img src="/static/icon/search.svg" />
    	</div>
  </div>
</template>

<script>
  export default {
    props: {
    	
    },
    methods: {
    	  switchNav (idx) {
    	  	this.$emit('switchNav', idx);
    	  }
    }
  }
</script>
