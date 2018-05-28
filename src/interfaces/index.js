import Fetch from './fetch'


export default {
   async fetch () {
   	 let fetch = new Fetch()
   	 return fetch.fetch(...arguments)
   },
   async login (params) {
   	 return await this.fetch('/api/login/cellphone', true, params)
   }
}
