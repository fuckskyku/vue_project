<template>
	<div id="app">
		<Footer></Footer>
			<keep-alive>
				<router-view v-if="$route.meta.keepAlive"></router-view>
			</keep-alive>
			
			<!-- <router-view v-if="$route.meta.keepAlive"></router-view> -->
			
			<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	
	import Footer from './components/base/Footer'

	export default {
		name: 'App',
		components: {
			Footer
		}
	}
</script>

<style>
	 
	*{
		margin: 0;
		padding: 0;
	}
	html{
		font-size: 10px;
		scrollbar-base-color: transparent;  
		scrollbar-base-color: transparent;  
		scrollbar-3dlight-color: transparent;  
		scrollbar-highlight-color: transparent;  
		scrollbar-track-color: transparent;  
		scrollbar-arrow-color: transparent;  
		scrollbar-shadow-color: transparent;  
		scrollbar-dark-shadow-color: transparent;
	}
	ul,li{
		list-style: none;
	}
	a{
		text-decoration: none;
	}
	p{
		text-indent: 0 !important;
	}
</style>
