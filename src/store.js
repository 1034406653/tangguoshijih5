import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/*状态对象*/
const state = {
  base_url: 'https://a.hzjiazhuo.com/api',
  token: "",
  head_pic: "../../assets/img/index/home_pic_avatar.png",
  nickname: "",
  fromUrl: "",
  dio: {},
}
/*触发状态*/
const mutations = {
  addToken(state, tokenCode) {
    state.token = tokenCode;
  }
}
export default new Vuex.Store({
  state,
  mutations
})
