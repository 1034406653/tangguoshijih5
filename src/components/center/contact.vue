<template>
	<div class="content">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="service-list">
			<div class="service-item">
				<div class="item-icon icon-phone"></div>
				<p class="item-subtitle">客服电话</p>
        <div>
          <p>
            <a href="tel:15306544612" class="item-title">15306544612</a>
          </p>
        </div>
			</div>
			<div class="service-item">
				<div class="item-icon icon-wx"></div>
        <div>
          <span class="item-subtitle">微信号</span>
        </div>
        <div>
          <p class="item-title">tangguoshiji</p>
        </div>
			</div>
			<div class="service-item">
				<div class="item-icon icon-qq"></div>
        <div>
          <span class="item-subtitle">QQ群</span>
        </div>
        <div>
          <p class="item-title">167811379</p>
        </div>
			</div>
		</div>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle: '联系我们'
			}
		},
		components: {
			HeaderNav,
		},
	}
</script>

<style>
	
	.service-list {
		padding: 300px 50px 20px;
	}
	
	.service-item {
		margin: 0 auto;
		width: 650px;
		height: 200px;
		border-bottom: 2px solid #EEE;
	}
	
	.item-icon {
		width: 100px;
		height: 100px;
		margin-top: 52px;
		float: left;
		margin-left: 36px;
	}
	
	.item-title {
		float: left;
		font-size: 48px;
		margin-left: 5%;
		color: #333;
		line-height: 100px;
	}
	
	.item-subtitle {
		width: 60%;
		margin-left: 6%;
		float: left;
		margin-top: 40px;
		text-align: left;
		font-size: 28px;
		color: #999;
		line-height: 40px;
	}
	
	.icon-phone {
		background: url("../../assets/img/center/service-phone.svg") no-repeat;
		background-size: 100% 100%;
	}
	
	.icon-qq {
		background: url("../../assets/img/center/qq.svg") no-repeat;
		background-size: 100% 100%;
	}
	
	.icon-wx {
		background: url("../../assets/img/center/wx.svg") no-repeat;
		background-size: 100% 100%;
	}
</style>
