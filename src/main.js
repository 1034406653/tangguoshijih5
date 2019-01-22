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
import 'babel-polyfill'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import QRCode from 'qrcode'

/*基础地址替换*/
var allbaseURL = 'https://a.hzjiazhuo.com/api';
var allshare = 'https://web.hzjiazhuo.com/app_h5/invite.html';

Vue.prototype.$baseURL = allbaseURL
Vue.prototype.$share = allshare
Vue.prototype.$http = axios
Vue.prototype.$qs = qs
Vue.use(MintUI)
Vue.config.productionTip = false
let userInfo = '';
let guideActive = '';
let fromUrl='';
router.beforeEach((to, from, next) => {
	fromUrl = window.localStorage.getItem('fromUrl');;
	/*活动页跳转来的*/
	guideActive = window.localStorage.getItem("guideActive");
	if(guideActive == 'completed' || to.path == '/index/guide' || to.path == '/index/guide'||fromUrl) {
		userInfo = window.localStorage.getItem("jiazhuoToken");
		if(userInfo || to.path == '/index/guide') {
			next();
		} else {
			/*账号相关*/
			let reg1 = /^\/acount/;
			/*基本说明*/
			let reg2 = /^\/center\/feedback/;
			let reg3 = /^\/center\/set_future/;
			let reg4 = /^\/center\/set_question/;
			if(reg1.test(to.path)||reg2.test(to.path)||reg3.test(to.path)||reg4.test(to.path)) { //如果是登录页面路径，就直接next()
				next();
			} else { //不然就跳转到登录；
				next('/acount/login');
			}
		}
	}else{
		next('/index/guide');
	}
})
promise.polyfill();
// 全局配置
axios.defaults.baseURL = allbaseURL;
// 请求前
axios.interceptors.request.use(config => {
	userInfo = window.localStorage.getItem("jiazhuoToken");
	config.timeout = '10000';
	if(config.method === 'post') {
		if(config.url != (allbaseURL+'//upload/upload_img')) {
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
	console.log(data);
	if(data.data.code === 1002) {
		console.log("请求出问题了")
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
