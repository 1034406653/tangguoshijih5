<template>
	<div class="logBtn" :class="[cBtnActiveStart, { cBtnActive: cBtnActive }]" @touchstart="cBtnStart" @click="cBtnClick">{{cBtnValue}}</div>
</template>

<script>
	export default{
		name:"colorBtn",
		props:{
			cBtnValue:{
				type:String,
				default:"确认"
			},
			cBtnActive:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				cBtnActiveStart:"",
			}
		},
		methods:{
			cBtnStart(){
				if(this.cBtnActive){
					this.cBtnActiveStart='cBtnActiveStart';
				}
			},
			
			cBtnClick(){
				this.$emit('cBtnTuch')
				this.cBtnActiveStart='';
			}
		}
	}
</script>

<style scoped>
	/*按钮颜色*/
	.logBtn {
		width: 670px;
		height: 80px;
		background: #CCCCCC;
		border-radius: 40px;
		margin: 0 auto;
		line-height: 80px;
		font-size: 30px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}
	
	.cBtnActive {
		background: linear-gradient(90deg, #e275ea 0%, #a95ac5 100%);
	}
	.cBtnActiveStart {
		background: linear-gradient(90deg, #c166d5 0%, #884bb0 100%);
	}
</style>
