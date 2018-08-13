<template>
	<div class="select">
		<div class="tab">
			<ul>
				<li> 
					<span @click="toggleTab('sel')">精选</span>		
				</li>
				
				<li>
					
					<span @click="toggleTab('all')">全部</span>		
				
				</li>
			</ul>
		</div>
		<Sel :is="currentTab" keep-alive></Sel>
		
		
	</div>
</template>

<script>
	import Sel from './base/Sel'
	import All from './base/All'

	export default {
		data() {
			return {
				currentTab: 'sel', // currentTab 用于标识当前触发的子组件
				arrList: {},
				titleList: {}
			}
		},
		components: {
			Sel,
			All
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
				this.$http.get('static/data/details.json').then(function(res){
					// console.log(res.data);					
					console.log(res.data[id-1]);
					_this.arrList = res.data[id-1];
				}).catch(function(err){
					console.log(err);
				})
				
			},
			titleData(id) {
				let _this = this;
				this.$http.get('static/data/details.json').then(function(res){				
					console.log(res.data[id-1]);
					_this.titleList = res.data[id-1];
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
	.select{
		background: #f2f2f2;
		width: 100%;
		.tab{
			width: 100%;
			margin-bottom: .2rem;
			background: white;
			ul{
				display: flex;
				width: 80%;
				margin: 0 auto;
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
					a{
						color: #999;
					}
					span{
						padding: 0.2rem;
					}
				}
			}
		}
		
	}
</style>
