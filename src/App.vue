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
		name: 'App'
	}
</script>

<style>
	@import url("../static/css/common.css");
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
	}
	
	.content1 {
		width: 100%;
		height: 100%;
		padding: 0px 0 99px 0;
		overflow: auto;
		position: relative;
		background: #F7F7F7;
	}
	
	.content2 {
		width: 100%;
		height: 100%;
		padding: 88px 0 0 0;
		overflow: auto;
		position: relative;
		background: #F7F7F7;
	}
	
	.toastName .mint-toast-text {
		font-size: 26px;
		line-height: 40px;
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
	
</style>