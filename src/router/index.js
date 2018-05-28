import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

let routes = [{
  path: '/login',
  component: resolve => require(['@/pages/login.vue'], resolve)
},{
  path: '/index',
  component: resolve => require(['@/pages/index.vue'], resolve)
}]

let router = new Router({
  saveScrollPosition: true,
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise ((resolve,reject) => {
	  setTimeout(() => {
	    if (savedPosition) {
		  resolve(savedPosition);
		} else {
		  resolve({ x: 0, y: 0 });
		}	
	   }, 500)
	})	  	
  }
})

export default router;

