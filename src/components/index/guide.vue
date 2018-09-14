<template>
	<div class="content1">
		<img src="../../assets/img/index/home_pic_avatar.png" class="user" />
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" />
		<div class="dio">
			<div>
				<img src="../../assets/img/index/home_icon_dio.png" class="dioIcon" />
				<span class="dioText">未登录</span>
			</div>
			<div>
				<img src="../../assets/img/index/home_icon_hashrate.png" class="energyIcon" />
				<span class="energyText">未登录</span>
			</div>
		</div>
		<div class="energy guide2" :style="zindexActive2" @click="goStep3">
			<img src="../../assets/img/index/home_icon_promote.png" />
			<span>提升算力</span>
			<div class="cover-circle2" v-if="step2Show"></div>
			<img src="../../assets/img/index/guide2-step2.png" class="guide2-step2" v-if="step2Show" />
			<div class="guide2-step2-text" v-if="step2Show">
				<span>算力越高，产生的DIO越高</span>
				<b>下一步</b>
			</div>
		</div>
		<div class="guide3" :style="zindexActive3" @click="goLogin">
			<img src="../../assets/img/index/guide3-bg3.png" class="guide3-bg3" />
			<img src="../../assets/img/index/guide3-step3.png" class="guide3-step3" />
			<div class="guide-step3-text" v-if="step3Show">
				<span>更多糖果游戏，尽在实验室</span>
				<b>知道啦</b>
			</div>
		</div>
		<div class="share">
			<img src="../../assets/img/index/home_iocn_invitation.png" />
			<span>邀请好友</span>
			
		</div>

		<div class="candyList2 guide1" :style="zindexActive1">
			<div class="guide-step1" @click="goStep2">
				<div class="candyBox">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>正在生成中</p>
					<div class="cover-circle" v-if="step1Show"></div>
				</div>
				<img src="../../assets/img/index/guide-step1@2x.png" v-if="step1Show" />
				<div class="guide-step1-text" v-if="step1Show">
					<span>收取DIO，玩游戏，拿糖果</span>
					<b>下一步</b>
				</div>
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
		<div class="coverBg"></div>
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
				zindexActive1: 'z-index:10001;',
				step1Show: true,
				zindexActive2: '',
				step2Show: false,
				zindexActive3: '',
				step3Show: false,
			}
		},
		components: {
			FooterNav,
		},

		methods: {
			goStep2() {
				this.step1Show = false;
				this.zindexActive1 = '';
				this.step2Show = true;
				this.zindexActive2 = 'z-index:10001;';
			},
			goStep3() {
				this.step2Show = false;
				this.zindexActive2 = '';
				this.step3Show = true;
				this.zindexActive3 = 'z-index:10001;';
			},
			goLogin() {
				this.step3Show = false;
				this.zindexActive3 = '';
				window.localStorage.setItem('guideActive',"completed")
				this.$router.push({
					path:"/index/index"
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
	
	.guide-step1 .candyBox {
		width: 200px;
		position: absolute;
		left: 50%;
		margin-left: -100px;
		top: 200px;
	}
	
	.guide-step1 .candyBox .cover-circle {
		position: absolute;
		width: 154px;
		height: 144px;
		background: url(../../assets/img/index/guide1-bg1.png);
		background-size: 100% 100%;
		left: 50%;
		margin-left: -80px;
		top: -20px;
	}
	.guide-step1>img {
		width: 42px;
		height: 50px;
		position: absolute;
		left: 50%;
		margin-left: -21px;
		top: 370px;
	}
	
	.guide-step1 .guide-step1-text {
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		left: 50%;
		margin-left: -230px;
		top: 440px;
		color: white;
		line-height: 44px;
		font-size: 24px;
	}
	
	.guide-step1 .guide-step1-text b {
		font-weight: normal;
		color: red;
		padding: 0 0 0 20px;
		color: #E268DC;
	}
	
	.cover-circle2 {
		width: 122px;
		height: 134px;
		background: url(../../assets/img/index/guide2-bg2.png);
		background-size: 100% 100%;
		position: absolute;
		left: -16px;
		top: -36px;
	}
	
	.guide2-step2 {
		width: 50px;
		height: 42px;
		position: absolute;
		left: -88px;
		top: 4px;
	}
	
	.guide2-step2-text {
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		left: -490px;
		top: 60px;
		color: white;
		line-height: 44px;
		font-size: 24px;
		text-align: center;
	}
	
	.guide2-step2-text b {
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
	.guide-step3-text{
		position: absolute;
		width: 460px;
		height: 44px;
		background: url(../../assets/img/index/guide1-border.png);
		background-size: 100% 100%;
		/*px*/
		border-radius: 10px;
		bottom:200px;
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