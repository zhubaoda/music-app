import axios from 'axios'
import interfaces from '@/interfaces/index'
//各个组件共享数据的仓库
const state = {
  // 昵称 头像 背景图	
  profile: {
  	nickname: '',
  	avatarUrl: '',
  	backgroundUrl: '',
  	level: ''
  }
  
}
//对state的值进行过滤
const getters = {
  profile: state => state.profile
}
//通过dispatch触发的方法
const actions = {
  async getInfo({commit,state}, params){
    let res = await interfaces.getInfo(params);
    if (res) {
      commit('getInfo', res);
    }
  }
}
//在mutation中去改变state的值
const mutations = {
  getInfo(state,res){
  	if (res.profile) {
      state.profile.nickname = res.profile.nickname;
      state.profile.avatarUrl = res.profile.avatarUrl;
      state.profile.backgroundUrl = res.profile.backgroundUrl;
  	}
    state.profile.level = res.level;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}