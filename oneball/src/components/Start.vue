<template>
	<div class="starts">
		<div class="start">
		<!-- <div>
			<button><router-link to="/login">登录</router-link></button>
			<button><router-link to="/reg">注册</router-link></button>
		</div> -->
		<span>{{time}}</span>
		</div>
	</div>

</template>

<script>


	export default {
		data () {
			return {
				time: 3
			}
		},
		components:{
		
		},
		mounted() {
			this.goTo();
		},
		destroyed() {
			console.log('Test destroyed');
			
		},
		methods: {
			goTo(){
				var _this = this;
				setTimeout(function(){
					// window.location.href = '/#/login';
				},3000)
				var timer = setInterval(function(){
					_this.time--;
					console.log(_this.time)
				},1000)
				setTimeout(function(){
					clearInterval(timer)
				},3000)
			}
		}
	}
</script>


<style scoped lang="less">
	.starts{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
		z-index: 9999;
		overflow: hidden;
	}
	.start{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		/* margin-top: 60%; */
		background: url(../assets/bg.png) no-repeat;
		background-size: cover;
		color: #FE1B1B;
		span{
			display: inline-block;
			width: 0.4rem;
			height: 0.4rem;
			border-radius: 50%;
			border: 2px solid darkred;
			font-size: 0.34rem;
			text-align: center;
			line-height: 0.4rem;
			vertical-align: top;
			margin: 0.2rem;
		}
	}
	.start div{
		display: flex;
		flex-direction: column;
		padding: 0 5%;
	}
	.start div button{
		border: none;
		outline: none;
		border-radius: 10px;
		height: 50px;
		font-size: 20px;
	}
	.start div button:nth-child(1){
		background: #333;
		margin-bottom: 5%;
	}
	.start div button:nth-child(1) a{
		color: white;
	}
	.start div button:nth-child(2){
		background: #fff;
		border:1px solid #333;
	}
	.start div button:nth-child(2) a{
		color: #333;
	}
</style>