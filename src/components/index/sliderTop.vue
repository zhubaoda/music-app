<template>
 <div class="info" :style="{ background: infoBack }">
    	<img :src="profile.avatarUrl" class="info-img"/>
    <div class="bottom">
      <div class="left">
      	<span class="nick-name">{{ profile.nickname }}</span>
    	    <span class="level">lv.{{ profile.level }}</span>
      </div> 
    	  <div class="sign-in" @click="signIn">
    	  	<img src="/static/icon/sign-in.svg" />
    	  	<span>签到</span>
    	  </div>
    </div>   	
 </div>
</template>

<script>
  export default {
    props: {
    	  infoBack: {
    	  	type: String,
    	  	default: ''
    	  }
    },
    computed: {
      profile () {
      	return this.$store.state.info.profile;
      }
  	},
  	methods: {
  	  signIn () {
  	  	this.$emit('signIn')
  	  }
  	}
  }
</script>
<style lang="less" scoped>
  @import url("../../assets/style/main.less");
  .info {
  	background-color: #888888;
  	padding: 50px 10px 15px 10px;
  	.info-img {
  	  width: 70px;
  	  height: 70px;
  	  border-radius: 50%;
  	  overflow: hidden;
  	  margin-bottom: 20px;
  	}
  	.bottom {
  	  .display_box_t;
  	  justify-content: space-between;
  	  color: #fff;
  	  font-size: 12px;
  	  .left {
  	  	.display_box_t;
  	  }
  	  .nick-name {
  	  	font-size: 18px;
  	  }
  	  .level {
  	  	padding: 0px 8px;
  	  	border: 1px solid #fff;
  	  	border-radius: 8px;
  	  	margin-left: 10px;
  	  	font-style:italic;
  	  }
  	  .sign-in {
  	  	.display_box_t;
  	  	border: 1px solid #fff;
  	  	padding: 2px 8px;
  	  	border-radius: 12px;
  	  	img {
  	  	  .box(14px, 14px);
  	  	  margin-right: 4px;
  	  	}
  	  }
  	}
  }
</style>

