<template>
	<div>
		<div class="content-wxshare" id="picbox">
			<div class="QRcode"><span>{{card_code}}</span></div>
			<canvas id="QRcanvas" class="card_img"></canvas>
		</div>
	</div>

</template>

<script>
	import QRCode from 'qrcode'
	import html2canvas from '../../../static/js/html2canvas.min.js'
	import Canvas2Image from '../../../static/js/canvas2image.js'
	var saveFile = function(data, filename) {
		var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
		save_link.href = data;
		save_link.download = filename;
		var event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		save_link.dispatchEvent(event);
	};
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
		}
	}
</script>

<style>
	html,
	body {
		overflow: auto;
	}
	
	.content-wxshare {
		width: 100%;
		height: 1200px;
    background: url("../../assets/img/share/wxshare.png");
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
    width: 184px !important;
    height: 184px !important;
		left: 8.53%;
		top: 939px;
		display: block;
	}
</style>
