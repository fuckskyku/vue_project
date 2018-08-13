<template>
   <div class="mine">
   	   <i class="fa fa-home back-top"  @click="backTop()" v-show="backTopShow"></i>
   </div>

</template>

<script>
/*1.判断浏览器是否发生了滚动2.判断滚动后图标显示或隐藏 3.返回顶部*/
export default {
  data () {
     return {
        backTopShow:false
     }
  },
  mounted(){
     window.addEventListener('scroll',this.handleScroll)
  },
  methods:{
     backTop () {
     	   let back = setInterval(() => {
     	   	//获取当前页面滚动条纵坐标的位置
     	   	 if(document.body.scrollTop||document.documentElement.scrollTop){
     	   	 	document.body.scrollTop -=50;
     	   	 	document.documentElement.scrollTop-=50;
     	   	 }else {
     	   	 	clearInterval(back)
     	   	 }
     	   })  		
     },

     handleScroll(){
     	if(document.documentElement.scrollTop + document.body.scrollTop > 50) {
     		this.backTopShow = true;
     	} else {
     		this.backTopShow = false;
     	}
     	
     }
    }
  }
</script>


<style>
.back-top {
   position: fixed;
   right: 10px;
   bottom:180px;
 } 
</style>