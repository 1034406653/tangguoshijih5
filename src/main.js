// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import promise from 'es6-promise'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(MintUI)
Vue.config.productionTip = false
let userInfo = window.localStorage.getItem("jiazhuoToken"); //获取浏览器缓存的用户信息
router.beforeEach((to, from, next) => {
	if(userInfo) {
		next();
	} else {
		if(to.path == '/acount/login' || to.path == '/acount/register') { //如果是登录页面路径，就直接next()
			next();
		} else { //不然就跳转到登录；
			next('/acount/login');
		}
	}
})
axios.defaults.baseURL = 'https://a.hzjiazhuo.com/api';
axios.interceptors.request.use(
	config => {
		if(config.method === 'post') {
			let params = config.data || {}
			if(userInfo) {
				params['token'] = userInfo;

			}
			config.data = qs.stringify(params);
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
);
//axios.interceptors.response.use(data => {
//  if (data.data.code === 1002) {
//      localStorage.removeItem('jiazhuoToken')
//      window.localStorage.setItem(userInfo);
//      router.push({
//      	path:"/acount/login"
//      })
//  }
//  return data;
//}, error => {
//  return Promise.reject(error)
//})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})