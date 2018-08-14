<template>
	<div class="bill">
		<Bar></Bar>
		<ul class="list animated bounceInLeft">
			<li v-for="(title,i) in titleList" class="sub_nav">
				<span>{{title.tagName}}</span>
			</li>
		</ul>
		<div class="container animated fadeInLeft" id="container">
			<ul class="bill_item">
				<li v-for="(item,idnex) in billList" class="item">
					<img v-lazy="item.imageUrl[0]" alt="">
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
				billList: {},
				titleList: {}
			}
		},
		components: {
			Bar
		},
		mounted () {
			this.fetchData();
			this.titleData();
			this.clear();
		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('static/data/dynamic.json').then(function(res){
					_this.billList = res.data;				
					console.log(_this.billList);
				}).catch(function(err){
					console.log(err);
				})
			},
			titleData() {
				let _this = this;
				this.$http.get('static/data/billtitle.json').then(function(res){
					_this.titleList = res.data;				
					console.log(_this.titleList);
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
	.bill{	
		overflow: hidden;
		padding-bottom: 1rem;
		.list{
			width: 300%;
			border-bottom: 1px solid #f1f1f1;
			.sub_nav{
				display: inline-block;
				margin: -0.3rem 0.1rem 0 0.1rem;
				height: 0.48rem;
				background: rgba(204,204,204,0.25);
				padding: 0.04rem 0.3rem;
				line-height: 0.48rem;
				border: 1px solid transparent;
				border-radius: 0.48rem;
				font-size: 0.1rem;
				color: #8a8787;
				vertical-align: middle;
			}
			.sub_nav:hover{
				background: rgba(250,250,250,1);
				color: black;
				border: 1px solid black;
			}
		}
		.container{
			margin-top: 0.4rem;
			.bill_item{
				text-align: center;
				.item{
					width: 45%;
					overflow: hidden;
					margin: 0.2rem 0.1rem;
					display: inline-block;
					vertical-align: top;
					img{
						margin-left: -0.8rem;
						height: 4rem;
						width: 4.8rem;
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
