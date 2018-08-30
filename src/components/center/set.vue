<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<ul class="setList">
			<li @click="goContact">
				<span>联系我们</span>
				<img src="../../../build/logo.png" />
			</li>
			<li @click="goFeedback">
				<span>说明中心</span>
				<img src="../../../build/logo.png" />
			</li>
		</ul>
		<div class="logoutBtn" @click="goOut">
			退出登录
		</div>
	</div>

</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle: "设置",
			}
		},
		components: {
			HeaderNav,
		},
		methods: {
			goContact() {
				this.$router.push({
					path: "/center/contact"
				})
			},
			goFeedback() {
				this.$router.push({
					path: "/center/feedback"
				})
			},
			goOut() {

			}
		}
	}
</script>

<style scoped>
	.content2 {
		background: gray;
	}
	
	.setList {
		width: 100%;
		height: auto;
		overflow: hidden;
		background: rgba(255, 255, 255, 1);
		padding: 0 40px;
	}
	
	.setList li {
		width: 100%;
		height: 100px;
		overflow: hidden;
		line-height: 100px;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		color: rgba(51, 51, 51, 1);
		border-bottom: 1px solid rgba(239, 239, 239, 1);/*px*/
	}
	
	.setList li:last-child {
		border-bottom: none;
	}
	
	.setList li span {
		float: left;
		width: auto;
	}
	
	.setList li img {
		width: 10px;
		height: 20px;
		float: right;
		margin: 40px 0 0 0;
	}
	
	.logoutBtn {
		width: 670px;
		height: 80px;
		background: linear-gradient(140deg, rgba(229, 118, 236, 1), rgba(116, 65, 163, 1));
		opacity: 0.5;
		border-radius: 40px;
		margin: 80px auto;
		color:rgba(255,255,255,1);
		font-size: 30px;
		line-height: 80px;
	}
</style>