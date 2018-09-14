<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle" :isRightShow="headRightShow" :rightValue="headRightValue" @headRightClick="goDioDetail"></headerNav>
		<div class="banner" onclick="return false">
			<img :src="candy_icon" alt="" />
			<ul>
				<li>
					<p>已持有</p>
					<p>{{user_candy}}</p>
				</li>
				<li>
					<p>预计价值（元）</p>
					<p>{{price}}</p>
				</li>
			</ul>
		</div>
		<ul class="mainText">
			<li>
				<div class="title">
					<img src="../../assets/img/index/diodian@2x.png" />
					<span>项目名称</span>
				</div>
				<p>{{candy_name}}</p>
			</li>
			<li>
				<div class="title">
					<img src="../../assets/img/index/diodian@2x.png" />
					<span>糖果简介</span>
				</div>
				<p>{{candy_introduction}}</p>
			</li>
			<li>
				<div class="title">
					<img src="../../assets/img/index/diodian@2x.png" />
					<span>项目名称</span>
				</div>
				<p>
					<a :href="url">官网链接</a>
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {
				id:"1",
				pageTitle: "DIO",
				headRightShow: true,
				candy_name:"",
				headRightValue: "明细",
				candy_icon:"",
				user_candy:"",
				candy_introduction:"",
				url:"",
				price:"",
			}
		},
		components: {
			HeaderNav,
		},
		created(){
			this.init();
		},
		mounted() {

		},
		methods: {
			init(){
				let that=this;
				this.id=this.$route.query.id;
				this.$http.post('/web/get_candy_details',{id:that.id}).then((res)=>{
					if(res.data.code=='0'){
						that.pageTitle=res.data.data.candy_name;
						that.candy_name=res.data.data.candy_name;
						that.candy_icon=res.data.data.candy_icon;
						that.user_candy=res.data.data.user_candy;
						that.candy_introduction=res.data.data.candy_introduction;
						that.url=res.data.data.url;
						that.price=res.data.data.price;
					}
				})
			},
			goDioDetail() {
				this.$router.push({
					path: "/index/energy",
					query:{id:1},
				})
			}
		}
	}
</script>

<style scoped>
	.banner {
		width: 100%;
		height: 408px;
		background: url(../../assets/img/index/dioBanner@2x.png);
		background-size: 100% 100%;
		overflow: hidden;
	}
	
	.banner img {
		width: 187px;
		height: 187px;
		margin: 0 auto;
		margin-top: 52px;
	}
	
	.banner ul {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.banner ul>li {
		float: left;
		width: 50%;
		height: auto;
	}
	
	.banner li p {
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 64px;
		height: 64px;
	}
	
	.banner li p:last-child {
		height: 28px;
		line-height: 28px;
	}
	
	.mainText {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding: 0 38px;
		margin-top: 54px;
		text-align: left;
		background: #fff;
		padding-bottom: 40px;
	}
	.mainText li{
		width: 100%;
		height: auto;
		padding: 10px 0 20px 0;
		border-bottom: 1px solid rgba(239,239,239,1);/*px*/
	}
	.mainText li:last-child{
		border: none;
	}
	.mainText .title{
		width: 100%;
		height: 76px;
		line-height: 76px;
		overflow: hidden;
		font-size: 36px;
	}
	.mainText .title img{
		float: left;
		width: 10px;
		height: 10px;
		margin: 33px 0;
		margin-right: 8px;
	}
	.mainText .title span{
		float: left;
		width: auto;
	}
	
	.mainText p {
		padding: 0 2px;
		width: 100%;
		height: auto;
		font-size: 28px;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 42px;
	}
</style>
