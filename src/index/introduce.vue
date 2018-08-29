<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="navBox" @click="goIntroduceHelp">
			基本问题反馈
		</div>
		<div class="navBox" @click="goIntroduceFuture">
			未来信息展示
		</div>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle: "说明中心"
			}
		},
		components: {
			HeaderNav,
		},
		methods: {
			goIntroduceHelp() {
				this.$router.push({
					path: "/index/introduce_help"
				})
			},
			goIntroduceFuture() {
				this.$router.push({
					path: "/index/introduce_future"
				})
			},
		}
	}
</script>

<style scoped>
	.navBox {
		width: 670px;
		height: 260px;
		opacity: 0.5;
		border-radius: 20px;
		margin: 0 auto;
		background: #26A2FF;
		font-size: 55px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(255, 255, 255, 1);
		line-height: 250px;
		margin-top: 40px;
	}
</style>