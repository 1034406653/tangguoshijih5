<template>
	<div class="content1">
		<div class="user-name">
			<img src="../../../build/logo.png" alt="用户头像" />
			<div>黑化肥黑化肥黑化</div>
		</div>
		<div class="nav-box">
			<div class="text">
				<span>邀请好友</span>
				<span>邀请好友即可+55DIO，+5算力</span>
			</div>
			<img src="../../../build/logo.png" />
		</div>
		<div class="nav-box">
			<div class="text">
				糖果盒子
			</div>
			<img src="../../../build/logo.png" />
		</div>
		<div class="account-box">
			<div class="title">
				我的信息
			</div>
			<div class="account-li">
				<img src="../../../build/logo.png" />
				<span>当前账户</span>
				<b>13781868557</b>
			</div>
			<div class="account-li">
				<img src="../../../build/logo.png" />
				<span>修改密码</span>
				<img src="../../../build/logo.png"  class="nextGo" />
			</div>
			<div class="account-li" @click="goSet">
				<img src="../../../build/logo.png"/>
				<span>设置</span>
				<img src="../../../build/logo.png" class="nextGo" />
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
		}
	}
</script>

<style>
	.content1 {
		background: #5A5A5A;
	}
	
	.user-name {
		width: 100%;
		height: 150px;
		margin-top: 90px;
		padding-left: 40px;
		margin-bottom: 80px;
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
		height: 160px;
		background: linear-gradient(140deg, rgba(229, 118, 236, 1), rgba(116, 65, 163, 1));
		opacity: 0.8;
		margin: 0 auto;
		margin-bottom: 40px;
		padding-left: 50px;
		position: relative;
	}
	
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
	}
	
	.account-box {
		width: 670px;
		height: 381px;
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