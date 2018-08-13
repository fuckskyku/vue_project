<template>
	<div class="starts">
		<div class="start">
		<div>
			<button><router-link to="/login">登录</router-link></button>
			<button><router-link to="/reg">注册</router-link></button>
		</div>
	</div>
	</div>

</template>

<script>


export default {
  data () {
     return {
       
     }
  },
  components:{
 	
 }
  }
</script>


<style scoped>
.starts{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: white;
	z-index: 9999;
	overflow: hidden;
}
.start{
    width: 100%;
    height: 100%;
	margin-top: 60%;
   /*  background: url(../assets/img/bg.png) no-repeat center center;
   background-size: cover; */
    
}
.start div{
    display: flex;
    flex-direction: column;
    padding: 0 5%;
}
.start div button{
    border: none;
    outline: none;
    border-radius: 10px;
    height: 50px;
    font-size: 20px;
}
.start div button:nth-child(1){
    background: #333;
    margin-bottom: 5%;
}
.start div button:nth-child(1) a{
    color: white;
}
.start div button:nth-child(2){
    background: #fff;
    border:1px solid #333;
}
.start div button:nth-child(2) a{
    color: #333;
}
</style>