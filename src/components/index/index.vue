<template>
	<div class="content1" onclick="return false">
		<img :src="head_pic" class="user"/>
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" @touchend="goFeedback" />
		<div class="dio">
			<div  @touchend="goDio">
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

    <div class="plant" onclick="return false">

    </div>

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
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import {Prevent} from '../../../static/js/pervent.js'
	import '../../assets/css/index.css'
	import FooterNav from '../base/footerNav'
	let arr = new Set([]);


	export default {
		data() {
			return {
				head_pic:require('../../assets/img/index/home_pic_avatar.png'),
				footerNav: ["active", "", ""],
				dioNum: 0,
				energyNum: 0,
				candyList: [],
				candyList2: [],
				candyListDom: [],
        audioSrc: '../../assets/audio.mp3'
			}
		},
		components: {
			FooterNav,
		},
		created() {
			this.init();
			if(window.localStorage.getItem('head_pic')){
				this.head_pic=window.localStorage.getItem('head_pic');
			}
		},
		methods: {
			init() {
				Prevent.init();
				var that = this;
				for(let i = 0; arr.size < 13; i++) {
					arr.add(Math.floor(Math.random() * 13));
				}
				arr = Array.from(arr);
				this.$http.post('/candy/get_coin_list').then(res => {
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
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
            /*audioMp3.play()*/
            that.$refs.audioMp3.play()
						that.dioNum = (parseFloat(candy_count)+parseFloat(that.dioNum)).toFixed(6);
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
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
            /*audioMp3.play()*/
            that.$refs.audioMp3.play()
						that.dioNum = (parseFloat(candy_count)+parseFloat(that.dioNum)).toFixed(6);
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
					query:{id:1},
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
			goLab(){
				this.$router.push({
					path: "/lab/lab"
				})
			},
		}
	}
</script>
<style scoped>

</style>
