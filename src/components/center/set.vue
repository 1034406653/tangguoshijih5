<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<ul class="setList">
			<li @touchend="goContact">
				<span>联系我们</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" />
			</li>
			<li @touchend="goFeedback">
				<span>说明中心</span>
				<img src="../../assets/img/center/me_icon_right@2x.png" />
			</li>
		</ul>
		<colorBtn :cBtnActive="isLogBtnActive" @cBtnTuch="goOut" :cBtnValue="cBtnValue"></colorBtn>
	</div>

</template>

<script>
	import HeaderNav from '../base/headerNav'
	import ColorBtn from '../base/colorBtn'
	import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				isLogBtnActive: true,
				pageTitle: "设置",
				cBtnValue: "退出登录"
			}
		},
		components: {
			HeaderNav,
			ColorBtn
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
				MessageBox.confirm('', {
					message: '您确定要退出当前账户吗?',
					title: '',
				}).then(action => {
					if(action == 'confirm') { //确认的回调
						this.$http.post('/user/logout').then(res => {
							if(res.data.code == "0") {
								window.localStorage.removeItem('jiazhuoToken')
								window.localStorage.removeItem('head_pic')
								window.localStorage.removeItem('nickname')
								this.$router.push({
									path: "/acount/login"
								})
							}
						})
					}
				}).catch(err => {});
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
		margin-bottom: 80px;
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
</style>
