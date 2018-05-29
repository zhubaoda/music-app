// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store'
import './assets/style/main.less'
import 'mint-ui/lib/style.css';
Vue.use(Mint)
Vue.config.productionTip = false

// 登录拦截
axios.interceptors.response.use( response => {
	let info = localStorage.getItem('info');
	if (!info) {
	  return response;
	  this.$router.push('/login');	
	}
    return response; 
}, error => {
	return error;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
