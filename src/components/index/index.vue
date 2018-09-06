<template>
	<div class="content1">
		<img :src="head_pic" class="user" @click="goEnergyRecode" />
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" @click="goIntroduce" />
		<div class="dio">
			<div  @click="goDio">
				<img src="../../assets/img/index/home_icon_dio.png" class="dioIcon" />
				<span class="dioText">DIO {{dioNum}}</span>
			</div>
			<div @click="goEnergyRecode">
				<img src="../../assets/img/index/home_icon_hashrate.png" class="goUser" />
				<span class="energyText">算力 {{energyNum}}</span>
			</div>
		</div>
		<div class="energy" @click="goLab">
			<img src="../../assets/img/index/home_icon_promote.png" />
			<span>提升算力</span>
		</div>
		<div class="share" @click="goShare">
			<img src="../../assets/img/index/home_iocn_invitation.png" />
			<span>邀请好友</span>
		</div>
		<ul class="candyList">
			<li :class="item.className" v-for="(item,index) in candyList" @click="delCanday(index,item.id,item.candy_count)">
				<div class="candyBox" :style="item.transform">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>{{item.candy_count}}</p>
				</div>
			</li>
		</ul>
		
		
		<ul class="candyList" v-if="candyList.length<1">
			<li :class="item.className" v-for="(item,index) in candyList2" @click="delCanday2(index,item.id,item.candy_count)">
				<div class="candyBox" :style="item.transform">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>{{item.candy_count}}</p>
				</div>
			</li>
		</ul>
		<ul class="candyList2" v-show="candyList.length<1 && candyList2.length<1">
			<li class="candy2">
				<div class="candyBox">
					<img src="../../assets/img/index/home_dio@2x.png" alt="糖果" />
					<p>正在生成中</p>
				</div>
			</li>
		</ul>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
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
			}
		},
		components: {
			FooterNav,
		},
		created() {
			this.init();
			if(window.localStorage.getItem('head_pic')!='null'){
				this.head_pic=window.localStorage.getItem('head_pic');
			}
		},
		methods: {
			init() {
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
				this.candyList.splice(index, 1);
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
						that.dioNum = (parseFloat(candy_count)+parseFloat(that.dioNum)).toFixed(6);
					}
				});
			},
			delCanday2(index, candyId, candy_count) {
				let that = this;
				this.candyList2.splice(index, 1);
				this.$http.post('/candy/receive_candy', {
					'id': candyId
				}).then(res => {
					if(res.data.code == "0") {
						that.dioNum = (parseFloat(candy_count)+parseFloat(that.dioNum)).toFixed(6);
					}
				});
			},
			goEnergyRecode() {
				this.$router.push({
					path: "/index/energy_recode"
				})
			},
			goIntroduce() {
				this.$router.push({
					path: "/index/introduce"
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
	body .content1 {
		background: url(../../assets/img/index/home_pic_background.png);
		background-size: 100% 100%;
		position: relative;
	}
	
	.user {
		display: block;
		width: 80px;
		height: 80px;
		position: absolute;
		left: 30px;
		top: 14px;
		z-index: 10;
	}
	
	.introduce {
		display: block;
		width: 40px;
		height: 40px;
		position: absolute;
		left: 50px;
		top: 134px;
		z-index: 10;
	}
	
	.dio {
		position: absolute;
		left: 200px;
		top: 29px;
		width: 500px;
		height: 56px;
		background: rgba(67, 55, 106, 1);
		border-radius: 28px;
		line-height: 56px;
		text-align: left;
		z-index: 10;
	}
	.dio div{
		width: auto;
		float: left;
		height: auto;
		overflow: hidden;
	}
	
	.dio img {
		width: 56px;
		height: 56px;
		float: left;
		margin: 0px 5px;
	}
	
	.dio .energyIcon {
		width: 25px;
		height: 36px;
		margin: 10px 10px;
	}
	
	.dio span {
		float: left;
		height: 56px;
		line-height: 56px;
		font-size: 24px;
		font-family: PingFang-SC-Regular;
		font-weight: 400;
		color: rgba(254, 254, 254, 1);
		overflow: hidden;
	}
	
	.dioIcon {
		width: 36px;
	}
	
	.dioText {
		width: 210px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: inherit;
	}
	
	.energyIcon {
		width: 25px;
	}
	
	.energyText {
		width: 150px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: inherit;
	}
	
	.energy,
	.share {
		width: 140px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 138px;
		z-index: 10;
	}
	
	.energy {
		width: 140px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 138px;
		overflow: hidden;
	}
	
	.energy img,
	.share img {
		width: 50px;
		height: 50px;
		display: block;
		margin-left: 20px;
	}
	
	.energy span,
	.share span {
		display: block;
		height: 50px;
		line-height: 50px;
		font-size: 24px;
		font-family: PingFang-SC-Medium;
		color: rgba(255, 255, 255, 1);
		text-align: left;
	}
	
	.share {
		top: 256px;
	}
	
	.candyBox {
		width: 100px;
		height: 120px;
		color: white;
		font-size: 20px;
		text-align: center;
		overflow: hidden;
		margin: 40px auto;
	}
	
	.candyBox img {
		width: 78px;
		height: 78px;
		margin: 1px auto;
		display: block;
	}
	
	.candyBox p {
		width: 100%;
		height: 40px;
		line-height: 40px;
		white-space: nowrap;
		text-overflow: inherit;
		overflow: hidden;
	}
	
	.candyList,
	.candyList2 {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: auto;
		padding-bottom: 300px;
	}
	
	.candyList>li,
	.candyList2>li {
		position: absolute;
		width: 200px;
		height: 200px;
	}
	
	.candyList>li.candy0,
	.candyList2>li.candy0 {
		left: 50%;
		margin-left: 0px;
		top: 130px;
	}
	
	.candyList>li.candy1,
	.candyList2>li.candy1 {
		left: 50%;
		margin-left: -300px;
		top: 330px;
	}
	
	.candyList>li.candy2,
	.candyList2>li.candy2 {
		left: 50%;
		margin-left: -100px;
		top: 330px;
	}
	
	.candyList>li.candy3,
	.candyList2>li.candy3 {
		left: 50%;
		margin-left: 100px;
		top: 330px;
	}
	
	.candyList>li.candy4,
	.candyList2>li.candy4 {
		left: 50%;
		margin-left: -300px;
		top: 530px;
	}
	
	.candyList>li.candy5,
	.candyList2>li.candy5 {
		left: 50%;
		margin-left: -100px;
		top: 530px;
	}
	
	.candyList>li.candy6,
	.candyList2>li.candy6 {
		left: 50%;
		margin-left: 100px;
		top: 530px;
	}
	
	.candyList>li.candy7,
	.candyList2>li.candy7 {
		left: 50%;
		margin-left: -300px;
		top: 730px;
	}
	
	.candyList>li.candy8,
	.candyList2>li.candy8 {
		left: 50%;
		margin-left: -100px;
		top: 730px;
	}
	
	.candyList>li.candy9,
	.candyList2>li.candy9 {
		left: 50%;
		margin-left: 100px;
		top: 730px;
	}
	
	.candyList>li.candy10,
	.candyList2>li.candy10 {
		left: 50%;
		margin-left: -200px;
		top: 930px;
	}
	
	.candyList>li.candy11,
	.candyList2>li.candy11 {
		left: 50%;
		margin-left: 0px;
		top: 930px;
	}
	
	.candyList>li.candy12,
	.candyList2>li.candy12 {
		left: 50%;
		margin-left: -200px;
		top: 130px;
	}
</style>
