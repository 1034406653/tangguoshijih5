<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<ul class="setList">
			<li @click="goContact">
				<span>联系我们</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" />
			</li>
			<li @click="goFeedback">
				<span>说明中心</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" />
			</li>
		</ul>
		<div class="logoutBtn" @click="goOut">
			退出登录
		</div>
	</div>

</template>

<script>
	import HeaderNav from '../base/headerNav'
	import { MessageBox } from 'mint-ui';
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
				MessageBox({
					title: '',
					message: '您确定要退出当前账户吗?',
					showCancelButton: true
				});
				//				this.$http.post('/user/logout').then(res=>{
				//					if(res.data.code=="0"){
				//						this.$router.push({
				//							path:"/acount/login"
				//						})
				//					}
				//				})
			}
		}
	}
</script>

<style scoped>
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
		border-bottom: 1px solid rgba(239, 239, 239, 1);
		/*px*/
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
		border-radius: 40px;
		margin: 80px auto;
		color: rgba(255, 255, 255, 1);
		font-size: 30px;
		line-height: 80px;
		opacity: 0.8;
	}
</style>