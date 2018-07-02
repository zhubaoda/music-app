<template>
  <div class="login">
  	<heads :title="title" />
  	<div class="main">
  	  <div class="box">
  	    <div class="box-item display_box_t">
  	    	   <img src="/static/icon/phone.svg" class="phone-img"/>
  	    	   <input type="number" v-model="formData.phone" placeholder="+86 请输入手机号" class="item-input"/>
  	    	   <span v-show="formData.phone">X</span>
  	    </div>
  	    <div class="box-item display_box_t">
  	    	   <img src="/static/icon/password.svg" class="phone-img"/>
  	    	   <input type="password" v-model="formData.password" placeholder="请输入密码" class="item-input" />
  	    	   <span v-show="formData.password">X</span>
  	    </div>
  	    <div class="submit" @click="login">
  	    	   <span>登录</span>
  	    </div>
  	    <div @click="downLoadImg">展示二位码下载链接</div>
  	    <a :href="base64" v-show="show" ref="mybase" id="mybase" download="hahha">保存二维码</a>
  	  </div>
  	</div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { Toast } from 'mint-ui';
  import heads from '@/components/common/header.vue';
  import interfaces from '@/interfaces/index'
  export default {
  	components: { heads, Toast },
    data () {
      return {
        title: '手机号登录',
        formData: {
        	  phone: '',
        	  password: ''
        },
        show: false,
        base64: ''
      }
    },
    methods: {
    	  async downLoadImg () {
    	  	 this.show = true
	     let url = "../../static/icon/calendar.svg"
	     let myurl = '/weapp/shop/fenxiao/member/22.jpg'
	     let image = new Image()
	     image.crossOrigin = 'Anonymous'
	     image.src = myurl
	     image.onload = async () => {
	     	this.base64 = await this.getBaseImg(image)
	     }
      },
    	  async getBaseImg (img) {
		let cvs = document.createElement('canvas')
	  	cvs.width = img.width
	  	cvs.height = img.height
	  	let ctx = cvs.getContext('2d')
	  	ctx.drawImage(img, 0, 0, img.width, img.height)
        let ext = img.src.substring(img.src.lastIndexOf(".")+1).toLowerCase()
	  	let dataURL = cvs.toDataURL("image/"+ext)
        return dataURL
	  },
    	  async login () {
    	  	if (!this.formData.phone) {
    	  	  Toast({message: '请输入手机号'});
    	  	  return;
    	  	}
    	  	
    	  	if (this.formData.phone) {
    	  	  let pat = /^[1][3,4,5,7,8][0-9]{9}$/;
    	  	  if (!pat.test(this.formData.phone)) {
    	  	  	Toast({message: '手机号格式不正确'});
    	  	  	return;
    	  	  }
    	  	}
    	  	
    	  	if (!this.formData.password) {
    	  	  Toast({message: '请输入密码'});
    	  	  return
    	  	}
    	  	
    	  	let res = await interfaces.login(this.formData);
    	  	if (res && res.msg) {
    	  	  Toast({message: res.msg});
    	  	}
    	  	
        if (res && res.code == 200) { 
        	  if (res.bindings && res.bindings[1] && res.bindings[1].tokenJsonStr) {
        	  	let info = JSON.parse(res.bindings[1].tokenJsonStr);
        	  	info.userId = res.bindings[1].userId;
        	  	console.log(10, info)
        	  	localStorage.setItem('info', JSON.stringify(info))
        	  }
        	  Toast({message: '登录成功！'});
          this.$router.push('/index') 
        }   
    	  }
    }
  }
</script>
<style lang="less" scoped>
  @import url("../assets/style/main.less");
  .login {
  	.main {
  	  .box {
  	  	padding: 0 0 0 10px;
  	  	margin-top: 50px;	
  	  	.box-item {
  	  	  margin-top: 20px;
  	  	  padding: 8px 15px 8px 0;
  	  	  border-bottom: 1px solid #ccc;
  	  	  font-size: 14px;
  	  	  span {
  	  	  	color: #8a8a8a;
  	  	  }
  	  	  .phone-img {
  	  	  	width: 25px;
  	  	  	height: 25px;
  	  	  }
  	  	  .item-input {
  	  	  	line-height: 25px;
  	  	  	padding-left: 10px;
  	  	  	flex: 1;
  	  	  }
  	  	}
  	  	.submit {
  	  	  width: 90%;
  	  	  margin: 40px auto;
  	  	  padding: 10px 0;
  	  	  font-size: 15px;
  	  	  color: #fff;
  	  	  border-radius: 18px;
  	  	  .display_box_t;
  	  	  justify-content: center;
  	  	  background: linear-gradient(left, lighten(@basicColor, 10%) 0%, @basicColor 100%);
  	  	}
  	  }
  	}
  }
</style>
