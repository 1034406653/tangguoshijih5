<style scoped>
	.content {
		background: #090035;
		padding-top: 88px;
		padding-bottom: 60px;
		font-family: PingFangSC-Regular;
	}
	
	.content .header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 88px;
		line-height: 88px;
		color: #fff;
		font-size: 30px;
		text-align: center;
		background: #090035;
		z-index: 1000;
	}
	
	.content .header span {
		display: block;
		margin: 0 auto;
		width: 50%;
		height: 88px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		font-size: 30px;
		font-family: PingFangSC-Medium;
		font-weight: 500;
		color: #fff;
	}
	
	.content .header .back {
		width: 42px;
		height: 42px;
		position: absolute;
		left: 40px;
		top: 23px;
	}
	
	.main {
		width: 100%;
		height: 950px;
		background: url(../../assets/img/game/dial_dial_bg_star@2x.png);
		text-align: left;
		padding-top: 20px;
	}
	
	.main .dioBox {
		display: inline-block;
		width: auto;
		height: 80px;
		box-shadow: 0px 0px 8px 0px rgba(31, 117, 255, 1);
		border-radius: 40px;
		border: 3px solid rgba(31, 117, 255, 1);
		margin-left: 40px;
		padding: 5px 20px 5px 20px;
		overflow: hidden;
		color: white;
		margin-bottom: 30px;
	}
	
	.main .dioBox img {
		width: 70px;
		height: 70px;
		float: left;
		margin-right: 10px;
	}
	
	.main .dioBox .dioText {
		float: left;
		width: auto;
		height: 70px;
		line-height: 70px;
		font-size: 28px;
		color: rgba(0, 135, 255, 1);
		text-shadow: 0px 0px 6px rgba(0, 135, 255, 1);
	}
	
	.main .dioBox .dioText span {
		padding-right: 10px;
	}
	
	.main .newsListBox {
		width: 670px;
		margin: 0 auto;
		height: 80px;
		box-shadow: 0px 0px 8px 0px rgba(31, 117, 255, 1);
		border-radius: 40px;
		border: 3px solid rgba(31, 117, 255, 1);
		margin-left: 40px;
		padding: 5px 10px 5px 20px;
		overflow: hidden;
		color: white;
		margin-bottom: 30px;
	}
	
	.main .newsListBox img {
		width: 70px;
		height: 70px;
		float: left;
		margin-right: 10px;
	}
	
	.main .newsListBox .newsList {
		width: 480px;
		float: left;
		color: #fff;
		line-height: 68px;
		height: 68px;
		text-align: center;
		line-height: 70px;
		font-size: 28px;
		color: rgba(0, 135, 255, 1);
		text-shadow: 0px 0px 6px rgba(0, 135, 255, 1);
		position: relative;
		overflow: hidden;
	}
	
	.main .newsListBox .newsList ul {
		width: 100%;
		height: auto;
		position: absolute;
		left: 0;
		top: 0;
		transition: transform 0.4s;
	}
	
	.main .newsListBox .newsList li {
		width: 100%;
		height: 68px;
	}
	
	.main .newsListBox .newsList span {
		padding: 0 10px;
	}
	
	.turnTable {
		width: 750px;
		height: 750px;
		margin: 0 auto;
		background: url(../../assets/img/game/dial_dial_base_2@2x.png);
		background-size: 100% 100%;
		overflow: hidden;
		padding: 83px;
		position: relative;
	}
	
	.prizeTable {
		width: 584px;
		height: 584px;
		background: url(../../assets/img/game/dial_dial_base_1@2x.png);
		background-size: 100% 100%;
		position: relative;
		transition: transform 3s;
	}
	
	.pointer {
		width: 200px;
		height: 280px;
		position: absolute;
		left: 50%;
		margin-left: -100px;
		top: 50%;
		margin-top: -140px;
	}
	
	.prizeTable li {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		color: #fff;
	}
	
	.prizeTable li p {
		width: 120px;
		margin: 0 auto;
		margin-top: 56px;
		text-align: center;
		line-height: 24px;
		line-height: 30px;
		font-size: 24px;
		color: rgba(0, 150, 255, 1);
		text-shadow: 0px 0px 6px rgba(0, 150, 255, 1);
	}
	
	.prizeTable li:nth-of-type(10n +1) {
		transform: rotate(36deg);
	}
	
	.prizeTable li:nth-of-type(10n +2) {
		transform: rotate(72deg);
	}
	
	.prizeTable li:nth-of-type(10n +3) {
		transform: rotate(108deg);
	}
	
	.prizeTable li:nth-of-type(10n +4) {
		transform: rotate(144deg);
	}
	
	.prizeTable li:nth-of-type(10n +5) {
		transform: rotate(180deg);
	}
	
	.prizeTable li:nth-of-type(10n +6) {
		transform: rotate(216deg);
	}
	
	.prizeTable li:nth-of-type(10n +7) {
		transform: rotate(252deg);
	}
	
	.prizeTable li:nth-of-type(10n +8) {
		transform: rotate(288deg);
	}
	
	.prizeTable li:nth-of-type(10n +9) {
		transform: rotate(324deg);
	}
	
	.prizeTable li:nth-of-type(10n +10) {
		transform: rotate(360deg);
	}
	
	.drawBtn {
		width: 528px;
		height: 206px;
		margin: 0 auto;
		background: url(../../assets/img/game/dial_dial_start@2x.png);
		background-size: 100% 100%;
		line-height: 206px;
		text-align: center;
		font-size: 36px;
		color: rgba(246, 0, 255, 1);
		letter-spacing: 5px;
		text-shadow: 0px 0px 4px rgba(246, 0, 255, 1), 0px 7px 6px rgba(0, 0, 0, 0.3);
	}
	
	.drawBtnActive {
		background: url(../../assets/img/game/dial_dial_start@2xactive.png);
		background-size: 100% 100%;
	}
	
	.rule {
		width: 720px;
		height: auto;
		background: url(../../assets/img/game/dial_dial_rule_bg@2x.png);
		background-size: 100% 100%;
		padding-top: 60px;
		padding-bottom: 60px;
		margin: 0 auto;
		margin-bottom: 80px;
	}
	
	.rule-title {
		width: 100%;
		font-size: 38px;
		font-weight: 400;
		color: rgba(60, 199, 228, 1);
		line-height: 40px;
		text-shadow: 0px 0px 5px rgba(60, 199, 228, 1);
		text-align: center;
		height: 80px;
		line-height: 80px;
	}
	
	.rule p {
		width: 540px;
		height: auto;
		line-height: 40px;
		font-size: 28px;
		color: rgba(26, 160, 255, 1);
		text-shadow: 0px 0px 5px rgba(26, 160, 255, 1);
		margin: 20px auto;
	}
	
	.coverBg {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 1);
		opacity: 0.6988;
		z-index: 10000;
		top: 0;
		left: 0;
	}
	
	.popup1 {
		width: 640px;
		height: 533px;
		position: fixed;
		left: 50%;
		margin-left: -320px;
		top: 50%;
		margin-top: -265px;
		background: url(../../assets/img/game/dial_dial_win_bg@2x.png);
		background-size: 100% 100%;
		z-index: 10001;
		padding-top: 120px;
		color: rgba(223, 0, 255, 1);
		text-shadow: 0px 0px 5px rgba(223, 0, 255, 1);
	}
	
	.popup1 p.p1 {
		width: 100%;
		height: 56px;
		line-height: 56px;
		font-size: 40px;
		margin-bottom: 56px;
	}
	
	.popup1 p.p2 {
		width: 100%;
		height: 40px;
		font-size: 28px;
		line-height: 40px;
		margin-bottom: 10px;
	}
	
	.popup1 p.p3 {
		font-size: 36px;
		line-height: 50px;
		height: 50px;
		margin-bottom: 46px;
	}
	
	.popup1>div,.popup2>div {
		width: 300px;
		height: 80px;
		box-shadow: 0px 0px 10px 0px rgba(60, 107, 228, 1), 0px 6px 6px 0px rgba(0, 0, 0, 0.3);
		border-radius: 45px;
		border: 3px solid rgba(48, 127, 255, 1);
		/*no*/
		margin: 0 auto;
		font-size: 28px;
		color: rgba(60, 106, 227, 1);
		line-height: 74px;
		text-shadow: 0px 0px 4px rgba(60, 107, 228, 1), 0px 7px 6px rgba(0, 0, 0, 0.3);
	}
	
	.popup2 {
		width: 640px;
		height: 392px;
		position: fixed;
		left: 50%;
		margin-left: -320px;
		top: 50%;
		margin-top: -196px;
		background: url(../../assets/img/game/dial_dial_lose_bg@2x.png);
		background-size: 100% 100%;
		z-index: 10001;
		padding-top: 106px;
		color: rgba(223, 0, 255, 1);
		text-shadow: 0px 0px 5px rgba(223, 0, 255, 1);
	}
	
	.popup2 p {
		width: 100%;
		height: 50px;
		font-size: 36px;
		line-height: 50px;
		margin-bottom: 80px;
	}
</style>
<template>
	<div class="content">
		<div class="header">
			<img src="../../assets/img/game/navigation_nav_back@2x.png" class="back" />
			<span>糖果转盘</span>
		</div>
		<div class="main">
			<div class="dioBox">
				<img src="../../assets/img/game/dial_dial_DIO@2x.png" />
				<div class="dioText">
					<span>DIO</span>
					<span>{{dioNum}}</span>
				</div>
			</div>
			<div class="newsListBox">
				<img src="../../assets/img/game/dial_dial_message@2x.png" />
				<div class="newsList">
					<ul id="newsListUl" :style="newsListUlStyle">
						<li v-for='item in newsList'>
							<span>{{item.nickname}}</span><span>获得了</span><span>{{item.prize_name}}</span>
						</li>
					</ul>
				</div>
			</div>
			<div class="turnTable">
				<ul class="prizeTable" :style="prizeTableDeg">
					<li v-for="item in prizeList">
						<p>{{item.prize_name}}</p>
					</li>
				</ul>
				<img src="../../assets/img/game/dial_dial_pointer@2x.png" class="pointer" />
			</div>
			<div class="drawBtn" @click="drawBtnClick" :class="{drawBtnActive:isdrawBtnActive}" @touchend="drawBtnEnd" @touchstart="drawBtnStart">
				开始抽奖
			</div>
			<div class="rule">
				<div class="rule-title">
					活动规则
				</div>
				<p>1. 本活动无次数限制，DIO足额即可参加；</p>
				<p>2. 每次转转盘消耗12个DIO；</p>
				<p>3. 奖品设置：所有奖品均为已经ICO的token，后续可以提现；</p>
				<p>4. 抽取到的token保存在“我的糖果”中；</p>
				<p>5. 活动时间：即日起至通知截止时间为止，token数量有限，抓紧时间参加哦；</p>
				<p>6. “糖果世纪”对本活动拥有最终解释权。</p>
			</div>
		</div>
		<div class="popup1" v-if="popup1Show">
			<p class="p1">中奖啦！</p>
			<p class="p2">恭喜您获得</p>
			<p class="p3">{{popup1Value}}</p>
			<div @click="closePopup1">
				确定
			</div>
		</div>
		<div class="popup2" v-if="popup2Show">
			<p>{{popup2Value}}</p>
			<div @click="closePopup2">
				确定
			</div>
		</div>
		<div class="coverBg" v-if="popup1Show || popup2Show"></div>
	</div>
</template>

<script>
	var ulTop = 0;
	var allDeg = 0;
	export default {
		data() {
			return {
				dioNum: "",
				newsList: [1, 2, 3, 4],
				newsListUlStyle: '',
				prizeList: [],
				prizeTableDeg: "",
				tableId: "",
				isdrawBtnActive: false,
				canDraw: true,
				popup1Show: false,
				popup2Show: false,
				popup1Value:"",
				popup2Value:"",
			}
		},
		created() {
			this.init();
		},
		methods: {
			init() {
				let that = this;
				this.$http.post('/prize/turntable').then(res => {
					if(res.data.code == "0") {
						that.dioNum = res.data.data.gold_coin;
						that.prizeList = res.data.data.prize;
						that.tableId = res.data.data.id;
					}
				})
				this.$http.post('/prize/winlist').then(res => {
					if(res.data.code == '0') {
						that.newsList = res.data.data;
					}
				})
				let timer = setInterval(() => {
					if(ulTop > (-68 / 75 * (that.newsList.length - 2))) {
						ulTop = ulTop - 68 / 75;
						that.newsListUlStyle = `transition: top 0.4s;top:${ulTop}rem;`;
					} else {
						setTimeout(() => {
							ulTop = 68 / 75;
							that.newsListUlStyle = `transition: top 0s;top:${ulTop}rem;`;
						}, 5)
						setTimeout(() => {
							ulTop = 0;
							that.newsListUlStyle = `transition: top 0.4s;top:${ulTop}rem;`;
						}, 10)
					}
				}, 2000)
			},
			drawBtnClick() {
				if(this.canDraw) {
					this.canDraw = false;
					let that = this;
					this.$http.post('/prize/draw', {
						'turntable_id': that.tableId
					}).then((res) => {
						if(res.data.code == '0') {
							let drawId = res.data.data.id;
							let deg = 0;
							that.prizeList.forEach((x, i) => {
								if(x.id == drawId) {
									deg = 36 * i;
								}
							})
							allDeg = (allDeg - allDeg % 360) + 360 * 3 + deg;
							that.prizeTableDeg = `transform: rotate(${allDeg}deg);`
							that.dioNum = res.data.data.gold_coin;
							setTimeout(() => {
								if(!res.data.data.candy_id){
									that.popup2Show=true;
									that.popup2Value=res.data.data.prize_name;
								}else{
									that.popup1Show=true;
									that.popup1Value=res.data.data.count+"个"+res.data.data.candy_name;
								}
							}, 3000)
						} else if(res.data.code == '2') {
							that.popup2Show=true;
							that.popup2Value=res.data.info;
						}

					})
				}
			},
			drawBtnStart() {
				if(this.canDraw) {
					this.isdrawBtnActive = true
				}
			},
			drawBtnEnd() {
				this.isdrawBtnActive = false
			},
			closePopup1() {
				this.popup1Show=false;
				this.canDraw = true;
			},
			closePopup2() {
				this.popup2Show=false;
				this.canDraw = true;
			}
		}
	}
</script>