<template>
    <div class="reg">
        <div class="wb_head">
            <i class="el-icon-arrow-left" onclick="window.history.back()"></i>
            <span>用户注册</span>
            <i class="fa fa-qrcode"></i>
        </div>
        <mt-field label="用户名" placeholder="请输入用户名" v-model="user.username" class="a"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="user.password" class="a"></mt-field>
        <mt-field label="确认密码" placeholder="请再次输入密码" type="password" class="a"></mt-field>
        <mt-button size="large" type="default" @click="reg" class="btn">提交注册</mt-button>
    </div>
</template>
<script>
export default {
    name:'Reg',
    data(){
        return{
            user:{}
        }
    },
    methods:{
      reg(){
            console.log(this.user)
           this.$store.commit('reg',this.user);
            window.location.href='/#/login';
        }
 }
}
</script>
<style scoped>
	.reg{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: white;
		z-index: 9999;
	}
	.wb_head{
		height: 50px;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 0 5%;
		align-items: center;
		font-size: 18px;
		margin-bottom: 5%;
	}
	.wb_head i{
		font-size: 28px;
	}
	.a{
		margin-bottom: 5%;
	}
	.btn{
		background: #333;
		color: whitesmoke;
	}
</style>

