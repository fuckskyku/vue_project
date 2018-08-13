<template>
	<div class="find">
		<div class="header">
			发现
		</div>
		<div class="findList">
			<ul class="list">
				<li class="item animated flipInY" v-for="(find,index) in findList">
					<img v-lazy="find.imageUrl" :alt="find.title">
					{{find.title}}
					
					<i class="fa fa-angle-right"></i>
					<span v-show="find.content!=''">{{find.content}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				findList: {}
			}
		},
		components: {
			
		},
		mounted () {
			this.fetchData();
			this.clear();
		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('static/data/icon.json').then(function(res){
					_this.findList = res.data;				
					console.log(_this.findList);
				}).catch(function(err){
					console.log(err);
				})
			},
			clear() {
				var item = document.getElementsByClassName('item');				
				setTimeout(function () {
					for(var i = 0;i < item.length;i++){
						item[i].className = "item";
					}
					
				},800)
			}
		}
		
	}
</script>

<style scoped="scoped" lang="less">
	.find{
		padding-bottom: 1rem;
		.header{
			text-align: center;
			color: white;
			width: 100%;
			height: 1.16rem;
			background: #252525;
			font-size: 0.4rem;
			line-height: 1.16rem;
		}
		.findList{
			
			.list{
				.item{
					// position: relative;
					margin: 0.2rem;
					padding: 0.2rem;
					font-size: 0.34rem;
					border-bottom: 1px solid #f1f1f1;
					img{
						width: 0.6rem;
						height: 0.6rem;
						vertical-align: middle;
						margin-right: 0.2rem;
					}
					span{
						font-size: 0.34rem;
						color: #ababab;
						float: right;
						margin-right: .2rem;
					}
					i{
						font-size: 0.4rem;
						color: #ababab;
						float: right;
						line-height: 0.5rem;
					}
					
				}
			}
			
		}
	}
</style>
