<template>
	<ul class="bar animated fadeInLeft">
		<router-link to="/dynamic" tag="li">
			<span>动态</span>
		</router-link>
		<router-link to="/column" tag="li">
			<span>专栏</span>
		</router-link>
		<router-link to="/billboard" tag="li">
			<span>榜单</span>
		</router-link>
		<router-link to="/citywide" tag="li">
			<span>同城</span>
		</router-link>
	</ul>
</template>

<script>
	export default {
		
	}
</script>

<style scoped="scoped" lang="less">
	.bar{
		width: 100%;
		height: 0.6rem;
		background: white;
		display: flex;
		padding: 0.2rem 0;
		

		border-bottom: 1px solid #f1f1f1;
		li{
			display: flex;
			flex: 1;
			flex-direction: column;//元素上下布局
			justify-content: center;//水平居中
			align-items: center;//垂直居中
			color: #aaa;
			font-size: 0.25rem;
			border-bottom: 1px solid transparent;
			color: #989898;
		}
		li:hover{
			border-bottom: 1px solid #e94343;
			color: black;
		}
	}
</style>
