<template>
	<ul id="footer">
		<router-link :to="{ path: '/', query: {  }}" class="footerLi" :class="footerNav[0]">
			<img src="../../assets/img/base/home_click@3x.png" v-if="footerNav[0]=='active'"/>
			<img src="../../assets/img/base/home_unclick@3x.png" v-if="footerNav[0]!='active'"/>
			<span>糖果世纪</span>
		</router-link>
		<router-link :to="{ path: '/lab/lab', query: { }}" class="footerLi" :class="footerNav[1]">
			<img src="../../assets/img/base/laboratory_click@3x.png" v-if="footerNav[1]=='active'"/>
			<img src="../../assets/img/base/laboratory_unclick@3x.png" v-if="footerNav[1]!='active'"/>
			<span>实验室</span></router-link>
		<router-link :to="{ path: '/center/center', query: {  }}" class="footerLi" :class="footerNav[2]">
			<img src="../../assets/img/base/me_click@3x.png" v-if="footerNav[2]=='active'"/>
			<img src="../../assets/img/base/me_unclick@3x.png" v-if="footerNav[2]!='active'"/>
			<span>我的糖果</span></router-link>
		</router-link>
	</ul>
</template>

<script>
	export default {
		props: {
			footerNav:{
				type:Array,
				 default: () => ["active","",""]
			}
		},
	}
</script>

<style scoped>
	#footer {
		position: fixed;
		bottom: 0;
		z-index: 100;
		width: 100%;
		display: flex;
		background: rgba(27, 22, 25, 1);
		box-shadow: 0px 12px 36px 2px rgba(90, 90, 90, 0.24);
	}
	
	#footer .footerLi {
		flex: 1;
		height: 98px;
		font-size: 20px;
		text-align: center;
		color: #999;
		padding-top: 10px;
		font-weight: bold;
	}
	
	#footer .footerLi img {
		width: 46px;
		height: 46px;
		display: block;
		margin: 0 auto;
	}
	
	#footer .footerLi span {
		width: 100%;
		height: 42px;
		line-height: 42px;
	}
	
	#footer .active {
		color: #E268DC;
	}
</style>