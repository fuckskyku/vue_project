<template>
	<div class="home">
		
	<!-- 	<Swipe></Swipe> -->
		<Banner></Banner>
		<div class="userList">
			<ul class="list scroll animated bounceInRight">
				<li v-for="(users,i) in userList">
					<router-link :to="{path:'/detail/id/'+ (i+1)}" >
						<div>
							<img :src="users.user.headimg" alt="">
						</div>
						<p>{{users.user.nickname}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="activeList animated rubberBand">
			<ul class="scroll">
				<li v-for="(active,i) in activeList">
					<router-link :to="{path:'/detail/id/'+ (i+1)}">
						<img :src="active.imageUrl" alt="">
						<div class="title">
							<p class="name" v-show="active.name!=''">#{{active.name}}#</p>
							<p class="data" v-show="active.data!=''">{{active.data + '已参与'}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
		<Bar></Bar>
		
	</div>
</template>

<script>
	// import Header from './base/Header'
	// import Swipe from './base/Swipe'
	import Banner from './base/Banner'
	import Bar from './base/Bar'
	export default {
		data() {
			return {
				arrList: {},
				userList: {},
				activeList: {}
			}
		},
		components: {
			// Header,
			// Swipe,
			Banner,
			Bar
		},
		mounted () {
			this.fetchData();
			this.userData();
			this.activeData();
		},
		methods: {
			fetchData() {
				let _this = this;
				this.$http.get('static/data/index.json').then(function(res){
					
					_this.arrList = res.data;
				}).catch(function(err){
					console.log(err);
				})
			},
			userData() {
				let _this = this;
				this.$http.get('static/data/user.json').then(function(res){
					
					_this.userList = res.data;
					// console.log(_this.userList);
				}).catch(function(err){
					console.log(err);
				})
			},
			activeData() {
				let _this = this;
				this.$http.get('static/data/active.json').then(function(res){
					// console.log(res.data);
					_this.activeList = res.data;
					// console.log(_this.activeList);
				}).catch(function(err){
					console.log(err);
				})
			}
		}
		
	}
	
	/*<div class="newList">
		<ul>
			<li v-for="(item,index) in arrList">
				<router-link :to="{path:'/detail/'+ item.id}">
					<!-- <h3>{{item.title}}</h3> -->
					
					<h3 v-html="item.title"></h3>
					
					<img :src="item.img" alt="">
					<!-- <p>{{item.content}}</p> -->
					<p v-html="item.content"></p>
				</router-link>
			</li>
		</ul>
	</div>*/
</script>

<style lang="less">
	::-webkit-scrollbar {
		width: 0px;
	}
	html{
		
		scrollbar-base-color: transparent;  
		scrollbar-base-color: transparent;  
		scrollbar-3dlight-color: transparent;  
		scrollbar-highlight-color: transparent;  
		scrollbar-track-color: transparent;  
		scrollbar-arrow-color: transparent;  
		scrollbar-shadow-color: transparent;  
		scrollbar-dark-shadow-color: transparent;
	}
	.home{
		// padding-top: 0.44rem;
		padding-bottom: 1rem;
		overflow: hidden;
		.scroll{
			scrollbar-arrow-color: transparent !important;
			scrollbar-base-color: transparent !important;
		}
		.userList{
			width: 100%;
			height: 2rem;
			overflow: hidden;
			overflow-y: hidden;
			margin-bottom: 0.2rem;
			.list{
				width: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
				text-align: center;
				margin: 0.3rem 0.1rem;
				
				li{
					display: inline-block;
					padding: 0.02rem;
					vertical-align: top;
					box-sizing: border-box;
					width: 25%;
					div{
						width: 1.2rem;
						height: 1.2rem;
						margin: 0 auto;
						border-radius: 50%;
						overflow: hidden;
						img{
							width: 100%;
							vertical-align: top;
						}						
					}	
					p{
						font-size: 0.2rem;
						color: black;
						text-indent: 0;
					}
				}
			}
		}
		.activeList{
			overflow: hidden;
			ul{
				width: 100%;
				overflow-x: scroll;
				overflow-y: hidden;
				white-space: nowrap;
				text-align: center;
				margin: 0.3rem 0.1rem;
				margin: 0 0 0.5rem 0;
				li{
					width: 4.4rem;
					height: 2.3rem;
					display: inline-block;
					vertical-align: top;
					box-sizing: border-box;
					margin: 0.5rem 0.1rem;
					position: relative;
					img{
						width: 100%;
						height: 100%;
					}
					.title{
						width: 100%;
						position: absolute;
						top: 50%;
// 						left: 50%;
// 						margin-left: -1.6rem;
						margin-top: -0.68rem;
						
						.name{
							color: white;
							font-size: 0.3rem;
							text-align: center;
						}
						.data{
							color: white;
							font-size: 0.28rem;
							text-align: center;
						}
					}
				}
			}
			
		}
	}
	h3{
		font-size: 0.55rem;
		color: black;
		// padding: 0.2rem 0;
	}
	hr{
		border-bottom: none;
		margin: 0.2rem 0;
	}
	img{
		width: 100%;
	}
	p{
		font-size: 0.34rem;
		color: #333333;
		text-indent: 0.4rem;
		padding: 0.1rem;
	}
</style>
