<template>
	<div id="shareimgbox">
		<headerNav :pageTitle="pageTitle"></headerNav>
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
							let dataUrl = canvas.toDataURL('image/jpeg');
							let newImg = document.createElement('img');
							newImg.src = dataUrl;
							document.getElementById('shareimgbox').appendChild(newImg);
							
						});
					})
				}
			})
		}
	}
</script>

<style scoped>
	
	html,body {
		overflow: auto;
		background-color: white !important;
	}
	
	.content-wxshare {
		margin-top: 88px;
		position: relative;
		width: 100%;
		height: 1200px;
		background: url("../../assets/img/share/wxshare.png");
		background-size: 100% 100%;
	}
	
	.QRcode {
		position: absolute;
		width: 100%;
		top: 678px;
		left: 0;
		text-align: center;
		height: 60px;
		font-size: 80px;
		font-family: PingFangSC-Semibold;
		font-weight: 600;
		color: rgba(226, 104, 220, 1);
		line-height: 46px;
	}
	
	#QRcanvas {
		position: absolute;
		width: 184px !important;
		height: 184px !important;
		left: 8.53%;
		top: 939px;
		display: block;
	}
</style>