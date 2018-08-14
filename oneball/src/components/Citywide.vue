<template>
	<div class="city">
		<Bar></Bar>
		<div class="title animated bounceInDown">
			<div class="cur_city">
				当前城市:
				<span>厦门</span>
			</div>
			<div class="change">
				切换城市
			</div>
		</div>
		<div class="container animated jackInTheBox" id="container">
			<ul class="city_item">
				<li v-for="(item,index) in cityList" class="item">
					<div class="item_img">
						<img :src="item.imageUrl" alt="">
					</div>
					<p class="msg">{{item.content}}</p>
					<p class="heart">
						<i class="fa fa-heart-o"></i>
						<span>24</span>
						<i class="fa fa-comment-o"></i>
						<span>8</span>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Bar from './base/Bar'
		export default {
			data() {
				return {
					cityList: {}
				}
			},
			components: {
				Bar
			},
			mounted () {
				this.fetchData();
				this.clear();
			},
			methods: {
				fetchData() {
					let _this = this;
					this.$http.get('static/data/city.json').then(function(res){
						_this.cityList = res.data;				
						console.log(_this.cityList);
					}).catch(function(err){
						console.log(err);
					})
				},
				clear() {
					setTimeout(function () {
						container.className = "container"
					},800)
				}
			}
			
		}
</script>

<style scoped="scoped" lang="less">
	.city{
		overflow: hidden;
		padding-bottom: 1rem;
		.title{
			padding: 0.2rem 0.25rem;
			font-size: 0.32rem;
			border-bottom: 1px solid #f1f1f1;
			overflow: hidden;
			.cur_city{
				float: left;
				span{
					margin-left: 0.1rem;
				}
			}
			.change{
				float: right;
				color: #999999;
			}
			
		}
		.container{
					margin-top: 0.4rem;
					.city_item{
						text-align: center;
						.item{
							width: 45%;
							overflow: hidden;
							margin: 0.2rem 0.1rem;
							display: inline-block;
							vertical-align: top;
							.item_img{
								width: 100%;
								height: 3.9rem;
								img{
									// margin-left: -0.8rem;
// 									max-height: 100%;
// 									max-width: 100%;
									height: 100%;
									width: 100%;
								}
							}
							
// 							img[src="http://oneball-head.img-cn-shanghai.aliyuncs.com/4DBE786D-9FE6-48FC-81E5-70CC833282CF_700x700.jpeg"]{
// 							margin-left: -0.4rem;
// 		
// 							}
// 							img[src="http://oneball-head.img-cn-shanghai.aliyuncs.com/03912FAF-4890-48EB-B694-956FD4E54338_540x960.jpeg?http://imgcl.ioneball.com/video/0A14D4AF-9A56-4860-B38D-3283E3042861.mp4"]{
// 								margin: 0;
// 								width: 100%;
// 							}
							p{
								font-size: 0.3rem;
								color: #636363;
							}
							p.msg{
								white-space:nowrap;
								overflow:hidden;
								text-overflow:ellipsis;
								margin: 0.1rem 0;
								text-align: left;
							}
							p.heart{
								text-align: right;
							}
						}
					}
				}
		
	}
</style>
