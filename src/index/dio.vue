<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
			<router-link :to="{ path: '/index/dio_detail', query: {  }}">dio明细</router-link>
			
		</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	
	
	export default {
        data() {
            return {
               pageTitle:"DIO",
            }
        },
        components: {
           HeaderNav,
        },
        mounted(){
      	
        	
        },
        methods:{
        	
        }
	}
</script>

<style>
</style>