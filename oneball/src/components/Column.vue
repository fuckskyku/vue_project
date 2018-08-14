<template>
	<div class="column">
		<div class="columnList">
			<Bar></Bar>
			<ul class="list animated bounceInRight">
				<li v-for="(column,i) in columntitleList" class="sub_nav">
					<!-- <router-link :to="{path:'/detail/'+ (i+1)}" > -->
						<span>{{column.tagName}}</span>
						<!-- <p>{{column.user.nickname}}</p> -->
					<!-- </router-link> -->
				</li>
			</ul>
			<ul class="item">
				<li v-for="(columns,index) in columnList" class="box animated flipInY">
					<div class="tit_img">
						<img :src="columns.activity.imageUrl" alt="">
					</div>
					<div class="content">
						<p>{{columns.title}}</p>
						<p>{{columns.subtitle}}</p>
						<p>
							<i class="fa fa-heart-o"></i>
							<span>12</span>
							<i class="fa fa-comment-o"></i>
							<span>21</span>
						</p>
					</div>
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
				columntitleList: {},
				columnList: {}
			}
		},
		components: {
			Bar
		},
		mounted () {
			this.fetchData();
			this.itemData();
			this.clear();
		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('static/data/columntitle.json').then(function(res){
					_this.columntitleList = res.data;				
					console.log(_this.columntitleList);
				}).catch(function(err){
					console.log(err);
				})
			},
			itemData() {
				let _this = this;
				this.$http.get('static/data/column.json').then(function(res){
					_this.columnList = res.data;				
					console.log(_this.columnList);
				}).catch(function(err){
					console.log(err);
				})
			},
			clear() {
				setTimeout(function () {
					var flash = document.getElementsByClassName('box');
					for(var i = 0;i < flash.length;i++){
						flash[i].className = "box";
					}
				},800);
			}
		}
		
	}
</script>

<style scoped="scoped" lang="less">
	.column{
		.columnList{
			overflow: hidden;
			padding-bottom: 1rem;
			.list{
				border-bottom: 1px solid #f1f1f1;
				width: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
				.sub_nav{
					display: inline-block;
					margin: -0.3rem 0.1rem 0 0.1rem;
					height: 0.48rem;
					background: rgba(204,204,204,0.25);
					padding: 0.04rem 0.3rem;
					line-height: 0.48rem;
					border: 1px solid transparent;
					border-radius: 0.48rem;
					font-size: 0.24rem;
					color: #8a8787;
					vertical-align: middle;
				}
				.sub_nav:hover{
					background: rgba(250,250,250,1);
					color: black;
					border: 1px solid black;
				}
			}
			.item{
				.box{
					overflow: hidden;
					padding: 0.2rem;
					border-bottom: 1px solid #f1f1f1;
					.tit_img{
						display: inline-block;
						width: 1.8rem;
						height: 1.8rem;
						vertical-align: middle;
						overflow: hidden;
						img{
							display: block;
							margin-left: -0.5rem;
							//height: 100%;
							width: 3rem;
							height: 1.8rem;
						}
					}
					.content{
						vertical-align: middle;
						display: inline-block;
						width: 4.6rem;
						overflow: hidden;
						p{
							white-space:nowrap;
							overflow:hidden;
							text-overflow:ellipsis;
							margin-bottom: 0.1rem;
						}
						p:nth-child(1){
							font-size: 0.28rem;
							text-align: left;
							overflow: hidden;
						}
						p:nth-child(2){
							font-size: 0.22rem;
							color: #ccc;
						}
						p:nth-child(3){
							font-size: 0.22rem;
							color: #ccc;
							text-align: right;
						}
					}
				}
			}
		}
	}
</style>
