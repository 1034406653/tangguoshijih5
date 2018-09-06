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
import QRCode from 'qrcode'
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(MintUI)
Vue.config.productionTip = false
let userInfo = '';
router.beforeEach((to, from, next) => {
	userInfo = window.localStorage.getItem("jiazhuoToken");
	if(userInfo) {
		next();
	} else {
		let reg = /^\/acount/;
		if(reg.test(to.path)) { //如果是登录页面路径，就直接next()
			next();
		} else { //不然就跳转到登录；
			next('/acount/login');

		}
	}
})
promise.polyfill();
// 全局配置
axios.defaults.baseURL = 'https://a.hzjiazhuo.com/api';
// 请求前
axios.interceptors.request.use(config => {
	userInfo = window.localStorage.getItem("jiazhuoToken");
	config.timeout = '10000';
	if(config.method === 'post') {
		if(config.url != 'https://a.hzjiazhuo.com/api//upload/upload_img') {
			let params = config.data || {}
			if(userInfo) {
				params['token'] = userInfo;
			}
			config.data = qs.stringify(params);
			config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
		}

	}
	return config;
}, error => {
	return Promise.reject(error);
});
// 响应拦截器
axios.interceptors.response.use(data => {
	if(data.data.code === 1002) {
		window.localStorage.removeItem('jiazhuoToken')
		window.localStorage.removeItem('head_pic')
		window.localStorage.removeItem('nickname')
		router.push({
			path: "/acount/login"
		})
	}
	return data;
}, error => {
	console.log()
	return Promise.reject(error)
})
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
