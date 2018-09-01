<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="navBox">
			基本信息反馈
		</div>
		<div class="navBox">
			未来信息展示
		</div>
	</div>

</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle:"说明中心",
			}
		},
		components: {
			HeaderNav,
		},
	}
</script>

<style scoped>
	.navBox{
		width:670px;
		height:260px;
		opacity:0.8;
		border-radius:20px;
		margin: 20px auto;
	}
</style>