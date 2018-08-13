<template>
	<div class="detail">
		<!-- <Header>详情</Header> -->
		<div class="nav" id="nav">
			<i class="fa fa-angle-left" @click="goBack"></i>		
			<span v-show="backTopShow">我的装逼时刻</span>
			<i class="fa fa-share-square-o"></i>
		</div>
		<div class="content">
			<div class="title">
				<img v-lazy="titleList.imageUrl" alt="">
				<div class="tit">
					<p class="name" v-show="titleList.name!=''">#{{titleList.name}}#</p>
					<p class="data" v-show="titleList.data!=''">{{titleList.data + '人参加'}}</p>
				</div>				
			</div>
			<p class="tip">
				拍下你的打球视频，再用壹球APP加上特效，比比看谁的球技更装逼？
			</p>
			<Select></Select>
			
		</div>
		<div class="join">
			参加话题
		</div>
	</div>
</template>

<script>
	import Select from './Select.vue'
	export default {
		data() {
			return {
				backTopShow:false,
				titleList: {},
				arrList: {},
				imgList: {}
// 				arr:'',
// 				news: ''
			}
		},
		components: {
			Select
		},
		created () {
// 			var none = document.getElementsByClassName("footer")[0];
// 			none.style.display="none"
		},
		mounted () {
			var reg = /\/detail\/id\/(\d+)/;
			// this.$route.params.id
			// console.log(this.$route)
			// console.log(this.$route.path.match(reg)[1]);
			var id = this.$route.path.match(reg)[1];
			this.fetchData(id);
			this.titleData(id);
			window.addEventListener('scroll',this.handleScroll);
		},
		destroyed() {
    		console.log('Test destroyed');
    		window.removeEventListener('scroll',this.handleScroll);
  		},
		methods: {
			fetchData(id) {
				let _this = this;
				this.$http.get('static/data/details.json').then(function(res){
					// console.log(res.data);					
					console.log(res.data[id-1]);
					

					_this.arrList = res.data[id-1];
					_this.imgList = res.data[id-1].imageUrl;
					console.log(_this.imgList);
// 					_this.arr = _this.arrList[parseInt(_this.$route.params.id-1)].img;
// 					_this.news = _this.arrList[parseInt(_this.$route.params.id-1)].content;
				}).catch(function(err){
					console.log(err);
				})
				
			},
			titleData(id) {
				let _this = this;
				this.$http.get('static/data/active.json').then(function(res){
					// console.log(res.data);					
					console.log(res.data[id-1]);
					_this.titleList = res.data[id-1];
					console.log(_this.titleList);
				}).catch(function(err){
					console.log(err);
				})
			},
// 			fetchData(id) {
// 				let _this = this;
// 				this.$http.get('static/data/index.json').then(function(res){
// 					// console.log(res.data);					
// 					// console.log(res.data[id-1]);
// 					_this.arrList = res.data[id-1];
// // 					_this.arr = _this.arrList[parseInt(_this.$route.params.id-1)].img;
// // 					_this.news = _this.arrList[parseInt(_this.$route.params.id-1)].content;
// 				}).catch(function(err){
// 					console.log(err);
// 				})
// 				
// 			},
			goBack () {
				this.$router.go(-1)
			},
			handleScroll(){
				var nav = document.getElementById('nav');
				if(document.documentElement.scrollTop + document.body.scrollTop > 50) {
					this.backTopShow = true;
					nav.style.background = "rgba(37,37,37,1)"
				} else {
					this.backTopShow = false;
					nav.style.background = "rgba(37,37,37,0)"
				}
				
			}
		}
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
// 	<!-- <h2>
// 		{{this.$route.params.id}}
// 	</h2> -->
// 	<!-- <img :src="this.arr" alt=""> -->			
// 	<div class="content"> 
// 		<div class="logo">
// 			<img :src="arrList.imageUrl" alt="">
// 			
// 			<h2 class="name">B站</h2>
// 		</div>
// 		<div class="count">
// 			<h3>{{arrList.title}}</h3>
// 			<!-- <p class="time">{{arrList.time | normalTime}}</p> -->
// 			<p class="time">2018-8-7</p>
// 			<div class="p" v-html="arrList.content"></div>
// 		</div>
// 	</div>
</script>

<style scoped="scoped" lang="less">
	.detail{
		position: absolute;
		z-index: 999;
		background: white;
		width: 100%;
		
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
			i:first-child{
				float: left;
				margin-left: 0.2rem;
			}
			i:last-child{
				float: right;
				margin-right: 0.2rem;
			}
			span{
				font-size: 0.38rem;
			}
		}
		.content{
			padding-bottom: 15rem;
			.title{
				width: 100%;
				height: 3.5rem;
				position: relative;
				img{
					width: 100%;
					height: 100%;
				}
				.tit{
					position: absolute;
					width: 100%;
					height: 2.4rem;
					top: 50%;
					left: 0;
					margin-top: -0.6rem;
					color: white;
					p{
						text-align: center;
					}
					p:first-child{
						color: whitesmoke;
						font-size: 0.4rem;
						margin-bottom: 0.15rem;
					}
					p:last-child{
						color: whitesmoke;
						font-size: 0.2rem;
					}
				}
			}
			.tip{
				padding: 0.2rem;
				padding-bottom: 0.8rem;
				font-size: 0.24rem;
				color: black;
				border-bottom: 1px solid #f1f1f1;
				text-align: left;
			}
			.tab{
				width: 80%;
				margin: 0 auto;
				ul{
					display: flex;
					width: 100%;
					li:first-child{
						border-right: 1px solid #F0F0F0;
					}
					li:hover{
						color: black;
						border-bottom: 1px solid #333;
					}
					li{
						display: flex;
						flex: 1;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						font-size: 0.34rem;
						color: #999;
						transition: all 0.5s;
						margin: 0.3rem 0;
						border-bottom: 1px solid transparent;
						span{
							padding: 0.2rem;
						}
					}
				}
			}
		}
		.join{
			position: fixed;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 1rem;
			line-height: 1rem;
			background: #ec4040;
			color: white;
			font-size: 0.4rem;
			text-align: center;
			
		}
		p{
			text-indent: 0;
		}
	}
</style>
