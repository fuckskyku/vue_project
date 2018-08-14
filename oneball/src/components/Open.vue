<template>
	<div class="open">
			<div class="icon animated bounceInDown">
				<ul>
					<li>
						<img src="../assets/img/open/open_03.png" alt="">
						文字
					</li>
					<li>
						<img src="../assets/img/open/open_05.png" alt="">
						拍照
					</li>
					<li>
						<img src="../assets/img/open/open_07.png" alt="">
						小视频
					</li>
				</ul>
				<ul>
					<li>
						<img src="../assets/img/open/open_12.png" alt="">
						相册
					</li>
					<li>
						<img src="../assets/img/open/open_13.png" alt="">
						本地视频
					</li>
					<li>
						<img src="../assets/img/open/open_14.png" alt="">
						打卡
					</li>
				</ul>
			</div>
		
		<div class="foot">
				<i class="fa fa-times" @click="back"></i>	
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back() {
				this.$router.go(-1);
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.open{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: #dfdfdf;
		z-index: 999;
		.icon{
			position: absolute;
			bottom: 2rem;
			left: 0;
			width: 100%;
			height: 5rem;
			
			ul{
				
				display: flex;
				width: 100%;
				height: 2.5rem;
				li{
					display: flex;
					flex: 1;
					justify-content: center;
					align-items: center;
					flex-direction: column;
					font-size: 0.36rem;
					color: #646464;
					img{
						width: 1.15rem;
						height: 1.15rem;
						margin-bottom: 0.1rem;
					}
				}
			}
		}
		.foot{
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1rem;
			text-align: center;
			font-size: 0.5rem;
			border-top: 1px solid #999;
			i{
				line-height: 1rem;
				font-weight: 100;
				color: #999;
			}
		}
	}
</style>
