<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="inputBox firstInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_phone@2x.png" class="icon" />
				<div class="phoneNumber">{{resetPassword.mobile}}</div>
			</div>
		</div>
		<div class="inputBox verifyInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_captcha@2x.png" class="icon" />
				<input type="text" placeholder="请输入验证码" v-model="resetPassword.verify_code" @blur="verifyBlur" />
				<span class="verifyBtn" v-show="verifyBtnShow" @touchend="getVerify">获取验证码</span>
				<span class="verifyCount verifyBtn" v-show="!verifyBtnShow">{{verifyCountNum}} S</span>
			</div>
			<p v-show="tipList.verify_code">验证码格式错误</p>
		</div>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_password@2x.png" class="icon" />
				<input type="text" placeholder="请输入旧密码" v-model="resetPassword.old_password" @blur="oldPasswordBlur" />
			</div>
			<p v-show="tipList.old_password">旧密码格式错误</p>
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
			<p v-show="tipList.repassword">两次密码不一样</p>
		</div>
		<colorBtn :cBtnActive="isLogBtnActive" @cBtnTuch="goChangePassword"></colorBtn>
		<div id="toastlxlchangepassword" class="toastlxl"></div>
	</div>
</template>

<script>
	import "../../assets/css/acount.css"
	import HeaderNav from '../base/headerNav'
	import ColorBtn from '../base/colorBtn'
	import { Toastlxl } from "../../assets/js/toastlxl.js"
	var toastlxlchangepassword = '';
	let base_url = ""
	export default {
		data() {
			return {
				pageTitle: "修改密码",
				tipMobileText: "手机号格式错误",
				verifyBtnShow: true,
				verifyCountNum: 59,
				resetPassword: {
					mobile: "",
					verify_code: "",
					password: "",
					repassword: "",
					old_password: "",
				},
				tipList: {
					mobile: false,
					password: false,
					verify_code: false,
					repassword: false,
					old_password: false,
				},
				isLogBtnActive: false,
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
			toastlxlchangepassword = new Toastlxl('toastlxlchangepassword');
			this.resetPassword.mobile = window.localStorage.getItem('mobile') || '';
		},
		methods: {
			verifyBlur() {
				if(this.resetPassword.verify_code.length != "4") {
					this.tipList.verify_code = true;
				}
			},
			oldPasswordBlur() {
				if(this.resetPassword.old_password.length < 6 || this.resetPassword.old_password.length > 20) {
					this.tipList.old_password = true;
				}
			},
			passwordBlur() {
				if(this.resetPassword.password.length < 6 || this.resetPassword.password.length > 20) {
					this.tipList.password = true;
				}
			},
			password2Blur() {
				if(this.resetPassword.repassword != this.resetPassword.password) {
					this.tipList.repassword = true;
				}
			},
			getVerify() {
				let that = this;
				if(this.resetPassword.mobile.length==11) {
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
										that.verifyCountNum = 59;
									}
								}, 1000)
							}else{
								toastlxlchangepassword.show('今日验证码请求已上限');
							}

						})
				} else {
					that.tipMobileText = "手机号格式错误";
					this.tipList.mobile = true;
				}
			},
			goChangePassword() {
				let that = this;
				if(this.isLogBtnActive) {
					this.$http.post('/user/reSetPassword', that.resetPassword)
						.then((result) => {
							if(result.data.code === 1) {
								toastlxlchangepassword.show(result.data.info);
							} else if(result.data.code === 0) {
								toastlxlchangepassword.show(`<div class='toastlxl_icon'></div><p>修改成功</p>`);
								setTimeout(() => {
									that.$router.push({
										path: "/acount/login"
									})
								}, 2000)
							}
						});
				}
			},
		},
		watch: {
			resetPassword: {
				handler(curVal, oldVal) {
					if(curVal.password.length >= 6 && curVal.password.length <= 20) {
						this.tipList.password = false;
					}
					if(curVal.old_password.length >= 6 && curVal.old_password.length <= 20) {
						this.tipList.old_password = false;
					}
					if(curVal.verify_code.length == "4") {
						this.tipList.verify_code = false;
					}
					if(curVal.repassword == curVal.password) {
						this.tipList.repassword = false;
					}
					if(curVal.password.length >= 6 && curVal.password.length <= 20 && curVal.old_password.length >= 6 && curVal.old_password.length <= 20 && curVal.verify_code.length == "4" && curVal.repassword.length >= 6 && curVal.repassword == curVal.password) {
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
	.content2 .toastlxl {
		width: 40%;
		margin-left: -20%;
	}
	
	.inputBox .phoneNumber {
		float: left;
		width: 6.4rem;
		height: 1.066667rem;
		line-height: 1.066667rem;
		font-size: 0.373333rem;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}
</style>
