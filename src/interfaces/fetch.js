import axios from 'axios'

export default function Fetch() {
  this.fetch = async (url, auth, params={}) => {
  	let response = await this._request(url, auth, params)
  	if (response.data && response.data.code === 403) {
  	  // token 过期了，重新调用接口
  	  localStorage.removeItem('token');
  	  return this.fetch(url, auth, data, method)	
  	}
  	return response.data
  }
  
  this._request = async (url, auth, params) => {
    let headers = {}
  	let res = await axios.get(url, { params: params }, { headers: headers })
  	return res
  }
  
  this.login = async () => {
	let token = await this.fetch('/api/login/cellphone', true) 
	localStorage.setItem('token',JSON.stringify(token))
	return token
  }
  
  this._getToken = async () => {
  	let token = '';
  	token = JSON.parse(localStorage.getItem('token')) 	
  	if (!token) {
  	  token = await this.login()
  	}	
  	return token
  }
}
