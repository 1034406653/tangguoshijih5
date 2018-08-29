<template>
	<div class="content1">
		<div class="banner">

		</div>
		<div class="content-main">
			<div class="gameBox">
				<div class="content-title">
					游戏
				</div>
				<ul class="gameList">
					<li>
						<img src="../../../build/logo.png" />
					</li>
					<li>
						<img src="../../../build/logo.png" />
					</li>
					<li>
						<img src="../../../build/logo.png" />
					</li>
				</ul>
			</div>
			<div class="taskDayBox">
				<div class="content-title">
					每日任务
				</div>
				<ul class="taskLi">
					<li>
						<img src="../../../build/logo.png" />
						<b>每日登录</b>
						<span>算力+1</span>
					</li>
				</ul>
			</div>
			<div class="taskMustBox">
				<div class="content-title">
					必做任务
				</div>
				<ul class="taskLi">
					<li>
						<img src="../../../build/logo.png" />
						<b>实名认证</b>
						<span>算力+5 DIO+5</span>
					</li>
					<li>
						<img src="../../../build/logo.png" />
						<b>邀请好友</b>
						<span>算力+5 DIO+50</span>
					</li>
				</ul>
			</div>
		</div>
		<FooterNav :footerNav="footerNav"></FooterNav>
	</div>
</template>

<script>
	import FooterNav from '../base/footerNav'
	export default {
		data() {
			return {
				footerNav: ["", "active", ""]
			}
		},
		components: {
			FooterNav,
		},
	}
</script>

<style scoped>
	.banner {
		width: 100%;
		height: 380px;
		background: #5A5A5A;
	}
	
	.content-main {
		text-align: left;
		position: fixed;
		width: 100%;
		top: 362px;
		bottom: 98px;
		overflow: auto;
		padding-bottom: 10px;
		padding-top: 20px;
		z-index: 10;
		background: rgba(255, 255, 255, 1);
		border-radius: 20px 20px 0 0;
	}
	
	.gameBox,
	.taskMustBox,
	.taskDayBox {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 30px;
	}
	
	.content-title {
		width: 100%;
		height: 80px;
		font-size: 40px;
		line-height: 80px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		padding-left: 40px;
	}
	.gameList{
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	.gameList li{
		float: left;
		width:160px;
		height:160px;
		background:rgba(30,18,38,1);
		border-radius:20px 20px 20px 30px;
		margin: 0 42px;
	}
	.gameList li img{
		width:67px;
		height:92px;
		margin: 39px auto;
		display: block;
	}
	.taskLi{
		width: 100%;
		height: auto;
		padding: 0 40px;
		overflow: hidden;
	}
	.taskLi li{
		width: 100%;
		height: 90px;
		line-height: 90px;
		color:rgba(51,51,51,1);
		border-bottom: 1px solid rgba(239,239,239,1);/*px*/
		font-family:PingFang-SC-Medium;
	}
	.taskLi li:last-child{
		border: none;
	}
	.taskLi li img{
		width:36px;
		height:36px;
		float: left;
		margin: 27px 24px 0 0;
	}
	.taskLi li b{
		float: left;
		width: auto;
		font-size:28px;
		color:rgba(51,51,51,1);
	}
	.taskLi li span{
		float: right;
		width: auto;
			
		font-size:24px;


color:rgba(153,153,153,1);

	}
</style>