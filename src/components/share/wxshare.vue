<template>
	<div id="shareimgbox">
		<div class="imgbottom"></div>
		<div class="bgwhite" v-show='ispicboxshow'></div>
		<div class="content-wxshare" id="picbox" onclick="return false" v-show='ispicboxshow'>
			<div class="QRcode"><span>{{card_code}}</span></div>
			<canvas id="QRcanvas" class="card_img"></canvas>
		</div>
	</div>

</template>

<script>
	import QRCode from 'qrcode'
	import HeaderNav from '../base/headerNav'
	import html2canvas from '../../assets/js/html2canvas.min.js'
	import { Canvas2Image } from '../../assets/js/canvas2image.js'
	export default {
		data() {
			return {
				pageTitle: '糖果世纪-分享',
				card_code: "",
				picData: "",
				ispicboxshow: true,
			}
		},
		components: {
			QRCode,
			HeaderNav
		},
		mounted() {
			let that = this;
			this.$http.post('/user/invitationInfo').then(res => {
				if(res.data.code == "0") {
					that.card_code = res.data.data.inv_code;
					that.inv_power = res.data.data.inv_power;
					that.inv_candy = res.data.data.inv_candy;
					that.invitation_coin_count = res.data.data.invitation_coin_count;
					that.invitation_power = res.data.data.invitation_power;
					let canvas = document.getElementById('canvas');
					let QRCode_BaseURL = this.$share;
					let QRCode_URL = QRCode_BaseURL + '?invitation_code=' + this.card_code;
					QRCode.toCanvas(QRcanvas, QRCode_URL, function(error) {
						if(error) console.error(error)
						let imgbox = document.getElementById('picbox');
						html2canvas(imgbox).then(function(canvas) {
							that.ispicboxshow = false;
							document.getElementById('shareimgbox').appendChild(canvas);
							document.getElementById('shareimgbox').appendChild(Canvas2Image.convertToImage(canvas, 750, 1200, 'png'))
						});
					})
				}
			})
		}
	}
</script>

<style scoped>
	.bgwhite {
		position: absolute;
		width: 100%;
		/*height: calc( 100% - 88px );
		top: 88px;*/
		height: 100%;
		top: 0;
		left: 0;
		background: white;
		z-index: 100;
	}
	.content-wxshare {
		width: 50%;
		height: 600px;
		background: url("../../assets/img/share/wxshare.png");
		background-size: 100% 100%;
		overflow: auto;
	}
	
	.QRcode {
		position: absolute;
		width: 50%;
		top: 339px;
		left: 0;
		text-align: center;
		height: 40px;
		font-size: 40px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		color: rgba(226, 104, 220, 1);
		line-height: 40px;
	}
	
	#QRcanvas {
		position: absolute;
		width: 92px !important;
		height: 92px !important;
		left: 4.26%;
		top: 469px;
		display: block;
		border: none;
		padding: 0;
		margin: 0;
	}
	
	.imgbottom {
		position: absolute;
		width: 100%;
		height: 20px;
		left: 0;
		top: 1190px;
		z-index: 1000;
		background: #fff;
	}
</style>