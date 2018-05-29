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
  	  background-color: #fff;
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
    	    <slider-top :infoBack="infoBack" @signIn="signIn"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import interfaces from '@/interfaces/index'
  import { Toast } from 'mint-ui';
  import indexHead from '@/components/index/head';
  import sliderTop from '@/components/index/sliderTop';
  export default {
  	components: { indexHead, sliderTop, Toast },
  	data () {
  	  return {
  	  	sliderShow: false,
  	  	infoBack: ''
  	  }
  	},
  	computed: {
      profile () {
      	return this.$store.state.info.profile;
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
  	  }
  	},
  	async created () {
  	  await this.getInfo();
  	}
  }
</script>
