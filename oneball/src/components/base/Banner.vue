<template>
	<div class="swipe">
		<swipe class="my-swipe">
			
			<swipe-item class="slide1">
				<!-- <img src="../../assets/img/swipe/hadeng.jpg" alt=""> -->
			</swipe-item>
			<swipe-item class="slide2">
				<!-- <img src="../../assets/img/swipe/weide.jpg" alt=""> -->
			</swipe-item>
			<swipe-item class="slide3">
				<!-- <img src="../../assets/img/swipe/qiuxie.jpg" alt=""> -->
			</swipe-item>
			<swipe-item class="slide4">
				<!-- <img src="../../assets/img/swipe/longduo.jpg" alt=""> -->
			</swipe-item>
			<swipe-item class="slide5">
				<!-- <img src="../../assets/img/swipe/qiaodan.jpg" alt=""> -->
			</swipe-item>
			<input type="search" placeholder="输入关键字,搜索用户,动态,文章等">
		</swipe>
	</div>
</template>

<script>
</script>

<style lang="less">
	@import 'vue-swipe/dist/vue-swipe.css';
	.my-swipe {
		height: 4.1rem;
		color: #fff;
		font-size: 0.3rem;
		text-align: center;
		.mint-swipe-indicators{
			left: 78%;
		}
		.mint-swipe-indicator{
			
		}
		.is-active{
			opacity: 1;
		}
		img{
			width: 100%;
			height: 100%;
		}
		input{
			position: absolute;
			top: 0.5rem;
			left: 50%;
			margin-left: -2.85rem;
			width: 5.4rem;
			height: 0.7rem;
			text-align: center;
			border: 1px solid white;
			border-radius: 0.7rem;
			outline: none;
			background: rgba(153,153,153,0.3);
			color: white;
		}
		::-webkit-input-placeholder { /* WebKit browsers */
			color: #fff;
		}
		:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
			color: #fff;
		}
		::-moz-placeholder { /* Mozilla Firefox 19+ */
			color: #fff;
		}
		:-ms-input-placeholder { /* Internet Explorer 10+ */
			color: #fff;
		}
	}
	
	.slide1 {
		background: url(../../assets/img/swipe/hadeng.jpg) no-repeat;
		background-size: cover;
		height: 100%;
	}
 
	.slide2 {
		background: url(../../assets/img/swipe/weide.jpg) no-repeat;
		background-size: 100%;
		height: 100%;
	}
	 
	.slide3 {
		background: url(../../assets/img/swipe/qiuxie.jpg) no-repeat;
		background-size: 100%;
		height: 100%;
	}
	.slide4 {
		background: url(../../assets/img/swipe/longduo.jpg) no-repeat;
		background-size: 100%;
		height: 100%;
	}
	.slide5 {
		background: url(../../assets/img/swipe/qiaodan.jpg) no-repeat;
		background-size: 100%;
		height: 100%;
	}
</style>
