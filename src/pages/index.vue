<style lang="less" scoped>
  @import url("../assets/style/main.less");
  .index {
  	width: 100%;
  	height: 100vh;
  	overflow: hidden;
  	.display_box_p;
  	position: relative;
  	background-color: #f5f5f5;
  	.black {
  	  .fixed;
  	  .box(100vw, 100vh);
  	  background-color: rgba(0, 0, 0, .6);
  	}
  	.left-slider {
  	  .box(80%, 100%);
  	  background-color: #fff;
  	  position: fixed;
  	  top: 0;
  	  left: 0; 
  	  z-index: 30;
  	}	
  }
  .main {
  	flex: 1; 
  	overflow-y: auto; 
  	overflow-x: hidden;
  	width: 100vw;	
  }
  .swiper-box {
  	padding: 0 10px;
  	background-color: @basicColor;
    height: 140px; 	
  }
  .swiper {
  	width: 100%;
  	height: 170px;
  	border-radius:8px;
  	overflow: hidden;
  	.img-box {
  	  width: 100%;
  	  height: 170px;
  	  .display_box_t;
  	  justify-content: center;
  	}
  	img {
  	  width: 100%;
  	}
  }
  .recommd {
  	background-color: #fff;
  	color: #fff;
  	.image {
  		width: 100%;
  		height: 400px;
  	}
  	.entrance {
  	  .display_box_t;
  	  margin-top: 28px;
  	  padding: 20px 0 10px 0; 
  	  border-bottom: 1px solid rgba(204,204,204,.3);
  	  .entrance-item {
  	  	flex: 1;
  	  	.display_box_p;
  	    justify-content: center;
  	    align-items: center; 
  	  	.top {
  	  		.display_box_t;
  	        justify-content: center;
  	        width: 45px;
  	        height: 45px;
  	        border: 1px solid @basicColor;
  	        border-radius:50%;
  	        img {
  	        	  width: 25px;
  	        	  height: 25px;
  	        }
  	  	}
  	  	span {
  	  		color: #000;
  	  		font-size: 12px;
  	  		margin-top: 10px;
  	  	}
  	  }
  	}
  }
  .friend {
  	background-color: orange;
  	color: #000;
  }
  .station {
  	background-color: blue;
  	color: red;
  }
</style>

<template>
  <div class="index">
  	<div class="head-nav">
      <index-head @switchNav="switchNav" />   
      <tab :list="tablist" :idx="idx" @selectBar="selectBar" />
    </div>
    <div class="black" v-show="sliderShow" @click="cancelSlider"></div>
    <transition name="slider">
      <div class="left-slider" v-if="sliderShow">
    	    <slider-top :infoBack="infoBack" @signIn="signIn"/>
      </div>
    </transition>
    <transition name="swiper">
      <div class="recommd main">
      	<div class="swiper-box">
      	  <mt-swipe :auto="4000" class="swiper">
           <mt-swipe-item v-for="(todo,index) in banner" :key="index">
           	 <div class="img-box">
           	 	<img :src="todo.picUrl" />
           	 </div>
           </mt-swipe-item>
         </mt-swipe>  
      	</div>
      	<div class="entrance">
      	  <div class="entrance-item" v-for="(item, index) in recommendImg" :key="index">
      	   	 <div class="top">
      	   	 	<img :src="item.path" />
      	   	 </div>
      	   	 <span>{{ item.title }}</span>
      	  </div>
      	</div>
      	<recommendMusicList :recommend="recommend" :title="title1"/>
      </div>
    </transition>
    <transition :name="centerAnima">
      <div class="friend main" v-if="idx === 1">
    	     1111111
      </div>
    </transition>
    <transition name="swipert">
      <div class="station main" v-if="idx === 2">
    	     2222222
      </div>
    </transition>
  </div>
</template>

<script>
  import interfaces from '@/interfaces/index'
  import { Toast } from 'mint-ui';
  import indexHead from '@/components/index/head';
  import recommendMusicList from '@/components/index/recommendList';
  import sliderTop from '@/components/index/sliderTop';
  import tab from '@/components/common/tab';
  import dataConfig from './data.js';
  export default {
  	components: { indexHead, sliderTop, recommendMusicList, Toast, tab },
  	data () {
  	  return {
  	  	sliderShow: false,
  	  	infoBack: '',
  	  	tablist: ['推荐', '朋友', '电台'],
  	  	toIdx: 0,
  	  	idx: 0,
  	  	title1: '推荐歌单',
  	  	recommendImg: dataConfig.recommendImg
  	  }
  	},
  	computed: {
      profile () {
      	return this.$store.state.info.profile;
      },
      recommend () {
      	return this.$store.state.recommend.recommend;
      },
      banner () {
      	return this.$store.state.recommend.banner;
      },
      centerAnima () {
  	    if (this.toIdx === 0) {
  	  	  return 'swiper';
  	    } else {
  	  	  return 'swipert'
  	    }
      }
  	},
  	methods: {
  	  // 头组件事件
  	  switchNav (idx) {
  	  	if (idx === 0) {
  	  	  this.sliderShow = !this.sliderShow;
  	  	  this.infoBack = '#fff' + ' ' + 'url(' + this.profile.backgroundUrl + ')' + ' ' + '100% 100%' + 'no-repeat';
  	  	}
  	  },
  	  // 让侧边栏消失
  	  cancelSlider () {
  	  	this.sliderShow = false;
  	  },
  	  // 获取个人信息
  	  getInfo () {
  	  	let info = localStorage.getItem('info');
  	    if (info) {
  	  	  info = JSON.parse(info);
  	  	  info = info.userId;
  	  	  this.$store.dispatch('getInfo', info);
  	    } else {
  	  	  setTimeout(()=>{
  	  	    this.$router.push('/login');
  	  	  },500)
  	    }	  
  	  },
  	  // 签到
  	  async signIn () {
  	  	let res = await interfaces.signIn(0);
  	  	if (res.code === 200) {
  	  	  Toast({message: `签到成功！，恭喜你获得${res.point}经验`});
  	  	} else {
  	  	  Toast({message: res.msg});
  	  	}
  	  },
  	  // 切换tab
  	  async selectBar (index) { 
  	  	this.toIdx = this.idx;
  	  	this.idx = null;
  	  	setTimeout(() => {
  	  	  this.idx = index;
  	  	}, 500)
  	  	
  	  }
  	},
  	async created () {
  	  Promise.all(
  	  	[
  	  	  this.$store.dispatch('recommendMusic'),
  	  	  this.$store.dispatch('getBanner'), 
  	  	  this.$store.dispatch('getNewMusic')
  	  	]
  	  )
  	  await this.getInfo();
  	}
  }
</script>
