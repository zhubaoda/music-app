<template>
    <div class="rec-music-list">
  	  <div class="title">
  	  	<span>{{ title }}</span>
  	  	<img src="/static/icon/right-arrow.svg" />
  	  </div>
  	  <div class="rec-list-box">
  	  	<div class="flex-box" v-for="(todo,index) in recommend" :key="index">
  	  	  <img :src="todo.picUrl" class="cover-img"/>
  	  	  <div class="bk"></div>
  	  	  <div class="head-set">
  	  	  	<img src="/static/icon/head-set.svg" />
  	  	  	<span class="num">{{ todo.playcount | changeNumber }}</span>
  	  	  </div> 	  
  	  	  <div class="name">{{ todo.name }}</div>
  	  	</div>
  	  </div>
  	</div>
</template>

<script>
  export default {
  	props: {
  	  recommend: {
  	  	type: Array,
  	  	default: []
  	  },
  	  title: String
  	}
  }
</script>
<style lang="less" scoped>
@import url("../../assets/style/main.less");
.rec-music-list {
  color: #000;
  .title {
  	.display_box_t;
  	width: 100%;
  	text-align: left;
  	font-size: 14px;
  	font-weight: 600;
  	margin:20px 5px 0 5px;
  	img {
  	  height: 20px;
  	}
  }
  .rec-list-box {
  	display: flex;
  	flex-direction: row;
  	width: 100%;
  	box-sizing: border-box;
  	flex-wrap: wrap;
  	.flex-box {
  	  width: 32%;	  
  	  margin-left: 1%;
  	  border-radius: 5px;
  	  overflow: hidden;
  	  box-sizing: border-box; 
  	  margin-top:15px;
  	  position: relative;
  	  .bk {
  	  	position: absolute;
  	  	width: 100%;
  	  	height: 32vw;
  	  	top: 0;
  	  	left: 0;
  	  	background-color: rgba(0, 0, 0, .2);
  	  }
  	  .head-set {
  	  	position: absolute;
  	  	.display_box_t;
  	  	top:3px;
  	  	right: 5px;
  	  	img {
  	  		width: 14px;
  	  		height: 14px;
  	  	}
  	  	.num {
  	  	  font-size: 10px;
  	  	  color: #fff;
  	  	  margin-left: 5px;
  	  	}
  	  }
  	  .cover-img{
  	  	width: 100%;
  	  	height: 32vw;
  	  	border: 1px solid rgba(204,204, 204, .2);
  	  }
  	  .name {
  	  	font-size: 10px;
  	  	color: #333;
  	  	padding: 0 3px;
  	  }
  	}
  }
}
</style>
