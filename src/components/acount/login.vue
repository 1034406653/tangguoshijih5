<template>
	<div class="content2">
		<div class="loginHeader">
			<img src="../../assets/img/base/navigation_nav_back@2x.png" class="back" @touchend="goBack" />
		</div>
		<img src="../../assets/img/acount/logo.png" class="logLogo" onclick="return false" />
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
				<input type="password" style="display: none;" />
				<input :type="passwordType" placeholder="请输入您的密码" v-model="loginData.password" @blur="passwordBlur" id='passwordVal' />
				<img src="../../assets/img/acount/reg_reg_hide@2x.png" class="seeIcon" @touchend="changePasswordType" v-if=" passwordType !='password'&&loginData.password.length>0" />
				<img src="../../assets/img/acount/reg_reg_show@2x.png" class="seeIcon" @touchend="changePasswordType" v-if="passwordType=='password'&&loginData.password.length>0" />
			</div>
			<p v-show="tipList.password">密码格式错误</p>
		</div>
		<colorBtn :cBtnActive="isLogBtnActive" @cBtnTuch="goLogin" :cBtnValue="btnValue"></colorBtn>
		<div class="restAcount">
			<span @touchend="goPasswordBack">忘记密码?</span>
			<span @touchend="goRegister">手机号快速注册</span>
		</div>
		<div id="toastlxllogin" class="toastlxl"></div>
	</div>
</template>
<script>
	import "../../assets/css/acount.css"
	import { Toastlxl } from "../../assets/js/toastlxl.js"
	import HeaderNav from '../base/headerNav'
	import ColorBtn from '../base/colorBtn'
	var toastlxllogin = '';
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
			HeaderNav,
			ColorBtn
		},
		created() {
			base_url = this.$store.state.base_url;
		},
		mounted() {
			toastlxllogin = new Toastlxl('toastlxllogin');
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
				if(this.loginData.mobile.length!=11) {
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
							toastlxllogin.show(result.data.info);
						} else if(result.data.code == "0") {
							window.localStorage.setItem("jiazhuoToken", result.data.data.token);
							window.localStorage.setItem("nickname", result.data.data.user_info.nickname);
							window.localStorage.setItem("head_pic", result.data.data.user_info.head_pic);
							window.localStorage.setItem("mobile", result.data.data.user_info.mobile);
							toastlxllogin.show(`<div class='toastlxl_icon'></div><p>登陆成功</p>`);
							that.$store.commit({
								type: 'addToken',
								tokenCode: result.data.data.token
							})
							setTimeout(() => {
								if(window.localStorage.getItem('fromUrl')) {
									/*活动页跳转来的*/

									let fromUrl = window.localStorage.getItem('fromUrl');
									window.localStorage.removeItem('fromUrl')
									window.location.href = fromUrl;
								} else {
									that.$router.push({
										path: "/"
									})
								}
							}, 1000)

						}
					});
				}
			},
			goBack() {
				if(window.localStorage.getItem('fromUrl')) {
					let fromUrl = window.localStorage.getItem('fromUrl');
					window.localStorage.removeItem('fromUrl');
					window.location.href = fromUrl;
				} else {
					this.$router.push({
						'path': '/index/guide'
					})
				}
			},
		},
		watch: {
			loginData: {
				handler(curVal, oldVal) {
					if(curVal.mobile.length==11) {
						this.tipList.mobile = false;
					}
					if(curVal.password.length >= 6) {
						this.tipList.password = false;
					}
					if(curVal.mobile.length==11 && curVal.password.length >= 6) {
						this.isLogBtnActive = true;

					} else {
						this.isLogBtnActive = false;
					}
				},
				deep: true,
				immediate: true
			},
		},

	}
</script>

<style scoped>
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 1000px rgba(239, 239, 239, 1) inset !important;
	}
	
	.loginHeader {
		width: 100%;
		height: 88px;
		line-height: 88px;
		position: fixed;
		text-align: center;
		overflow: hidden;
		top: 0;
		left: 0;
		background: #F7F7F7;
		z-index: 999;
	}
	
	.loginHeader .back {
		width: 62px;
		height: 42px;
		position: absolute;
		left: 20px;
		top: 23px;
		padding-left: 20px;
	}
</style>