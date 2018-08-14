<template>
	<div class="all">
		<div class="user" v-for="(detail,index) in titleList">
			<div class="title">
				<div class="head">
					<img v-lazy="detail.user.headimg" alt="">
				</div>
				<div class="msg">
					<p>{{detail.user.nickname}}<span class="lv">lv-{{detail.user.userLevel}}</span></p>
					<p>{{detail.createTimeString}}</p>
				</div>
			</div>
			<div class="content">
				<div class="img">
					<!-- <img v-lazy="detail.imageUrl" alt=""> -->
					<video :src="detail.videoUrl" controls="controls" :poster="detail.imageUrl"></video>
				</div>
				<div class="share">
					<i class="fa fa-heart-o"></i>
					<i class="fa fa-comment-o"></i>
					<i class="fa fa-share"></i>
				</div>
				<div class="foot">
					<p><a href="#">{{detail.user.nickname}}: #我的装逼时刻#</a></p>
					<p><i class="fa fa-heart-o"></i><span>24</span>赞</p>
					<p><i class="fa fa-comment-o"></i><span>8</span>评论</p>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	export default {
		data() {
			return {
				arrList: {},
				titleList: {}
			}
		},
		components: {

		},
		created () {

		},
		mounted () {
			var reg = /\/detail\/id\/(\d+)/;
			var id = this.$route.path.match(reg)[1];
			this.fetchData(id);
			this.titleData(id);
			window.addEventListener('scroll',this.handleScroll);
		},
		methods: {
			fetchData(id) {
				let _this = this;
				this.$http.get('static/data/all.json').then(function(res){					
					// console.log(res.data[id-1]);
					_this.arrList = res.data[id-1];
				}).catch(function(err){
					console.log(err);
				})
				
			},
			titleData(id) {
				let _this = this;
				this.$http.get('static/data/all.json').then(function(res){				
					console.log(res.data);
					_this.titleList = res.data;
					console.log(_this.titleList);
				}).catch(function(err){
					console.log(err);
				})
			},
			toggleTab: function(tab) {
				this.currentTab = tab; // tab 为当前触发标签页的组件名
			}
		}
		
	}	
</script>

<style scoped="scoped" lang="less">
	.all{
		background: white;
		width: 100%;
		overflow: hidden;
		.user{
			
			background: white;
			.title{
				padding: 0.2rem;
				overflow: hidden;
				.head{
					width: 0.8rem;
					height: 0.8rem;
					border-radius: 50%;
					overflow: hidden;
					display: inline-block;
					vertical-align: middle;
					img{
						width: 100%;
						height: 100%;
						vertical-align: top;
					}
				}
				.msg{
					display: inline-block;
					vertical-align: middle;
					p{
						// margin-left: -0.4rem;
						color: #9a9a9a;
						font-size: 0.24rem;
						.lv{
							color: #ff4b4b;
							margin-left: 0.1rem;
						}
					}
					p:first-child{
						
					}
					p:last-child{
						
					}
				}
			}
			.content{
				.img{
					width: 100%;
					video{
						width: 100%;
					}
					img{
						width: 100%;
					}
				}
				.share{
					padding: 0.2rem;
					height: 0.5rem;
					line-height: 0.5rem;
					text-align: left;
					border: 1px solid #f1f1f1;
					border-left: none;
					border-right: none;
					i{
						font-size: 0.34rem;
						line-height: 0.5rem;
						color: #999;
						vertical-align: top;
					}
				}
				.foot{
					p{	
						padding: 0.08rem 0.2rem;
						font-size: 0.24rem;
						color: #999;
						span{
							margin: 0 0.1rem;
						}
						a{
							text-decoration: none;
							font-size: 0.24rem;
						}
					}
				}
			}
		}
		
	}
</style>
