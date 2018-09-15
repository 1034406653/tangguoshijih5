<template>
	<div class="content1">
		<div class="user-name">
			<img :src="head_pic" alt="用户头像" />
			<input class="headInput" ref="inputer" type="file" accept="image/png, image/gif, image/jpg, image/jpeg" @change="handleFileChange($event)" />
			<div @click="changeNickname">{{nickname}}</div>
		</div>
		<div class="nav-box" @touchend="goShare">
			<img src="../../assets/img/center/me_pic_banner1.png" />
		</div>
		<div class="nav-box" @touchend="goCandybox">
			<img src="../../assets/img/center/me_pic_banner2.png" />
		</div>
		<div class="account-box">
			<div class="title">
				我的信息
			</div>
			<div class="account-li">
				<img src="../../assets/img/center/me_icon_account@2x.png" />
				<span>当前账户</span>
				<b>{{mobile}}</b>
			</div>
			<div class="account-li" @touchend="goRealName">
				<img src="../../assets/img/center/realNameTest@2x.png" />
				<span>实名认证</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" class="nextGo" v-if="!authenticated" />
				<b v-if="authenticated" class="authenticatedText">已认证</b>
			</div>
			<div class="account-li" @touchend="goDraw">
				<img src="../../assets/img/center/me_icon_adress@2x.png" />
				<span>提币地址</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" class="nextGo" />
			</div>
			<div class="account-li" @touchend="goChangePassword">
				<img src="../../assets/img/center/me_icon_modify@2x.png" />
				<span>修改密码</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" class="nextGo" />
			</div>
			<div class="account-li" @touchend="goSet">
				<img src="../../assets/img/center/me_icon_setup@2x.png" />
				<span>设置</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" class="nextGo" />
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
		<div id="toastlxl" class="toastlxl"></div>
	</div>
</template>

<script>
	import { Prevent } from '../../../static/js/pervent.js'
	import FooterNav from '../base/footerNav'
	import { MessageBox } from 'mint-ui';
	import { Toastlxl } from "../../../static/js/toastlxl.js"
	var showModal = '';
	export default {
		data() {
			return {
				footerNav: ["", "", "active"],
				head_pic: require("../../assets/img/index/home_pic_avatar.png"),
				nickname: "",
				mobile: "",
				authenticated:false,
			}
		},
		components: {
			FooterNav,
		},
		created() {
			this.init();
		},
		mounted() {
			showModal = new Toastlxl('toastlxl');
			Prevent.flag = false
			Prevent.init()
		},
		beforeDestroy() {
			Prevent.flag = true
			Prevent.init()
		},
		methods: {
			init() {
				let that=this;
				if(window.localStorage.getItem('head_pic')) {
					this.head_pic = window.localStorage.getItem('head_pic');
				}
				this.nickname = window.localStorage.getItem('nickname') || "";
				this.mobile = window.localStorage.getItem('mobile') || "";
				this.$http.post('user/get_realauth').then((res)=>{
					if(res.data.code==0){
						that.authenticated=true;
					}
				})
			},
			handleFileChange(event) {
				let that = this;
				let imgFile = event.currentTarget.files[0];
				if(/image\/\w+/.test(imgFile.type)) {
					let reader = new FileReader();
					reader.readAsDataURL(imgFile);
					reader.onload = function(e) {
						let base64 = this.result;
						that.head_pic = this.result;
					}
					let file = event.currentTarget.files[0];
					let param = new FormData() // 创建form对象
					param.append('image', file, file.name) // 通过append向form对象添加数据
					param.append('token', window.localStorage.getItem('jiazhuoToken')) // 添加form表单中其他数据
					let config = {
						headers: {
							'Content-Type': 'multipart/form-data'
						}
					}
					// 添加请求头
					this.$http.post('https://a.hzjiazhuo.com/api//upload/upload_img', param, config)
						.then(res => {
							if(res.data.code == '0') {
								that.$http.post('/user/updateUserinfo', {
									head_pic: res.data.data
								}).then(result => {
									if(result.data.code == '0') {
										window.localStorage.setItem('head_pic', res.data.data);
										showModal.show(`<div class='toastlxl_icon'></div><p>修改成功</p>`);
									} else {
										showModal.show(result.data.info);
									}
								})
								window.localStorage.setItem('head_pic', res.data.data);
							}
					})
				}
			},
			changeNickname() {
				let that = this;
				MessageBox.prompt(' ', '修改昵称', {
					inputPlaceholder: that.nickname
				}).then(({
					value,
					action
				}) => {
					if(action == 'confirm') {
						that.$http.post('/user/updateUserinfo', {
							nickname: value
						}).then(res => {
							if(res.data.code == '0') {
								that.nickname = value;
								window.localStorage.setItem('nickname', value);
								showModal.show(`<div class='toastlxl_icon'></div><p>修改成功</p>`);
							} else {
								showModal.show(res.data.info);
							}
						})
					}
				}).catch(err => {
				});
			},
			goSet() {
				this.$router.push({
					path: "/center/set"
				})
			},
			goShare() {
				this.$router.push({
					path: "/index/share"
				})
			},
			goRealName() {
				this.$router.push({
					path: "/center/realNameTest"
				})
			},
			goDraw() {
				this.$router.push({
					path: "/center/draw"
				})
			},
			goChangePassword() {
				this.$router.push({
					path: "/acount/changePassword"
				})
			},
			goCandybox() {
				this.$router.push({
					path: "/center/candyBox"
				})
			},
		}
	}
</script>

<style scoped>
	.mint-msgbox-header {
		padding-top: 40px;
	}
	
	.mint-msgbox-title {
		width: 100%;
		height: 34px;
		font-size: 36px;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 32px;
	}
	
	.mint-msgbox-input {
		width: 480px;
		height: auto;
		margin: 0 auto;
		overflow: hidden;
		padding: 29px 0 30px 0;
	}
	
	.mint-msgbox-input input {
		width: 100%;
		height: 60px;
		border: 1px solid rgba(153, 153, 153, 1);
		/*px*/
		border-radius: 10px;
		font-size: 30px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 60px;
		text-align: center;
	}
	
	.content1 {
		background: url(../../assets/img/index/me_pic_background.png);
		background-size: 100% 100%;
	}
	
	.user-name {
		width: 670px;
		height: 150px;
		margin: 0 auto;
		margin-top: 60px;
		margin-bottom: 50px;
		position: relative;
	}
	
	.user-name img {
		float: left;
		width: 150px;
		height: 150px;
		margin-right: 52px;
		border-radius: 50%;
	}
	
	.headInput {
		position: absolute;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		left: 0;
		top: 0;
		background: #000066;
		line-height: 150px;
		font-size: 50px;
		overflow: hidden;
		opacity: 0;
	}
	
	.user-name div {
		float: left;
		width: auto;
		height: 150px;
		line-height: 150px;
		max-width: 400px;
		font-size: 40px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
	}
	
	.nav-box {
		width: 670px;
		height: 180px;
		margin: 0 auto;
		margin-bottom: 40px;
		position: relative;
	}
	
	.nav-box>img {
		width: 100%;
		height: 100%;
	}
	
	.account-box {
		width: 670px;
		height: auto;
		background: rgba(255, 255, 255, 1);
		border-radius: 20px;
		margin: 0 auto;
		overflow: hidden;
		text-align: left;
		padding: 0 40px;
	}
	
	.account-box .title {
		width: 100%;
		height: auto;
		font-size: 40px;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		line-height: 40px;
		padding: 30px 0 20px 0;
	}
	
	.account-box .account-li {
		width: 100%;
		height: 90px;
		overflow: hidden;
	}
	
	.account-box .account-li img {
		width: 36px;
		height: 36px;
		float: left;
		margin-right: 16px;
		margin-top: 27px;
	}
	
	.account-box .account-li span {
		float: left;
		width: auto;
		height: 100%;
		line-height: 90px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		color: rgba(51, 51, 51, 1);
	}
	
	.account-box .account-li span {
		float: left;
		width: auto;
		height: 100%;
		line-height: 90px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		color: rgba(51, 51, 51, 1);
	}
	
	.account-box .account-li b {
		float: right;
		width: auto;
		height: 90px;
		line-height: 90px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		color: rgba(51, 51, 51, 1);
		font-weight: normal;
	}
	
	.account-box .account-li .nextGo {
		float: right;
		width: 10px;
		height: 20px;
		margin-top: 35px;
		margin-right: 10px;
	}
</style>