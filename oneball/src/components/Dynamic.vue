<template>
	<div class="dynamic">
		<Bar></Bar>
		<div class="container animated fadeInRight" id="container">
			<ul class="dynamic_item">
				<li v-for="(item,idnex) in dynamicList" class="list">
					<img :src="item.imageUrl[0]" alt="">
					<p class="msg">{{item.content}}</p>
					<p class="heart">
						<i class="fa fa-heart-o"></i>
						<span>24</span>
						<i class="fa fa-comment-o"></i>
						<span>8</span>
					</p>
					<!-- <div  class="item">
						
					</div> -->
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
				dynamicList: {}
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
				this.$http.get('static/data/dynamic.json').then(function(res){
					_this.dynamicList = res.data;				
					console.log(_this.dynamicList);
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
	.dynamic{	
		.container{
			margin-top: 0.4rem;
			padding-bottom: 1rem;
			.dynamic_item{
				text-align: center;
				.list{
					width: 45%;
					overflow: hidden;
					margin: 0.2rem 0.1rem;
					display: inline-block;
					vertical-align: top;
					text-align: center;
					img{
						margin-left: -0.8rem;
						height: 3.9rem;
					}
					img[src="http://oneball-head.img-cn-shanghai.aliyuncs.com/4DBE786D-9FE6-48FC-81E5-70CC833282CF_700x700.jpeg"]{
					margin-left: -0.4rem;

					}
					img[src="http://oneball-head.img-cn-shanghai.aliyuncs.com/03912FAF-4890-48EB-B694-956FD4E54338_540x960.jpeg?http://imgcl.ioneball.com/video/0A14D4AF-9A56-4860-B38D-3283E3042861.mp4"]{
						margin: 0;
						width: 100%;
					}
					p{
						font-size: 0.3rem;
						
						color: #636363;
					}
					p.msg{
						white-space:nowrap;
						overflow:hidden;
						text-overflow:ellipsis;
						margin: 0.1rem 0;
					}
					p.heart{
						text-align: right;
					}
				}
			}
		}
	}
</style>
