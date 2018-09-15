<template>
	<div class="content1 labContent">
		<div class="swiper-container banner">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in bannerList">
					<!--<p>{{index}}</p>-->
					<img :src="item.img_url" />
				</div>
			</div>
			<!-- 如果需要分页器 -->
			<div class="swiper-pagination"></div>
		</div>

		<div class="content-main">
			<div class="borderDIv"></div>

			<div class="gameBox">
				<div class="content-title">
					游戏
					<span @clic="moreGame" v-if="gameList.length>3" class="moreGame">更多</span>
				</div>
				<ul class="gameList">
					<li v-for="(item,index) in gameList" @click="goGame(item.game_url,item.id)">
						<img :src="item.game_icon" />
					</li>
				</ul>
			</div>

			<div class="taskDayBox">
				<div class="content-title">
					每日任务
				</div>
				<ul class="taskLi">
					<li @click="goSign">
						<img src="../../assets/img/lab/laboratory_icon_signin.png" />
						<b>每日签到</b>
						<span v-if="!signed">算力+{{ login_power }}</span>
						<span v-if="signed">已完成</span>
					</li>
				</ul>
			</div>
			<div class="taskMustBox">
				<div class="content-title">
					必做任务
				</div>
				<ul class="taskLi">
					<li @click="goShare">
						<img src="../../assets/img/lab/laboratory_icon_signin.png" />
						<b>邀请好友</b>
						<span>算力+{{ invitation_power }} DIO+{{ invitation_coin_count }}</span>
					</li>
				</ul>
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
		<div id="toastlxl" class="toastlxl"></div>
	</div>
</template>
<script>
	import FooterNav from '../base/footerNav'
	import { Prevent } from '../../../static/js/pervent.js'
	import Swiper from 'swiper';
	import 'swiper/dist/css/swiper.min.css';
	import Vue from 'vue'
	import { Toastlxl } from "../../../static/js/toastlxl.js"
	let gameURL = "";
	let localStorage = window.localStorage;
	export default {
		data() {
			return {
				footerNav: ["", "active", ""],
				bannerList: [],
				gameList: [],
				signed: false,
				login_power: '1',
				invitation_power: '5',
				invitation_coin_count: '55'
			}
		},
		components: {
			FooterNav,
			Swiper
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				Prevent.init();
				let that = this;
				/*banner图*/
				this.$http.post('/web/get_banner').then(res => {
					if(res.data.code == "0") {
						that.bannerList = res.data.data;
						setTimeout(() => {
							let mySwiper = new Swiper('.swiper-container', {
								autoplay: {
									delay: 3000,
									stopOnLastSlide: false,
									disableOnInteraction: true,
								},
								loop: true,
								// 如果需要分页器
								pagination: {
									el: '.swiper-pagination',
								},
							})
						}, 200)
					}
				})
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
						if(res.data.data.conf) {
							that.login_power = res.data.data.conf.login_power
							that.invitation_power = res.data.data.conf.invitation_power
							that.invitation_coin_count = res.data.data.conf.invitation_coin_count
						}
					}
				})
			},
			goGame(game_url, game_id) {
				window.open(`${game_url}?token=${localStorage.jiazhuoToken}&nickname=${encodeURI(encodeURI(localStorage.nickname))}&head_pic=${localStorage.head_pic === 'null' ? '' : localStorage.head_pic}&game_id=${game_id}`);
			},
			moreGame() {
				this.$router.push('/lab/gameList')
			},
			goSign() {
				let that = this;
				if(!this.signed) {
					this.$http.post('/power/receive_power').then(res => {
						if(res.data.code == "0") {
							that.signed = true;
						}
					})
				}
			},
			goShare() {
				this.$router.push({
					path: "/index/share"
				})
			}
		}
	}
</script>

<style>
	body .labContent {
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
	
	#app .labContent .swiper-container .swiper-pagination {
		bottom: 50px;
	}
	
	.banner .swiper-pagination-bullet {
		width: 10px;
		height: 4px;
		background: #E975F1;
		border-radius: 0;
		opacity: 0.6;
	}
	
	.banner .swiper-pagination-bullet-active {
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
	
	.borderDIv {
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
		border-radius: 20px;
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
