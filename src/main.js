// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
Vue.prototype.$http= axios
Vue.prototype.$qs= qs
Vue.use(MintUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    var userInfo = window.localStorage.getItem("jiazhuoToken");//获取浏览器缓存的用户信息
    if(userInfo){ 
        next();
    } else {
        if(to.path=='/acount/login'||to.path=='/acount/register'){ //如果是登录页面路径，就直接next()
            next();
        } else { //不然就跳转到登录；
            next('/acount/login');
        }
    }
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
