<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	export default {
		name: 'App',
		created() {
			this.init()
		},
		mounted() {
			this.$http.post('/user/invitationInfo', {}).then(res => {
				this.$store.state.dio = res.data.data
			})
		},
		methods: {
			init() {
				this.$http.post('/user/invitationInfo', {}).then(res => {
					this.$store.state.dio = res.data.data
					console.log(this.$store.state.dio)
				})
			}
		}
	}
</script>

<style>
	@import url("../static/css/common.css");
	@import url('assets/css/my_mint_draw.css');
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		font-family: PingFangSC-Regular;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		width: 100%;
		height: 100%;
	}
	
	.content {
		width: 100%;
		height: 100%;
		background: #F7F7F7;
		overflow: auto;
		padding-bottom: 30px;
	}
	
	.content1 {
		width: 100%;
		height: 100%;
		padding: 0px 0 120px 0;
		overflow: auto;
		position: relative;
		background: #F7F7F7;
	}
	
	.content2 {
		width: 100%;
		height: 100%;
		padding: 88px 0 30px 0;
		overflow: auto;
		position: relative;
		background: #F7F7F7;
	}
	
	body .v-modal {
		opacity: 0.4;
	}
	
	body .mint-msgbox {
		width: 600px;
		height: auto;
		background: rgba(255, 255, 255, 1);
		border-radius: 10px;
		overflow: hidden;
	}
	
	.mint-msgbox-message .confirm .confirmFir {
		margin-left: 30px;
	}
	
	.mint-msgbox-message .confirm .confirmSec {
		display: block;
		float: right;
		width: 68%;
		text-align: center;
	}
	
	.mint-msgbox-content .mint-msgbox-message .confirm {
		line-height: 120px;
	}
	
	body .mint-msgbox-message {
		height: auto;
		line-height: 200px;
		text-align: center;
		color: rgba(51, 51, 51, 1);
		font-size: 30px;
	}
	
	body .mint-msgbox-content {
		border-bottom: 1px solid rgba(239, 239, 239, 1);
		/*px*/
	}
	
	body .mint-msgbox-btns {
		height: 80px;
	}
	
	body .mint-msgbox-btn {
		font-size: 30px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	
	body .mint-msgbox-confirm {
		color: rgba(226, 104, 220, 1);
	}
	
	body .mint-msgbox-cancel {
		width: 50%;
		border-right: 1px solid rgba(239, 239, 239, 1);
		/*px*/
	}
	
	.mint-msgbox-title {
		font-size: 36px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 80px;
	}
	
	.mint-msgbox-input input {
		width: 480px;
		height: 60px;
		font-size: 30px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 32px;
		border-radius: 10px;
		border-color: rgba(153, 153, 153, 1);
		text-align: center;
		display: block;
		margin: 0 auto;
	}
	/*toast样式*/
	
	.toastlxl {
		display: none;
		padding: 16px 0;
		width: 34%;
		background: rgba(0, 0, 0, 0.4);
		line-height: 60px;
		position: fixed;
		top: 35%;
		left: 50%;
		margin-left: -17%;
		border-radius: 20px;
		color: #ffffff;
		font-size: 24px;
		text-align: center;
		z-index: 1000;
	}
	
	.toastlxl>span {
		display: block;
		width: 100%;
		height: auto;
	}
	
	.toastlxl>span .toastlxl_icon {
		background: url(../src/assets/img/base/toastlxl_icon.png);
		background-size: 100% 100%;
		width: 40px;
		height: 40px;
		margin: 0 auto;
	}
	/*分享页*/
	#shareimgbox{
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	
	#shareimgbox>canvas {
		width: 100% !important;
		height: 1200px !important;
		display: none;
		
	}
	#shareimgbox>img {
		width: 100% !important;
		height: 1200px !important;
		display: block;
		
	}
</style>