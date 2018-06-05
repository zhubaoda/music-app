import Fetch from './fetch'


export default {
   async fetch () {
   	 let fetch = new Fetch()
   	 return fetch.fetch(...arguments)
   },
   // 登录
   async login (params) {
   	 return await this.fetch('/api/login/cellphone', { params: params })
   },
   // 获取用户信息
   async getInfo (uid) {
   	 return await this.fetch('/api/user/detail', { params: { uid: uid } })
   },
   // 获取用户信息， 歌单， 收藏， mv， dj数量
   async getMv () {
   	 return await this.fetch('/api/user/subcount')
   },
   // 签到
   async signIn (type) {
   	 return await this.fetch('/api/daily_signin', { params: { type: type } })
   },
   // banner
   async getBanner () {
   	 return await this.fetch('/api/banner')
   },
   // 推荐歌曲
   async recommendMusic () {
   	 return await this.fetch('/api/recommend/resource')
   }
}
