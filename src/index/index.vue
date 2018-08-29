<template>
	<div class="content1">
		<!--<router-link :to="{ path: '/index/user', query: {}}">user</router-link>
		<router-link :to="{ path: '/index/introduce', query: {}}">introduce</router-link>
		<router-link :to="{ path: '/index/dio', query: {}}">dio</router-link>
		<router-link :to="{ path: '/index/energy', query: {}}">energy</router-link>
		<router-link :to="{ path: '/lab/lab', query: {}}">lab</router-link>
		<router-link :to="{ path: '/index/share', query: {}}">share</router-link>-->
		<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" class="user" @click="goUser"/>
		<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" class="introduce" @click="goIntroduce"/>
		<div class="dio" @click="goDio">
			<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" class="dioIcon" />
			<span class="dioText">DIO {{dioNum}}</span>
			<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" class="energyIcon" />
			<span class="energyText">算力 {{energyNum}}</span>
		</div>
		<div class="energy" @click="goEnergy">
			<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" />
			<span>提升算力</span>
		</div>
		<div class="share" @click="goShare">
			<img src="../../../../jiazhuo_5/jiazhuo/build/logo.png" />
			<span>邀请好友</span>
		</div>
		<p>{{this.$store.state.count}}</p>
		<p>{{count}}</p>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '../base/footerNav'
	export default {
		data() {
			return {
				count: this.$store.state.count,
				footerNav: ["active", "", ""],
				dioNum:100000000,
				energyNum:999,
			}
		},
		components: {
			FooterNav,
		},
		methods: {
			goUser(){
				this.$router.push({
					path:"/index/user"
				})
			},
			goIntroduce(){
				this.$router.push({
					path:"/index/introduce"
				})
			},
			goDio(){
				this.$router.push({
					path:"/index/dio"
				})
			},
			goEnergy(){
				this.$router.push({
					path:"/index/energy"
				})
			},
			goShare(){
				this.$router.push({
					path:"/index/share"
				})
			}
		}
	}
</script>

<style scoped>
	.content1 {
		background: #5A5A5A;
	}
	
	.user {
		display: block;
		width: 80px;
		height: 80px;
		position: absolute;
		left: 30px;
		top: 14px;
	}
	
	.introduce {
		display: block;
		width: 40px;
		height: 40px;
		position: absolute;
		left: 50px;
		top: 134px;
	}
	
	.dio {
		position: absolute;
		left: 220px;
		top: 29px;
		width: 480px;
		height: 56px;
		background: rgba(67, 55, 106, 1);
		border-radius: 28px;
		line-height: 56px;
	}
	
	.dio img {
		width: 36px;
		height: 36px;
		float: left;
		margin: 10px 15px;
	}
	.dio span{
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
	}
	
	.energyIcon {
		width: 25px;
	}
	.energyText {
		width: 108px;
	}
	.energy,.share{
		width: 140px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 138px;
	}
	.energy{
		width: 140px;
		height: 100px;
		position: absolute;
		right: 0;
		top: 138px;
		overflow: hidden;
	}
	.energy img,.share img{
		width: 50px;
		height: 50px;
		display: block;
		margin-left: 20px;
	}
	.energy span,.share span{
		display: block;
		height:50px;
		line-height: 50px;
		font-size:24px;
		font-family:PingFang-SC-Medium;
		color:rgba(255,255,255,1);
		text-align: left;
	}
	.share{
		top: 256px;
	}
	
</style>