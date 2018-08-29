import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/*状态对象*/
const state ={
  base_url: 'https://a.hzjiazhuo.com/api',
	token:"",
	baseUrl:"",
}
/*触发状态*/
const mutations={
	addToken(state,tokenCode) {
   state.token=tokenCode;
  }
}
export default new Vuex.Store({
	state,
	mutations
})
