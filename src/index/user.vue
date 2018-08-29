<template>
	<div class="content2">
		<headerNav :pageTitle="pageTitle"></headerNav>
		<div id="">
			算力记录
		</div>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
        data() {
            return {
              pageTitle:"算力记录" 
            }
        },
        components: {
           HeaderNav,
        },
	}
</script>

<style>
</style>