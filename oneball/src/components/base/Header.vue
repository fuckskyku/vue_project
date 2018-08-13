<template>
	<div class="header">
		<span class="back"><i class="fa fa-angle-left" @click="toHome"></i></span>
		<slot></slot>
		<span class="ellipsis"><i class="fa fa-ellipsis-h"></i></span>
	</div>
</template>

<script>
	export default {
		methods: {
			toHome(){
				this.$router.push('/home');//强制 跳转路径
			}	
		}
	}
</script>

<style scoped="scoped" lang="less">
	.header{
		position: fixed;
		top:0;
		left: 0;
		width: 100%;
		height:0.44rem;
		line-height: 0.44rem;
		font-size: 0.4rem;
		text-align: center;
		background: plum;
		padding: 0.1rem 0;
		z-index: 11;
		.back{
			font-size: 0.44rem;
			float: left;
			text-indent: 0.2rem;
		}
		.ellipsis{
			float: right;
			margin-right: 0.2rem;
			font-size: 0.4rem;
		}
	}
	
</style>
