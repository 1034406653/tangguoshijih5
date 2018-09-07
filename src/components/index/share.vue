<style scoped="">
  .content2 {
    background: url(../../assets/img/index/me_pic_background.png);
    background-size: 100% 100%;
  }

  .card {
    width: 590px;
    height: 913px;
    position: relative;
    margin: 0 auto;
    margin-top: 200px;
    background: url(../../assets/img/index/yaoqing.png);
    background-size: 100% 100%;
  }

  .card_code {
    position: absolute;
    width: 100%;
    height: 80px;
    font-size: 80px;
    line-height: 80px;
    font-family: PingFang-SC-Medium;
    font-weight: 500;
    color: rgba(226, 104, 220, 1);
    top: 100px;
    left: 0;
  }

  .card_img {
    width: 180px !important;
    height: 180px !important;
    position: absolute;
    left: 50%;
    margin-left: -90px;
    top: 220px;
  }

  .shareBtn {
    width: 100px;
    height: 40px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 429px;
  }

  .shareCountPow {
    width: 100%;
    font-size:28px;
    font-family:PingFang-SC-Medium;
    font-weight:400;
    color:rgba(153,153,153,1);
    position: absolute;
    top: 496px;
    left: 0;
  }

  .shareDetail {
    text-align: left;
    width: 88%;
    position: absolute;
    top: 665px;
    left: 50%;
    margin-left: -44%;
    font-size:22px;
    font-family:PingFang-SC-Medium;
    font-weight:400;
    color:rgba(153,153,153,1);
  }

  .shareDetail .shareDetail-title{
    width: 100%;
    line-height: 48px;
    font-size:26px;
    margin-bottom: 10px;
  }

  .shareDetail .shareDetail-content{
    width: 100%;
    line-height: 32px;
    margin-bottom: 6px;
  }

  .logoItem {
    position: absolute;
    top: 130px;
    left: 50%;
    margin-left: -115px;
    width: 230px;
    height: 130px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .logoItem .logoImg {
    width: 103px;
    height: 93px;
    margin: 0 auto;
    background: url(../../assets/img/index/Logo506@2x.png);
    background-size: 100% 100%;
  }

  .logoItem .logoLight {
    width: 227px;
    height: 3px;
    background: url(../../assets/img/index/LIghtLine@2x.png);
    background-size: 100% 100%;
  }
</style>

<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>

    <div class="logoItem">
      <div class="logoImg"></div>
      <div class="logoLight"></div>
    </div>

		<div class="card">
			<div class="card_code">{{card_code}}</div>
			<canvas id="canvas" class="card_img"></canvas>
			<div class="shareBtn"></div>
      <div class="shareCountPow">
        <p>累计获得{{ inv_candy }}个DIO</p>
        <p>累计获得{{ inv_power }}个永久算力</p>
      </div>

      <div class="shareDetail">
        <p class="shareDetail-title">奖励说明</p>
        <p class="shareDetail-content">1、每邀请一位好友完成注册，邀请人就可以获得{{ invitation_power }}永久算力+{{ invitation_coin_count }}个DIO；被邀请人获得10永久算力+88个DIO</p>
        <p class="shareDetail-content">2、好友越多，收益越大，每人每天最多邀请10人</p>
      </div>
		</div>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	import QRCode from 'qrcode'
	export default {
		data() {
			return {
				pageTitle: "邀请好友",
				card_code: "",
				card_url: require("../../assets/img/index/home_pic_avatar.png"),
        inv_power: '',
        inv_candy: '',
        invitation_coin_count: '',
        invitation_power: ''
			}
		},
		components: {
			HeaderNav,
			QRCode
		},
		mounted() {
			this.init();
		},
		methods: {
			init() {
				let that = this;
				this.$http.post('/user/invitationInfo').then(res => {
					if(res.data.code == "0") {
            console.log(res)
						that.card_code = res.data.data.inv_code;
            that.inv_power = res.data.data.inv_power;
            that.inv_candy = res.data.data.inv_candy;
            that.invitation_coin_count = res.data.data.invitation_coin_count;
            that.invitation_power = res.data.data.invitation_power;

						let canvas = document.getElementById('canvas');
						let QRCode_BaseURL = 'http://www.baidu.com'
						let QRCode_URL = QRCode_BaseURL + '?invitation_code=' + this.card_code;
						QRCode.toCanvas(canvas, QRCode_URL, function(error) {
							if(error) console.error(error)
						})
					}
				})
			}
		}
	}
</script>


