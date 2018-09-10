<template>
	<div>
		<div class="content-wxshare" id="picbox">
			<div class="QRcode"><span>{{card_code}}</span></div>
			<canvas id="QRcanvas" class="card_img"></canvas>
		</div>
		<div id="imgBox" style="display: none;"></div>
	</div>

</template>

<script>
	import QRCode from 'qrcode'
	import html2canvas from '../../../static/js/html2canvas.min.js'
	import Canvas2Image from '../../../static/js/canvas2image.js'

	export default {
		data() {
			return {
				card_code: "",
			}
		},
		components: {
			QRCode
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
					let QRCode_BaseURL = 'http://www.baidu.com'
					let QRCode_URL = QRCode_BaseURL + '?invitation_code=' + this.card_code;
					QRCode.toCanvas(QRcanvas, QRCode_URL, function(error) {
						if(error) console.error(error)
					})
				}
			})
			setTimeout(() => {
				html2canvas(document.getElementById('picbox')).then(function(canvas) {
					document.getElementById('imgBox').appendChild(canvas);
				});
				document.getElementById('picbox').onclick = () => {
					let canvasEle = document.getElementById('imgBox').children[0];
					console.log(document.getElementById('imgBox').children[0]);
					let image = new Image();
					image.id = 'picNew';
					image.src = canvasEle.toDataURL("image/png");
					document.getElementById('imgBox').appendChild(image);
					let a = document.createElement('a')
					let event = new MouseEvent('click')
					a.download = name || '下载图片名称'
					a.href = image.src
					console.log(a);
					a.dispatchEvent(event)
					return image;
				}
				
			}, 500)
		}
	}
</script>

<style scoped>
	.content-wxshare {
		width: 100%;
		height: 1200px;
		background: url(../../assets/img/share/wxshare.png);
		background-size: 100% 100%;
	}
	
	.QRcode {
		position: fixed;
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
		position: fixed;
		left: 8.53%;
		top: 939px;
		display: block;
	}
	
	canvas {
		display: none;
	}
</style>