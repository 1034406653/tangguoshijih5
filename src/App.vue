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
</style>