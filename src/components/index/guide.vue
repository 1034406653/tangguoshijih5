<template>
	<div class="content1">
		<img src="../../assets/img/index/home_pic_avatar.png" class="user" />
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" @touchend="goFeedback" />
		<div class="dio">
			<div @touchend="goLogin">
				<img src="../../assets/img/index/home_icon_dio.png" class="dioIcon" />
				<span class="dioText">未登录</span>
			</div>
			<div @touchend="goLogin">
				<img src="../../assets/img/index/home_icon_hashrate.png" class="energyIcon" />
				<span class="energyText">未登录</span>
			</div>
		</div>
		<div class="energy" @touchend="goLogin">
			<img src="../../assets/img/index/home_icon_promote.png" />
			<span>提升算力</span>
		</div>
		<div class="share" @touchend="goLogin">
			<img src="../../assets/img/index/home_iocn_invitation.png" />
			<span>邀请好友</span>
		</div>
		<div class="candyList2" @touchend="goLogin">
			<div class="guide-step1">
				<div class="candyBox">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>登录后查看</p>
				</div>
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
		<div class="coverBg" v-if="step3BOX || step2BOX || step1BOX"></div>
		<div class="guide1" v-if="step1BOX" @touchend="onStep1">
			<div class="cover-circle1"></div>
			<img src="../../assets/img/index/guide-step1@2x.png" />
			<div class="guide-step1-text">
				<span>收取DIO，玩游戏，拿糖果</span>
				<b>下一步</b>
			</div>
		</div>
		<div class="guide2" v-if="step2BOX" @touchend="onStep2">
			<div class="cover-circle2"></div>
			<img src="../../assets/img/index/guide2-step2.png" class="guide2-step2" />
			<div class="guide2-step2-text">
				<span>算力越高，产生的DIO越高</span>
				<b>下一步</b>
			</div>
		</div>
		<div class="guide3" v-if="step3BOX" @touchend="onStep3">
			<img src="../../assets/img/index/guide3-bg3.png" class="guide3-bg3" />
			<img src="../../assets/img/index/guide3-step3.png" class="guide3-step3" />
			<div class="guide-step3-text">
				<span>更多糖果游戏，尽在实验室</span>
				<b>知道啦</b>
			</div>
		</div>
	</div>
</template>
<script>
	import '../../assets/css/index.css'
	import FooterNav from '../base/footerNav'
	let arr = new Set([]);
	export default {
		data() {
			return {
				head_pic: require('../../assets/img/index/home_pic_avatar.png'),
				footerNav: ["active", "", ""],
				step3BOX: false,
				step1BOX: true,
				step2BOX: false,
			}
		},
		components: {
			FooterNav,
		},

		methods: {
			onStep1() {
				this.step1BOX = false;
				this.step2BOX = true;
			},
			onStep2() {
				this.step2BOX = false;
				this.step3BOX = true;
			},
			onStep3() {
				this.step3BOX = false;
				window.localStorage.setItem('guideActive','completed')
			},
			goLogin() {
				this.$router.push({
					path: "/acount/login"
				})
			},
			goFeedback() {
				this.$router.push({
					path: "/center/feedback"
				})
			},
		}
	}
</script>
<style scoped>
	.coverBg {
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		opacity: 0.5;
		background: #000000;
		z-index: 10000;
	}
	
	.guide1 {
		position: absolute;
		left: 50%;
		top: 200px;
		width: 460px;
		height: 300px;
		margin-left: -230px;
		z-index: 10001;
	}
	
	.guide1 .cover-circle1 {
		position: absolute;
		width: 154px;
		height: 144px;
		background: url(../../assets/img/index/guide1-bg1.png);
		background-size: 100% 100%;
		left: 50%;
		margin-left: -80px;
		top: 10px;
	}
	
	.guide1>img {
		width: 42px;
		height: 50px;
		position: absolute;
		left: 50%;
		margin-left: -21px;
		top: 170px;
	}
	
	.guide1 .guide-step1-text {
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		left: 50%;
		margin-left: -230px;
		top: 240px;
		color: white;
		line-height: 44px;
		font-size: 24px;
	}
	
	.guide1 .guide-step1-text b {
		font-weight: normal;
		color: red;
		padding: 0 0 0 20px;
		color: #E268DC;
	}
	
	.guide-step1 .candyBox {
		width: 200px;
		position: absolute;
		left: 50%;
		margin-left: -100px;
		top: 200px;
	}
	
	.guide2 {
		position: absolute;
		right: 0;
		top: 103px;
		width: 630px;
		height: 200px;
		z-index: 10001;
	}
	
	.guide2 .cover-circle2 {
		width: 122px;
		height: 134px;
		background: url(../../assets/img/index/guide2-bg2.png);
		background-size: 100% 100%;
		position: absolute;
		right: 34px;
		top: 0;
	}
	
	.guide2 .guide2-step2 {
		width: 50px;
		height: 42px;
		position: absolute;
		right: 160px;
		top: 38px;
	}
	
	.guide2 .guide2-step2-text {
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		left: 0;
		top: 96px;
		color: white;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
	}
	
	.guide2 .guide2-step2-text b {
		font-weight: normal;
		color: red;
		padding: 0 0 0 20px;
		color: #E268DC;
	}
	
	.guide2-step2-text span {
		display: inline-block;
	}
	
	.guide3 {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 500px;
		height: 400px;
		margin-left: -250px;
	}
	
	.guide3 {
		position: absolute;
		left: 50%;
		bottom: 0;
		width: 500px;
		height: 400px;
		margin-left: -250px;
		z-index: 10001;
	}
	
	.guide3-bg3 {
		position: absolute;
		bottom: 4px;
		left: 50%;
		width: 106px;
		height: 102px;
		margin-left: -53px;
	}
	
	.guide3-step3 {
		width: 42px;
		height: 50px;
		position: absolute;
		left: 50%;
		margin-left: -21px;
		bottom: 110px;
	}
	
	.guide-step3-text {
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		bottom: 200px;
		color: white;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
	}
	
	.guide-step3-text b {
		font-weight: normal;
		color: red;
		padding: 0 0 0 20px;
		color: #E268DC;
	}
</style>
