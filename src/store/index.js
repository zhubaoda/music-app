import Vue from 'vue'
import Vuex from 'vuex'
import info from './modules/info'
import recommend from './modules/recommend'

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
	  info,
	  recommend
	}
})
