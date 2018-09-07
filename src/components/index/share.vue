<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="card">
			<div class="card_code">{{card_code}}</div>
			<canvas id="canvas" class="card_img"></canvas>
			<div class="shareBtn"></div>
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
				card_url: require("../../assets/img/index/home_pic_avatar.png")
			}
		},
		components: {
			HeaderNav,
			QRCode
		},
		mounted() {
			this.init();
			this.invitation();
		},
		methods: {
			init() {
				let that = this;
				this.$http.post('/user/invitationInfo').then(res => {
					if(res.data.code == "0") {
						that.card_code = res.data.data.inv_code;
						let canvas = document.getElementById('canvas');
						let QRCode_BaseURL = 'http://www.baidu.com'
						let QRCode_URL = QRCode_BaseURL + '?invitation_code=' + this.card_code;
						QRCode.toCanvas(canvas, QRCode_URL, function(error) {
							if(error) console.error(error)
						})
					}
				})
			},
      invitation(){
        let that = this;
        this.$http.post('/user/invitation').then(res => {
          console.log(1)


            console.log(res)

        })
      }
		}
	}
</script>

<style scoped="">
	.content2 {
		background: url(../../assets/img/index/share2.jpg);
		background-size: 100% 100%;
		position: fixed;
		top: 10px;
		right: 0;
		left: 0;
		bottom: 0;
	}
	
	.card {
		width: 590px;
		height: 913px;
		position: relative;
		margin: 0 auto;
		margin-top: 200px;
		background: url(../../assets/img/index/card2x.png);
		background-size: 100% 100%;
	}
	
	.card_code {
		position: absolute;
		width: 100%;
		height: 80px;
		font-size: 80px;
		line-height: 80px;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
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
</style>
