<template>
	<div class="content2">
		<img src="../../assets/img/acount/logo.png" class="logLogo" onclick="return false"/>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_phone@2x.png" class="icon" />
				<input type="text" placeholder="请输入您的手机号" v-model="loginData.mobile" @blur="mobileBlur" />
			</div>
			<p v-show="tipList.mobile">手机号格式错误</p>
		</div>
		<div class="inputBox lastInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_password@2x.png" class="icon" />
				<input :type="passwordType" placeholder="请输入您的密码" v-model="loginData.password" @blur="passwordBlur" />
				<img src="../../assets/img/acount/reg_reg_hide@2x.png" class="seeIcon" @click="changePasswordType" v-if="passwordType!='password'" />
				<img src="../../assets/img/acount/reg_reg_show@2x.png" class="seeIcon" @click="changePasswordType"  v-if="passwordType=='password'"/>
			</div>
			<p v-show="tipList.password">密码格式错误</p>
		</div>
		<colorBtn :cBtnActive="isLogBtnActive" @cBtnTuch="goLogin" :cBtnValue="btnValue"></colorBtn>
		<div class="restAcount">
			<span @click="goPasswordBack">忘记密码</span>
			<span @click="goRegister">手机号快速注册</span>
		</div>
		<div id="toastlxl" class="toastlxl"></div>
	</div>
</template>
<script>
	import "../../assets/css/acount.css"
	import { Toastlxl } from "../../../static/js/toastlxl.js"
	import HeaderNav from '../base/headerNav'
	import ColorBtn from '../base/colorBtn'
	var showModal ='';
	let base_url = '';
	export default {
		data() {
			return {
        btnValue: '登录',
				passwordType: "password",
				isLogBtnActive: false,
				loginData: {
					mobile: "",
					password: "",
				},
				tipList: {
					mobile: false,
					password: false,
				},
			}
		},
		components: {
			HeaderNav,ColorBtn
		},
		created() {
			base_url = this.$store.state.base_url;
		},
		mounted(){
			showModal = new Toastlxl('toastlxl');				
		},
		methods: {
			changePasswordType() {
				if(this.passwordType == "password") {
					this.passwordType = "text"
				} else {
					this.passwordType = "password"
				}
			},
			mobileBlur() {
				if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.loginData.mobile)) {
					this.tipList.mobile = true;
				}
			},
			passwordBlur() {
				if(this.loginData.password.length < 6) {
					this.tipList.password = true;
				}
			},
			goRegister() {
				this.$router.push({
					path: "/acount/register"
				})
			},
			goPasswordBack() {
				this.$router.push({
					path: "/acount/passwordBack"
				})
			},
			goLogin() {
				var that = this;
				
				if(this.isLogBtnActive) {
					this.$http.post('/user/login', that.loginData).then((result) => {
						if(result.data.code == "1") {
							that.loginData.password = "";
							showModal.show(result.data.info);
						} else if(result.data.code == "0") {
							window.localStorage.setItem("jiazhuoToken", result.data.data.token);
							window.localStorage.setItem("nickname", result.data.data.user_info.nickname);
							window.localStorage.setItem("head_pic", result.data.data.user_info.head_pic);
							window.localStorage.setItem("mobile", result.data.data.user_info.mobile);
							showModal.show(`<div class='toastlxl_icon'></div><p>登陆成功</p>`);
							that.$store.commit({
								type: 'addToken',
								tokenCode: result.data.data.token
							})
							setTimeout(() => {
								that.$router.push({
									path: "/"
								})
							}, 1500)
						}
					});
				}
			}
		},
		watch: {
			loginData: {
				handler(curVal, oldVal) {
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(curVal.mobile)) {
						this.tipList.mobile = false;
					}
					if(curVal.password.length >= 6) {
						this.tipList.password = false;
					}
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(curVal.mobile) && curVal.password.length >= 6) {
						this.isLogBtnActive = true;

					} else {
						this.isLogBtnActive = false;
					}
				},
				deep: true,
			},
		},

	}
</script>

<style>

</style>
