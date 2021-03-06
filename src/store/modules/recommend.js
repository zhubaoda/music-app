import interfaces from '@/interfaces/index'
//各个组件共享数据的仓库
const state = {
  // banner
  banner: [],
  // 推荐歌曲
  recommend: [],
  // 最新音乐
  newmusic: []
  
}
//对state的值进行过滤
const getters = {
  recommend: state => state.recommend
}
//通过dispatch触发的方法
const actions = {
  async recommendMusic({commit,state}){
    let res = await interfaces.recommendMusic();
    if (res) {
      commit('recommendMusic', res);
    }
  },
  async getBanner({commit,state}) {
  	let res = await interfaces.getBanner();
  	if (res) {
  	  commit('getBanner', res);
  	}
  },
  async getNewMusic({commit,state}) {
  	let res = await interfaces.getNewMusic();
  	if (res) {
  	  commit('getNewMusic', res);
  	}
  }
}
//在mutation中去改变state的值
const mutations = {
  recommendMusic(state,res){
  	state.recommend = res.recommend;
  },
  getBanner(state,res) {
  	state.banner = res.banners
  },
  getNewMusic(state, res) {
//	state.newmusic = 
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}