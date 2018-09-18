<template>
	<div id="header">
		<img src="../../assets/img/base/navigation_nav_back@2x.png" class="back" @touchend="goBack" v-show="goBackShow" />
		<div class="title">{{pageTitle}}</div>
		<span v-if="isRightShow" :style="rightColor" class="rightBtn" @click="navTo">{{rightValue}}</span>
	</div>
</template>

<script>
	export default {
		props: {
			pageTitle: {
				type: String,
				default: "title"
			},
			goBackShow: {
				type: Boolean,
				default: true
			},
			isRightShow: {
				type: Boolean,
				default: false
			},
			rightColor: {
				type: String,
				default: ''
			},
			rightValue: {
				type: String,
				default: ''
			},
		},
		data() {
			return {

			}
		},
		methods: {
			goBack() {
				this.$router.back(-1);
			},
			navTo(){
				this.$emit('headRightClick');
			}
		}
	}
</script>

<style scoped="">
	#header {
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
	
	#header .back {
		width: 62px;
		height: 42px;
		position: absolute;
		left: 20px;
		top: 23px;
		padding-left: 20px;
	}
	
	#header .title {
		margin: 0 auto;
		width: 50%;
		height: 88px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 30px;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	
	#header .rightBtn {
		position: absolute;
		display: block;
		width: auto;
		right: 46px;
		line-height: 40px;
		top: 24px;
		height: 40px;
		font-size: 28px;
		font-weight: 400;
		color: rgba(102, 102, 102, 1);
	}
</style>
