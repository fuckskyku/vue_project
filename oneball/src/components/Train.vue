<template>
	<div class="train">
		<div class="header">
			<i class="fa fa-pie-chart"></i>
			训练
			<i class="fa fa-plus" @click="goBack"></i>
		</div>
		<!-- <div class="nav animated bounceInLeft" id="nav">
			<i class="fa fa-pie-chart"></i>
			<span v-show="backTopShow">训练</span>
			<i class="fa fa-plus" @click="goBack"></i>
		</div> -->
		<div class="content">
			<div class="test animated jello">
				<div class="ball animated fadeInLeft">
					<i class="iconfont icon-ball"></i>
					打卡
				</div>
				<div class="c1">
					<div class="c2">
						<span>0</span>
					</div>
				</div>
				<p>点击分数查看测试记录</p>
				<ul>
					<li>
						累计训练
						<span><b>0</b>天</span>
					</li>
					<li>
						课程总分
						<span><b>0</b>分</span>
					</li>
					<li>
						完成动作
						<span><b>0</b>个</span>
					</li>
				</ul>
			</div>
			<div class="add animated fadeInRight">
				<p>添加训练课程</p>
			</div>
			<p class="camp_title">
			{{arr.title}}
			<i class="fa fa-angle-right"></i>
			</p>
			<ul class="camp_list animated zoomIn" id="camp">
				<li v-for="(train,index) in trainList" class="item">
					<div class="camp_img">
						<img v-lazy="train.imageUrl" alt="">
					</div>
					<p class="title">{{train.title}}</p>
				</li>
			</ul>
			
			
		</div>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		data() {
			return {
				trainList: {},
				arr: {},
				backTopShow:false
			}
		},
		mounted() {
			this.clear();
			this.getData();
		},
		destroyed() {
    		console.log('Test destroyed');
  		},
		methods: {
			
			goBack () {
				this.$router.go(-1)
			},
			getData() {
				let _this = this;
				this.$http.get('static/data/train.json').then(function(res){
					console.log(res.data.data.banner2.items);					
					_this.trainList = res.data.data.banner2.items;
					_this.arr = res.data.data.banner2;
					console.log(_this.arr)
// 					_this.arr = _this.arrList[parseInt(_this.$route.params.id-1)].img;
// 					_this.news = _this.arrList[parseInt(_this.$route.params.id-1)].content;
				}).catch(function(err){
					console.log(err);
				})
			},
			clear() {
				var camp = document.getElementById('camp');
				setTimeout(function () {
					camp.className = "camp_list";
				},800)
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	::-webkit-scrollbar {
		width: 0px;
	}
	/*::scrollbar {
		width: 0px;
	}*/
	.train{
		width: 100%;
		overflow: hidden;
		.header{
			text-align: center;
			color: white;
			width: 100%;
			height: 1.16rem;
			background: #252525;
			font-size: 0.4rem;
			line-height: 1.16rem;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 99;
			i:nth-child(1){
				position: absolute;
				left: 0.25rem;
				line-height: 1.16rem;				
			}
			i:nth-child(2){
				position: absolute;
				right: 0.25rem;
				line-height: 1.16rem;				
			}
		}
		/*.nav{
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			position: fixed;
			text-align: center;
			font-size: 0.44rem;
			background: rgba(37,37,37,0);
			color: white;
			top: 0;
			left: 0;
			z-index: 99;
			transition: all 0.5s;
			i{
				line-height: 1rem;				
			}
			i.lt{
				float: left;
				margin-left: 0.2rem;
			}
			i.rt{
				float: right;
				margin-right: 0.2rem;
			}
			span{
				font-size: 0.38rem;
			}
		}*/
		.content{
			padding-top: 1.16rem;
			padding-bottom: 1.2rem;
			width: 100%;
			.test{
				width: 100%;
				height: 4.7rem;
				background: #fafafa;
				color: #ddd;
				position: relative;
				overflow: hidden;
				.ball{
					position: absolute;
					width: 1.3rem;
					height: 0.56rem;
					line-height: 0.58rem;
					text-align: left;
					background: #fe1b1b;
					right: -0.3rem;
					top: 50%;
					margin-top: -0.28rem;
					border-radius: 0.56rem;
					font-size: 0.2rem;
					color: white;
					padding: 0.06rem;
					animation-delay: 1s;
					i{
						vertical-align: middle;
						font-size: 0.44rem;
					}
				}
				.c1{
					width: 2.5rem;
					height: 2.5rem;
					padding: 0.2rem;
					margin: 0 auto;
					text-align: center;
					background: #f1f1f1;
					border-radius: 50%;
					.c2{
						width: 2.5rem;
						height: 2.5rem;
						line-height: 2.2rem;
						background: #fafafa;
						text-align: center;
						margin: 0 auto;
						border-radius: 50%;
						color: #999;
					}
				}
				p{
					padding: 0.2rem;
					text-align: center;
					font-size: 0.24rem;
					
				}
				ul{
					width: 100%;
					display: flex;
					li{
						display: flex;
						flex: 1;
						flex-direction: column;//元素上下布局
						justify-content: center;//水平居中
						align-items: center;//垂直居中
						font-size: 0.24rem;
						color: #9a9a9a;
						b{
							color: #666;
							font-size: 0.4rem;
							margin: 0 0.1rem;
						}
					}
					li:nth-child(2){
						border-left: 1px solid #f2f2f2;
						border-right: 1px solid #f2f2f2;
					}
				}
			}
			.add{
				width: 100%;
				height: 3rem;
				background: url(../assets/img/camp.jpg) no-repeat;
				background-size: cover;
				animation-duration: 0.5s;
				p{
					width: 44%;
					text-align: center;
					position: relative;
					top: 36%;
					margin: 0 auto;					
					padding: 0.1rem 0;
					border: 1px solid #fff;
					color: white;
					font-size: 0.36rem;
				}
			}
			.camp_title{
				font-size: 0.28rem;
				padding: 0.2rem;
				background: #f2f2f2;

				i{
					font-size: 0.45rem;
					float: right;
					line-height: 0.45rem;
				}
			}
			.camp_list{
				font-size: 0.25rem;
				width: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
				.item{
					display: inline-block;
					margin: 0.1rem;
					vertical-align: top;
					box-sizing: border-box;				
					text-align: center;
					.camp_img{
						width: 3.8rem;
						height: 2rem;
						margin: 0 auto;
						img{
							width: 100%;
							height: 100%;
						}
					}
					p.title{
						padding: 0.15rem 0;
						font-size: 0.25rem;
						color: black;
					}
				}
			}
			
			
			
			
			
			
			
			
			
			
			.d{
				display: flex;
				ul{
					li{
						margin-bottom: 0.2rem;
						display: flex;
						justify-content: center;
						padding: 0 0.2rem;
						font-weight: 100;
						img{
							width: 40%;
							height: 1.6rem;
						}
						p{
							font-size: 0.3rem;
						}
					}
					list-style: none;
					
				}
			}
		}
	}
</style>
