<template>
	<div class="content1" onclick="return false">
		<img :src="head_pic" class="user" />
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" @touchend="goFeedback" />
		<div class="dio">
			<div @touchend="goDio">
				<img src="../../assets/img/index/home_icon_dio.png" class="dioIcon" />
				<span class="dioText">DIO {{dioNum}}</span>
			</div>
			<div @touchend="goEnergyRecode">
				<img src="../../assets/img/index/home_icon_hashrate.png" class="energyIcon" />
				<span class="energyText">算力 {{energyNum}}</span>
			</div>
		</div>
		<div class="energy" @touchend="goLab">
			<img src="../../assets/img/index/home_icon_promote.png" />
			<span>提升算力</span>
		</div>
		<div class="share" @touchend="goShare">
			<img src="../../assets/img/index/home_iocn_invitation.png" />
			<span>邀请好友</span>
		</div>
		<div class="plant" onclick="return false"></div>
		<ul class="candyList">
			<li :class="item.className" v-for="(item,index) in candyList" @touchend="delCanday(index,item.id,item.candy_count)">
				<div class="candyBox" :style="item.transform">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>{{item.candy_count}}</p>
				</div>
			</li>
		</ul>
		<ul class="candyList" v-if="candyList.length<1">
			<li :class="item.className" v-for="(item,index) in candyList2" @touchend="delCanday2(index,item.id,item.candy_count)">
				<div class="candyBox" :style="item.transform">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>{{item.candy_count}}</p>
				</div>
			</li>
		</ul>
		<ul class="candyList2" v-show="candyList.length<1 && candyList2.length<1">
			<li class="candy2 candyProduct">
				<div class="candyBox">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>正在生成中</p>
				</div>
			</li>
		</ul>
		<audio ref="audioMp3">
			<source src="../../assets/audio.mp3" type="audio/mpeg">
		</audio>
		<div class="activity" :class="item.className" v-for="item in activeList" @touchend='goActivity(item.url)' >
			<img :src="item.icon" />
			<p>{{item.name}}</p>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>
<script>
	import { Prevent } from '../../assets/js/pervent.js'
	import '../../assets/css/index.css'
	import FooterNav from '../base/footerNav'
	import Vue from 'vue'
	let arr = new Set([]);
	
	export default {
		data() {
			return {
				head_pic: require('../../assets/img/index/home_pic_avatar.png'),
				footerNav: ["active", "", ""],
				dioNum: 0,
				energyNum: 0,
				candyList: [],
				candyList2: [],
				candyListDom: [],
				audioSrc: '../../assets/audio.mp3',
				activeList: [],
			}
		},
		components: {
			FooterNav,
		},
		created() {
			Prevent.init();
		},
		mounted() {
			this.init();
		},
		deactivated() {
			Prevent.flag = true
		},
		activated() {
			Prevent.flag = false
			let that = this;
			if(window.localStorage.getItem('head_pic')) {
				this.head_pic = window.localStorage.getItem('head_pic');
			}
			this.$http.post('/candy/get_coin_list').then(res => {
				that.dioNum = res.data.data.DIO;
				that.energyNum = res.data.data.permanent_power + "+" + res.data.data.temporary_power;
			});
		},
		methods: {
			init() {
				var that = this;
				for(let i = 0; arr.size < 13; i++) {
					arr.add(Math.floor(Math.random() * 13));
				}
				arr = Array.from(arr);
				this.$http.post('/candy/get_coin_list').then(res => {
					console.log(res);
					if(res.data.code == 0) {
						console.log(res.data.data.active)
						res.data.data.active.forEach((x, i) => {
							let activeLi=x;
							activeLi.className='activityPortal'+x.id;
							Vue.set(that.activeList,i,x)
						})
					}
					that.dioNum = res.data.data.DIO;
					that.energyNum = res.data.data.permanent_power + "+" + res.data.data.temporary_power;
					res.data.data.list.forEach((x, i) => {
						if(i < 13) {
							that.candyList[i] = {};
							that.candyList[i].candy_count = x.candy_count;
							that.candyList[i].id = x.id;
							that.candyList[i].className = "candy" + arr[i];
							let cx = Math.random() * 130 - 65 + "px"
							let cy = Math.random() * 110 - 55 + "px"
							that.candyList[i].transform = "transform:translateY(" + cy + ") translateX(" + cx + ")";
						} else {
							that.candyList2[i - 13] = {};
							that.candyList2[i - 13].candy_count = x.candy_count;
							that.candyList2[i - 13].id = x.id;
							that.candyList2[i - 13].className = "candy" + arr[i - 13];
							let cx = Math.random() * 130 - 65 + "px"
							let cy = Math.random() * 110 - 55 + "px"
							that.candyList2[i - 13].transform = "transform:translateY(" + cy + ") translateX(" + cx + ")";
						}
					})
				});
			},
			delCanday(index, candyId, candy_count) {
				let that = this;
				//MP3 音频控制
				/*let audioMp3 = new Audio()
				audioMp3.src = this.audioSrc
				audioMp3.load()*/
				this.$refs.audioMp3.load()
				this.candyList.splice(index, 1);
				that.$refs.audioMp3.play()
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
						/*audioMp3.play()*/
						that.dioNum = res.data.data.DIO;
					}
				});
			},
			delCanday2(index, candyId, candy_count) {
				let that = this;
				//MP3 音频控制
				/*let audioMp3 = new Audio()
				audioMp3.src = this.audioSrc
				audioMp3.load()*/
				this.$refs.audioMp3.load()
				this.candyList2.splice(index, 1);
				that.$refs.audioMp3.play()
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
						/*audioMp3.play()*/
						that.dioNum = res.data.data.DIO;
					}
				});
			},
			goEnergyRecode() {
				this.$router.push({
					path: "/index/energy_recode"
				})
			},
			goFeedback() {
				this.$router.push({
					path: "/center/feedback"
				})
			},
			goDio() {
				this.$router.push({
					path: "/index/dio",
					query: {
						id: 1
					},
				})
			},
			goEnergy() {
				this.$router.push({
					path: "/index/energy"
				})
			},
			goShare() {
				this.$router.push({
					path: "/index/share"
				})
			},
			goLab() {
				this.$router.push({
					path: "/lab/lab"
				})
			},
			goActivity(activityUrl) {
				window.location.href = activityUrl + '?token=' + window.localStorage.getItem('jiazhuoToken');
			}
		}
	}
</script>
<style scoped>
	.activity {
		width: 130px;
		height: 140px;
		position: absolute;
		overflow: hidden;
	}
	
	.activity>img {
		width: 80px;
		height: 80px;
		margin: 8px auto;
	}
	
	.activity>p {
		width: 100%;
		height: 40px;
		line-height: 40px;
		font-size: 24px;
		text-align: center;
		color: rgba(255, 255, 255, 1);
	}
	
	.activityPortal1 {
		left: 50%;
		margin-left: -340px;
		top: 190px;
	}
	
	.activityPortal2 {
		left: 50%;
		margin-left: -340px;
		top: 850px;
		height: 240px;
	}
	
	.activityPortal3 {
		left: 50%;
		margin-left: 210px;
		top: 850px;
		height: 240px;
	}
</style>