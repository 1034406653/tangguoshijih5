<template>
	<div class="content">
		<headerNav></headerNav>
		<div>糖果盒子</div>
		<router-link :to="{ path: '/index/dio', query: {}}">dio</router-link>
	</div>
</template>

<script>
	import HeaderNav from '../base/headerNav'
	export default {
		data() {
			return {

			}
		},
		components: {
			HeaderNav,
		},
	}
</script>

<style>

</style>