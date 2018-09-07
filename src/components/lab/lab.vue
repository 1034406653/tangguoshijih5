<template>
	<div class="content1 labContent">
		<div class="banner">
			<mt-swipe :auto="5000" :prevent='true'>
			  <mt-swipe-item><img src="../../assets/img/lab/laboratory_pic_banner@2x.png" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/lab/2@2x.png" /></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/lab/3@2x.png" /></mt-swipe-item>
			</mt-swipe>	
		</div>
		<div class="content-main">
			<div class="borderDIv"></div>
			<div class="gameBox">
				<div class="content-title">
					游戏
					<span @clic="moreGame" v-if="gameList.length>3" class="moreGame">更多</span>
				</div>
				<ul class="gameList">
					<li v-for="item in gameList" @touchend="goGame(item.game_url,item.id)">
						<img :src="item.game_icon" />
					</li>
				</ul>
			</div>
			<div class="taskDayBox">
				<div class="content-title">
					每日任务
				</div>
				<ul class="taskLi">
					<li @touchend="goSign">
						<img src="../../assets/img/lab/laboratory_icon_signin.png" />
						<b>每日签到</b>
						<span v-if="!signed">算力+1</span>
						<span v-if="signed">已完成</span>
					</li>
				</ul>
			</div>
			<div class="taskMustBox">
				<div class="content-title">
					必做任务
				</div>
				<ul class="taskLi">
					<li @touchend="goShare">
						<img src="../../assets/img/lab/laboratory_icon_signin.png" />
						<b>邀请好友</b>
						<span>算力+5 DIO+50</span>
					</li>
				</ul>
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '../base/footerNav'
	import { Swipe, SwipeItem } from 'mint-ui';
	import Vue from 'vue'
	let gameURL = "";
	let localStorage = window.localStorage;
	export default {
		data() {
			return {
				footerNav: ["", "active", ""],
				gameList: [],
				signed: false,
			}
		},
		components: {
			FooterNav,Swipe,SwipeItem
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				let that = this;
				this.$http.post('/power/get_power').then(res => {
					if(res.data.code == "0") {
						res.data.data.game.forEach((x, i) => {
							if(i < 3) {
								that.gameList[i] = x;
								Vue.set(that.gameList, i, x);
							}
						})
						if(res.data.data.login_power) {
							that.signed = true
						} else {
							that.signed = false;
						}
					}
				})
			},
			goGame(game_url, game_id) {
				window.open(`${game_url}?token=${localStorage.jiazhuoToken}&nickname=${encodeURI(encodeURI(localStorage.nickname))}&head_pic=${localStorage.head_pic === 'null' ? '' : localStorage.head_pic}&game_id=${game_id}`);
			},
			moreGame() {
				let that = this;
				this.$http.post('/power/get_power').then(res => {
					if(res.data.code == "0") {
						that.gameList = res.data.data.game;
					}
				})
			},
			goSign() {
				console.log("");
				let that=this;
				if(!this.signed) {
					this.$http.post('/power/receive_power').then(res => {
						if(res.data.code == "0") {
							that.signed = true;
						}
					})
				}
			},
			goShare(){
				this.$router.push({
					path:"/index/share"
				})
			}
		}
	}
</script>

<style>
	.labContent{
		background: rgba(255, 255, 255, 1);
	}
	.labContent .banner {
		width: 100%;
		height: 450px;
		overflow: hidden;
	}
	
	.labContent .banner img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	.labContent .mint-swipe-indicators{
		bottom: 50px;
	}
	.labContent .mint-swipe-indicator{
		width: 10px;
		height: 4px;
		background: #E975F1;
		border-radius: 0;
		opacity: 0.6;
	}
	.labContent .mint-swipe-indicators .is-active{
		width: 30px;
		background: #E975F1;
	}
	.labContent .content-main {
		text-align: left;
		position: relative;
		padding-bottom: 10px;
		padding-top: 20px;
		z-index: 10;
		background: rgba(255, 255, 255, 1);
		
	}
	.borderDIv{
		width: 100%;
		height: 40px;
		border-radius: 20px 20px 0 0;
		background: rgba(255, 255, 255, 1);
		position: absolute;
		top: -20px;
		left: 0;
	}
	.gameBox,
	.taskMustBox,
	.taskDayBox {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 30px;
	}
	
	.content-title {
		width: 100%;
		height: 80px;
		font-size: 40px;
		line-height: 80px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		padding: 0 40px;
	}
	
	.moreGame {
		float: right;
		font-size: 30px;
		padding: 0 20px;
	}
	
	.gameList {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.gameList li {
		float: left;
		width: 160px;
		height: 160px;
		border-radius: 20px 20px 20px 30px;
		margin: 20px 42px;
	}
	
	.gameList li img {
		width: 100%;
		height: 100%;
		border-radius: 20px 20px 20px 30px;
		display: block;
	}
	
	.taskLi {
		width: 100%;
		height: auto;
		padding: 0 40px;
		overflow: hidden;
	}
	
	.taskLi li {
		width: 100%;
		height: 80px;
		line-height: 80px;
		color: rgba(51, 51, 51, 1);
		border-bottom: 1px solid rgba(239, 239, 239, 1);
		/*px*/
		font-family: PingFang-SC-Medium;
	}
	
	.taskLi li:last-child {
		border: none;
	}
	
	.taskLi li img {
		width: 36px;
		height: 36px;
		float: left;
		margin: 25px 24px 0 0;
	}
	
	.taskLi li b {
		float: left;
		width: auto;
		font-size: 28px;
		color: rgba(51, 51, 51, 1);
	}
	
	.taskLi li span {
		float: right;
		width: auto;
		font-size: 24px;
		color: rgba(153, 153, 153, 1);
	}
</style>