<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle" :isRightShow="headRightShow" :rightValue="headRightValue" @headRightClick="goLogin"></headerNav>
		<div class="inputBox firstInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_phone@2x.png" class="icon" />
				<input type="text" placeholder="请输入您的手机号" v-model="registerData.mobile" @blur="mobileBlur" />
			</div>
			<p v-show="tipList.mobile">{{tipMobileText}}</p>
		</div>
		<div class="inputBox verifyInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_captcha@2x.png" class="icon" />
				<input type="text" placeholder="请输入验证码" v-model="registerData.verify_code" @blur="verifyBlur" />
				<span class="verifyBtn" v-show="verifyBtnShow" @click="getVerify">获取验证码</span>
				<span class="verifyCount verifyBtn" v-show="!verifyBtnShow">{{verifyCountNum}} S</span>
			</div>
			<p v-show="tipList.verify_code">验证码格式错误</p>
		</div>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_password@2x.png" class="icon" />
				<input type="text" placeholder="请输入6-20位密码" v-model="registerData.password" @blur="passwordBlur" />
			</div>
			<p v-show="tipList.password">密码格式错误</p>
		</div>
		<div class="inputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_nickname@2x.png" class="icon" />
				<input type="text" placeholder="请输入昵称（8个字以内）" v-model="registerData.nickname" @blur="nicknameBlur" />
			</div>
			<p v-show="tipList.nickname">昵称格式错误</p>
		</div>
		<div class="inputBox lastInputBox">
			<div>
				<img src="../../assets/img/acount/reg_reg_invite@2x.png" class="icon" />
				<input type="text" placeholder="请输入邀请码（选填）" v-model="registerData.invitation_code" />
			</div>

		</div>
		<colorBtn :cBtnActive="isLogBtnActive" @cBtnTuch="goRegister" :cBtnValue="cBtnValue"></colorBtn>
		<div class="agreement">
			注册即表示您同意<span @click="goAgreement">《用户注册协议》</span>
		</div>
	</div>
</template>

<script>
	import "../../assets/css/acount.css"
	import HeaderNav from '../base/headerNav'
	import { Toast } from 'mint-ui'
	import ColorBtn from '../base/colorBtn'
	let base_url = ""
	export default {
		data() {
			return {
				pageTitle: "注册账号",
				headRightShow:true,
				headRightValue:"登录",
				tipMobileText: "手机号格式错误",
				verifyBtnShow: true,
				verifyCountNum: 59,
				registerData: {
					mobile: "",
					verify_code: "",
					password: "",
					nickname: "",
					invitation_code: "",
				},
				tipList: {
					mobile: false,
					password: false,
					verify_code: false,
					nickname: false,
				},
				isLogBtnActive: false,
				cBtnValue:"注册",
			}
		},
		components: {
			HeaderNav,ColorBtn
		},
		created() {
			base_url = this.$store.state.base_url;
		},
		methods: {
			mobileBlur() {
				let that = this;
				if(!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.registerData.mobile)) {
					that.tipMobileText = "手机号格式错误";
					this.tipList.mobile = true;
				} else {
					this.$http.post('/user/mobile_registered', {
								mobile: that.registerData.mobile
							})
						.then((result) => {
							if(result.data.code === 1) {
								that.tipMobileText = '该号码已被注册';
								that.tipList.mobile = true;
							} else if(result.data.code === 0) {
								that.tipList.mobile = false;
							}
						});
				}
			},
			passwordBlur() {
				if(this.registerData.password.length < 6 || this.registerData.password.length > 20) {
					this.tipList.password = true;
				}
			},
			verifyBlur() {
				if(this.registerData.verify_code.length != "4") {
					this.tipList.verify_code = true;
				}
			},
			nicknameBlur() {
				if(this.registerData.nickname.length > 8 || this.registerData.nickname.length <= 0) {
					this.tipList.nickname = true;
				}
			},
			getVerify() {
				let that = this;
				if(/^[1][3,4,5,7,8][0-9]{9}$/.test(this.registerData.mobile)) {
					this.$http.post('/user/sendCode', {
							mobile: that.registerData.mobile
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
			goRegister() {
				let that = this
				if(this.isLogBtnActive) {
					this.$http.post('/user/register', that.registerData)
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

			},
			goAgreement() {
				this.$router.push({
					path:"/acount/agreement"
				})
			},
			goLogin(){
				this.$router.push({
					path:"/acount/login"
				})
			}
		},
		watch: {
			registerData: {
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
					if(curVal.nickname.length > 0 && curVal.nickname.length <= 8) {
						this.tipList.nickname = false;
					}
					if(/^[1][3,4,5,7,8][0-9]{9}$/.test(curVal.mobile) && curVal.password.length >= 6 && curVal.verify_code.length == "4" && curVal.nickname.length > 0 && curVal.nickname.length <= 8) {
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
	.agreement {
		width: 100%;
		height: 88px;
		line-height: 88px;
		font-size: 28px;
		
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}
	.agreement span{
		color:rgba(226,104,220,1);
	}
</style>