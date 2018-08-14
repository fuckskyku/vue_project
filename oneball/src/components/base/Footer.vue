<template>
	<div>
		<div class="footer">
			<router-link to="/home">
				<i class="iconfont icon-ball"></i>
				首页
			</router-link>
			<router-link to="/train">
				<i class="fa fa-bolt fa-2x"></i>
				训练
			</router-link>
			<router-link to="/open">		
				<span class="open"><i class="fa fa-plus fa-2x"></i></span>
			</router-link>
			<router-link to="find">
				<i class="fa fa-ravelry fa-2x"></i>
				栏目
			</router-link>
			<router-link to="/mine">
				<i class="fa fa-user-o fa-2x"></i>
				我的
			</router-link>
		</div>
	</div>
		
</template>

<script>
	export default {
		
	}
</script>

<style scoped="scoped" lang="less">
	
	.footer{
		
		width: 100%;
		height: 0.6rem;
		background: white;
		position: fixed;
		bottom: 0;
		left: 0;
		display: flex;
		padding: 0.2rem 0;
		z-index: 88;
		a{
			display: flex;
			flex: 1;
			flex-direction: column;//元素上下布局
			justify-content: center;//水平居中
			align-items: center;//垂直居中
			color: #aaa;
			font-size: 0.25rem;
			i{
				color: #aaa;
			}
		
			.fa-plus{
				margin-top: 0.1rem;
				font-weight: 100;
			}
			.icon-ball{
				font-size: 0.5rem;
			}
		}
		
		a:hover .icon-ball{
			color: firebrick !important;
		}
		a:hover .fa-bolt{
			color: firebrick !important;
		}
		a:hover .fa-user-o{
			color: firebrick !important;
		}
		a:hover .fa-ravelry{
			color: firebrick !important;
		}
		.router-link-active{
			color: #EC4040;
		}
		.open{
			display: inline-block;
			padding: 0.22rem 0.4rem;
			text-align: center;
			background: #ec4040;
			border-radius: 0.1rem;
			i{
				color: white;
				line-height: 0.3rem;
			}
		}
	}
</style>
