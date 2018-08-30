<template>
	<div id="header">
		<img src="../../assets/img/base/navigation_nav_back@2x.png" class="back" @click="goBack" v-show="goBackShow" />
		<div class="title">{{pageTitle}}</div>
	</div>
</template>

<script>
	export default {
		props: {
            pageTitle:{
            	type:String,
            	default:"title"
            },
            goBackShow:{
            	type:Boolean,
            	default:true
            }
        },
		data() {
			return {

			}
		},
		methods:{
			goBack(){
				this.$router.back(-1);
			}
		}
	}
</script>

<style scoped="">
	#header{
		width: 100%;
		height: 88px;
		line-height: 88px;
		position: fixed;
		text-align: center;
		overflow: hidden;
		top: 0;
		left: 0;
		background: #F7F7F7;
    z-index: 1999;
	}
	#header .back{
		width: 42px;
		height: 42px;
		position: absolute;
		left: 40px;
		top: 23px;
	}
	#header .title{
		margin: 0 auto;
		width: 60%;
		height: 60px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
</style>
