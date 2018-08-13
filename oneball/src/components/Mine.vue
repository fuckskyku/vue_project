<template>
	<div class="mine">
		<div class="nav animated bounceInLeft" id="nav">
			<i class="fa fa-bell-o lt"></i>		
			<span v-show="backTopShow"><i>ONEBALL</i></span>
			<i class="fa fa-pencil rt"></i>
		</div>
		<div class="back">
			
			<p class="animated bounceInRight">
				<span>#{{personList.poloshirt}}</span>
				<span>{{personList.position}}</span>
			</p>
		</div>
		<div class="user">
			<div class="headimg animated rotateIn">
				<img v-lazy="personList.headimg" alt="">
			</div>
			<div class="title">
				<h1>{{personList.nickname}}</h1>
				<p>
					<span>{{personList.sex}}</span> · <span>{{personList.city}}</span>
				</p>
			</div>
			<ul class="fans">
				<li>
					<b>0</b>
					动态
				</li>
				<li>
					<b>0</b>
					关注
				</li>
				<li>
					<b>0</b>
					粉丝
				</li>
			</ul>
		</div>
		<div class="func">
			<ul>
				<li>
					<img src="../assets/img/mine/mine_03.png" alt="">
					<span>打卡</span>
				</li>
				<li>
					<img src="../assets/img/mine/mine_05.png" alt="">
					<span>下载</span>
				</li>
				<li>
					<img src="../assets/img/mine/mine_07.png" alt="">
					<span>收藏</span>
				</li>
				<li>
					<img src="../assets/img/mine/mine_09.png" alt="">
					<span>能力测试</span>
				</li>
			</ul>
		</div>
		<div class="account">
			<ul>
				<li>
					<span>我的账户</span>
					<span>
						<img src="../assets/img/mine/mine_16.png" alt="">
						<span>662</span>
					</span>
				</li>
				<li>
					<span>会员等级</span>
					<span>
						<img src="../assets/img/mine/mine_19.png" alt="">
						<span>LV.0</span>
					</span>
				</li>
				<li>
					<span>我的成就</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
				<li>
					<span>我的相册</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
			</ul>
			
		</div>
		<div class="account">
			<ul>
				<li>
					<span>我的球队</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
				<li>
					<span>我的训练营</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
				<li>
					<span>我的订单</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
			</ul>
			
		</div>
		<div class="account">
			<ul>
				<li>
					<span>设置</span>
					<span>
						<span><i class="el-icon-arrow-right"></i></span>
					</span>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				personList: {},
				dis: 50,
				backTopShow:false
			}
		},
		mounted () {
			this.fetchData();
			window.addEventListener('scroll',this.handleScroll);
		},
		destroyed() {
    		console.log('Test destroyed');
    		window.removeEventListener('scroll',this.handleScroll);
  		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('static/data/person.json').then(function(res){
					console.log(res.data[0])
					_this.personList = res.data[0];
				}).catch(function(err){
					console.log(err);
				})
			},
			handleScroll(){
				let _this = this;
				var nav = document.getElementById('nav');
				if(document.documentElement.scrollTop + document.body.scrollTop > 50) {
					this.backTopShow = true;
					nav.style.background = "rgba(37,37,37,1)"
					console.log(_this.dis);
				} else {
					this.backTopShow = false;
					nav.style.background = "rgba(37,37,37,0)"
				}
				
			}
		}
	}
</script>

<style scoped="scoped" lang="less">
	.mine{
		background: #f2f2f2;
		padding-bottom: 1rem;
		overflow: hidden;
		div{
			background: white;
		}
		.nav{
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
		}
		.back{
			width: 100%;
			height: 2.4rem;
			background: url(../assets/img/camp.jpg)  no-repeat;
			background-size: 100%;
			overflow: hidden;
			p{
				line-height: 1.2rem;
				height: 1.2rem;
				padding: 0 0.2rem;
				font-size: 0.48rem;
				margin-top: 1.2rem;
				i{
					line-height: 1.2rem;
					color: white;
				}
				i:first-child{
					float: left;
				}
				i:last-child{
					float: right;
					
				}
				span{
					line-height: 1.2rem;
					color: white;
					font-family: "黑体";
					font-weight: 600;
					font-size: 0.55rem;
				}
				span:first-child{
					float: left;
				}
				span:last-child{
					float: right;
					
				}
			}
			p:last-child{
				padding: 0 0.8rem;
			}
		}
		.user{
			width: 100%;
			height: auto;
			text-align: center;
			background: white;
			padding-top: 1rem;
			position: relative;
			
			.headimg{
				width: 2.2rem;
				height: 2.2rem;
				border-radius: 50%;
				position: absolute;
				top: -1.1rem;
				left: 50%;
				margin-left: -1.1rem;
				overflow: hidden;
				img{
					width: 100%;
				}
			}
			.title{
				h1{
					font-weight: 500;
					font-size: 0.5rem;
					margin: 0.2rem 0 0.12rem 0;
				}
				p{
					font-size: 0.3rem;
					color: #9e9e9e;
				}
			}
			.fans{
				width: 100%;
				display: flex;
				margin: 0.3rem 0;
				padding-bottom: 0.5rem;
				li{
					display: flex;
					flex: 1;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					font-size: 0.24rem;
					color: #9a9a9a;
					
					b{
						color: #555;
						font-size: 0.4rem;
						margin: 0 0.1rem;
					}
				}
				li:nth-child(2){
					border-left: 1px solid #f1f1f1;
					border-right: 1px solid #f1f1f1;
				}
			}
			
		}
		.func{
			padding: 0.2rem;
			margin-bottom: 0.2rem;
			ul{
				width: 100%;
				display: flex;
				
				li{
					font-size: 0.3rem;
					display: flex;
					flex: 1;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					span{
						color: #b5b5b5;
						margin: 0.1rem 0;
					}
					img{
						width: 0.54rem;
						
					}
				}
			}
		}
		.account{
			width: 100%;
			margin-bottom: 0.2rem;
			ul{
				
				li{
					border-bottom: 1px solid #f1f1f1;
					padding: 0.05rem 0.2rem;
					height: 1.1rem;
					line-height: 1.1rem;
					span:first-child{
						float: left;
						color: black;
						font-size: 0.3rem;
					}
					span:last-child{
						float: right;
						color: #666;
						font-size: 0.22rem;
						img{
							width: 0.5rem;
							height: 0.5rem;
							vertical-align: middle;
							margin-right: 0.1rem;
						}
					}
				}
			}
		}
	}
</style>
