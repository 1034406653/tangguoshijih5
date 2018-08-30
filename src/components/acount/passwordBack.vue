<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="inputBox firstInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_phone@2x.png" class="icon" />
				<input type="text" placeholder="请输入您的手机号" v-model="resetPassword.mobile" @blur="mobileBlur" />
			</div>
			<p v-show="tipList.mobile">{{tipMobileText}}</p>
		</div>
		<div class="inputBox verifyInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_captcha@2x.png" class="icon" />
				<input type="text" placeholder="请输入验证码" v-model="resetPassword.verify_code" @blur="verifyBlur" />
				<span class="verifyBtn" v-show="verifyBtnShow" @click="getVerify">获取验证码</span>
				<span class="verifyCount verifyBtn" v-show="!verifyBtnShow">{{verifyCountNum}} S</span>
			</div>
			<p v-show="tipList.verify_code">验证码格式错误</p>
		</div>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_password@2x.png" class="icon" />
				<input type="text" placeholder="请输入6-20位新密码" v-model="resetPassword.password" @blur="passwordBlur" />
			</div>
			<p v-show="tipList.password">密码格式错误</p>
		</div>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_password@2x.png" class="icon" />
				<input type="text" placeholder="请再次确认新密码" v-model="resetPassword.repassword" @blur="password2Blur" />
			</div>
			<p v-show="tipList.repassword">两次输入密码不同</p>
		</div>

		<div class="logBtn" :class="{logBtnActive:isLogBtnActive}" @click="goPasswordBack">
			确认
		</div>

	</div>
</template>

<script>
	import "../../assets/css/acount.css"
	import HeaderNav from '../base/headerNav'
	import { Toast } from 'mint-ui'
	let base_url = ""
	export default {
		data() {
			return {
				pageTitle: "找回密码",
				tipMobileText: "手机号格式错误",
				verifyBtnShow: true,
				verifyCountNum: 59,
				resetPassword: {
					mobile: "",
					verify_code: "",
					password: "",
					repassword: ""
				},
				tipList: {
					mobile: false,
					password: false,
					verify_code: false,
					repassword: false,
				},
				isLogBtnActive: false,
			}
		},
		components: {
			HeaderNav,
		},
		created() {
			base_url = this.$store.state.base_url;
		},
		methods: {
			mobileBlur() {
				let that = this;
				if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.resetPassword.mobile)) {
					that.tipMobileText = "手机号格式错误";
					this.tipList.mobile = true;
				} else {
					this.$http.post('/user/mobile_registered', {
							mobile: that.resetPassword.mobile
						})
						.then((result) => {
							if(result.data.code === 1) {
								that.tipList.mobile = false;
							} else if(result.data.code === 0) {
								that.tipMobileText = '该号码未被注册';
								that.tipList.mobile = true;
							}
						});
				}
			},
			verifyBlur() {
				if(this.resetPassword.verify_code.length != "4") {
					this.tipList.verify_code = true;
				}
			},
			passwordBlur() {
				if(this.resetPassword.password.length < 6 || this.resetPassword.password.length > 20) {
					this.tipList.password = true;
				}
			},
			password2Blur() {
				if(this.resetPassword.password !== this.resetPassword.repassword) {
					this.tipList.repassword = true;
				}
			},
			getVerify() {
				let that = this;
				if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.resetPassword.mobile)) {
					this.$http.post('/user/sendCode', {
							mobile: that.resetPassword.mobile
						})
						.then((result) => {
							if(result.data.code == "0") {
								that.verifyBtnShow = false;
								let timer = setInterval(() => {
									if(that.verifyCountNum > 0) {
										that.verifyCountNum -= 1;
									} else {
										clearInterval(timer);
										that.verifyBtnShow = true;
									}
								}, 1000)
							}

						})
				} else {
					that.tipMobileText = "手机号格式错误";
					this.tipList.mobile = true;
				}
			},
			goPasswordBack() {
				let that = this
				if(this.isLogBtnActive) {
					this.$http.post('/user/reSetPassword', that.resetPassword)
						.then((result) => {
							if(result.data.code === 1) {
								Toast({
									message: result.data.info,
									position: 'top',
									duration: 1500,
									className: "toastName"
								});
							} else if(result.data.code === 0) {
								Toast({
									message: result.data.info,
									position: 'top',
									duration: 1500,
									className: "toastName"
								});
								setTimeout(() => {
									that.$router.push({
										path: "/acount/login"
									})
								}, 2000)
							}
						});
				}
			}
		},
		watch: {
			resetPassword: {
				handler(curVal, oldVal) {
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(curVal.mobile)) {
						this.tipList.mobile = false;
					}
					if(curVal.password.length >= 6 && curVal.password.length <= 20) {
						this.tipList.password = false;
					}
					if(curVal.verify_code.length == "4") {
						this.tipList.verify_code = false;
					}
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(curVal.mobile) && curVal.password.length >= 6 && curVal.verify_code.length == "4" && this.resetPassword.password === this.resetPassword.repassword) {
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

<style scoped>

</style>