<template>
    <div class="login">
        <div class="wb_head">
            <!--<i class="fa fa-angle-left" onclick="window.history.back()"></i>-->
            <!-- <span>用户登录</span> -->
        </div>
		<div class="logo">
			<img src="../assets/m-oneball-logo.png" alt="">
		</div>
        <div class="form">
			<p class="p">
				<i class="fa fa-user-o"></i>
				<input type="text"  placeholder="账户" v-model="username" class="a"></input>
			</p>
			<p class="p">
				<i class="fa fa-lock"></i>
				<input placeholder="密码" type="password" v-model="password" class="a"></input>
			</p>
			<p class="re">
				<router-link to="/reg">注册</router-link><span>|</span><a href="#">忘记密码？</a>
			</p>
			<p class="btn">
				<button size="normal"  @click="login">登 录</button>
			</p>
			
        </div>
		<div class="icon">
			<ul>
				<li><i class="fa fa-weibo"></i></li>
				<li><i class="fa fa-wechat"></i></li>
				<li><i class="fa fa-qq"></i></li>
			</ul>
		</div>
    </div>
</template>
<script>
export default {
    name:'Login',
    data(){
        return{
            username: '',
            password: ''
        }
    },
    computed:{
        users(){
            return this.$store.state.users
        }
    },
    methods:{
        login(){
          var that = this;
          var flag = false;
            this.users.forEach(function(user){
				if(user.username == that.username && user.password == that.password){
					flag = true;
					that.$store.commit('setName',that.username);
					window.location.href = '/#/home';
				}
//                 if(user.username == that.username && user.password == that.password){
//                       that.$store.commit('setName',that.username);
//                       window.location.href='/#/home';
//                       flag=true
//                       return
//                 }
            });
            if(!flag){
                alert('用户名|密码错误')
            }
        }         
    }
}
</script>
<style scoped lang="less">
	.login{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background: white;
		background: url(../assets/background.jpg) no-repeat;
		background-size: cover;
		z-index: 9999;
		overflow: hidden;
		.logo{
			width: 100%;
			text-align: center;
			margin-top: 28%;
			img{
				width: 3.5rem;
				height: 1.1rem;
			}
		}
	}
	.wb_head{
		height: 50px;
		width: 100%;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 5%;
		align-items: center;
		color: white;
		font-size: 18px;
		//margin-bottom: 10%;
		position: fixed;
		top: 0;
		left: 0;
	}
	.wb_head i{
		font-size: 28px;
	}
	.form{
		/* margin-left:60px; */
		text-align: center;
		
		.p{
			position: relative;
			i{
				color: white;
				font-size: 0.38rem;
				position: absolute;
				left: 0.2rem;
				top: 55%;
				// margin-top: -0.19rem;
				// vertical-align: middle;
			}
		}
		.re{
			margin: 0.4rem 0;
			text-align: right;
			font-size: 0.25rem;
			color: white;
			span{
				margin: 0 0.1rem;
			}
			a{
				color: white;
				
			}
		}
	}
	label{
		font-size: 0.4rem;
		color: white;
	}

	.form input {
		 background: #fff;
		 background: transparent;
		 color: white;
		 border: none;
		 border-bottom: 1px solid #999695;
		 outline: none;
		 font-size: 0.38rem;
		 width: 100%;
		 padding-left: 0.6rem;
	}
	input::-webkit-input-placeholder {
          /* placeholder颜色  */
        color: snow;
         /* placeholder字体大小  */
        font-size: 0.36rem;
         /* placeholder位置  */
        text-align: left;
     }
	.form button {
		 background:red;
		 width: 80px;
		 height: 30px;
		 border: none;
		 color: white;
	}

	.a{
		width: 50%;
		height: 30px;
	}
	.btn{
		width: 100%;
		button{
			width: 100%;
			background: #ff4140;
			height: 1rem;
			font-size: 0.4rem;
		}
	}
	.icon{
		ul{
			text-align: center;
			width: 100%;
			margin: 0.6rem auto;
			li{
				display: inline-block;
				width: 0.86rem;
				height: 0.86rem;
				line-height: 0.86rem;
				border: 1px solid #999695;
				border-radius: 50%;
				margin: 0.2rem .5rem;
				cursor: pointer;
				i{
					color: #999695;
					font-size: 0.42rem;
					vertical-align: top;
					line-height: 0.86rem;
				}
			}
		}
	}
</style>

