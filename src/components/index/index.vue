<template>
	<div class="content1">
		<img src="../../assets/img/index/home_pic_avatar.png" class="user" @click="goUser"/>
		<img src="../../assets/img/index/home_icon_question@3x.png" class="introduce" @click="goIntroduce"/>
		<div class="dio" @click="goDio">
			<img src="../../assets/img/index/home_icon_dio.png" class="dioIcon" />
			<span class="dioText">DIO {{dioNum}}</span>
			<img src="../../assets/img/index/home_icon_hashrate.png" class="energyIcon" />
			<span class="energyText">算力 {{energyNum}}</span>
		</div>
		<div class="energy" @click="goEnergy">
			<img src="../../assets/img/index/home_icon_promote.png" />
			<span>提升算力</span>
		</div>
		<div class="share" @click="goShare">
			<img src="../../assets/img/index/home_iocn_invitation.png" />
			<span>邀请好友</span>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import "../../assets/css/index.css"
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
	
</style>