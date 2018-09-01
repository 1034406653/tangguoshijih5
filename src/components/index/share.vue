<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div class="card">
			<div class="card_code">{{card_code}}</div>
			<img :src="card_url" class="card_img"/>
			<div class="shareBtn"></div>
		</div>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				pageTitle: "邀请好友",
				card_code:"",
				card_url:require("../../assets/img/index/home_pic_avatar.png")
			}
		},
		components: {
			HeaderNav,
		},
		created(){
			this.init();
		},
		methods:{
			init(){
				let that=this;
				this.$http.post('/user/invitationInfo').then(res=>{
					if(res.data.code=="0"){
						that.card_code=res.data.data.inv_code;
						
					}
				})
			},
		}
	}
</script>

<style scoped="">
	.content2 {
		background: url(../../assets/img/index/share2.jpg);
		background-size: 100% 100%;
		position: relative;
		top: 10px;
	}
	
	.card {
		width: 590px;
		height: 913px;
		position: absolute;
		left: 50%;
		margin-left: -295px;
		top: 300px;
		background: url(../../assets/img/index/card2x.png);
		background-size: 100% 100%;
	}
	.card{
		width: 590px;
		height: 913px;
		position: absolute;
		left: 50%;
		margin-left: -295px;
		top: 300px;
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
	.card_img{
		width:180px;
		height:180px;
		position: absolute;
		left: 50%;
		margin-left: -90px;
		top: 220px;
	}
	.shareBtn{
		width:100px;
		height:40px;
		position: absolute;
		left: 50%;
		margin-left: -50px;
		top: 429px;
	}
</style>