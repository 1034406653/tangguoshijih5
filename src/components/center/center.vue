<template>
	<div class="content1">
		<div class="user-name">
			<img src="../../assets/img/index/home_pic_avatar.png" alt="用户头像" />
			<div>黑化肥黑化肥黑化</div>
		</div>
		<div class="nav-box" @click="goShare">
			<img src="../../assets/img/center/me_pic_banner1.png"/>
		</div>
		<div class="nav-box" @click="goCandybox">
			<img src="../../assets/img/center/me_pic_banner2.png"/>
		</div>
		<div class="account-box">
			<div class="title">
				我的信息
			</div>
			<div class="account-li">
				<img src="../../assets/img/center/me_icon_account@2x.png" />
				<span>当前账户</span>
				<b>13781868557</b>
			</div>
			<div class="account-li">
				<img src="../../assets/img/center/me_icon_adress@2x.png" />
				<span>提币地址</span>
				<img src="../../assets/img/center/me_icon_right@2x.png"  class="nextGo" />
			</div>
			<div class="account-li" >
				<img src="../../assets/img/center/me_icon_modify@2x.png" />
				<span>修改密码</span>
				<img src="../../assets/img/center/me_icon_right@2x.png"  class="nextGo" />
			</div>
			<div class="account-li" @click="goSet">
				<img src="../../assets/img/center/me_icon_setup@2x.png"/>
				<span>设置</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" class="nextGo" />
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '../base/footerNav'
	export default {
		data() {
			return {
				footerNav: ["", "", "active"]
			}
		},
		components: {
			FooterNav,
		},
		methods:{
			goSet(){
				this.$router.push({
					path:"/center/set"
				})
			},
			goShare(){
				this.$router.push({
					path:"/index/share"
				})
			},
			goCandybox(){
				this.$router.push({
					path:"/center/candyBox"
				})
			}
		}
	}
</script>

<style>
	.content1 {
		background: url(../../assets/img/index/me_pic_background.png);
		background-size: 100% 100%;
	}
	
	.user-name {
		width: 100%;
		height: 150px;
		margin-top: 60px;
		padding-left: 40px;
		margin-bottom: 50px;
	}
	
	.user-name img {
		float: left;
		width: 150px;
		height: 150px;
		margin-right: 52px;
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
	.nav-box>img{
		width: 100%;
		height: 100%;
	}
/*	/*
	.nav-box .text {
		display: block;
		width: auto;
		padding-top: 30px;
		padding-bottom: 30px;
		font-size: 48px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 48px;
		text-align: left;
	}
	
	.nav-box .text span:first-child {
		display: block;
		width: auto;
		padding-bottom: 30px;
		height: 78px;
	}
	
	.nav-box .text span:last-child {
		display: block;
		width: auto;
		height: 24px;
		font-size: 24px;
		font-weight: 500;
		line-height: 24px;
	}
	
	.nav-box img {
		display: block;
		width: 80px;
		height: 80px;
		position: absolute;
		right: 100px;
		top: 40px;
	}*/
	
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