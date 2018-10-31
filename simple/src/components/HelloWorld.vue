<template>
  <div class="home">
  	<!-- <div class="imgBox"><img src="../assets/img/1.png"></div> -->
    <!-- <div><img-scroll></img-scroll></div> -->
	<el-carousel :interval="4000" type="card" style="width:80%;margin:20px auto 0;height:400px">
	    <el-carousel-item v-for="item in 6" :key="item">
	      <h3>{{ item }}</h3>
	    </el-carousel-item>
	</el-carousel>
    <ul id="item">
       <li v-for="item in products">
      <div class="imgBox"><img v-bind:src="item.icon1"></div>
      <div>
        <p class="top">{{ item.name}}</p>
        <p class="middle">{{ item.dis}}</p>
        <router-link :to="{path: item.path}" ><p class="bottom" style="margin-left: calc(100% - 120px);">{{ item.buttonName}}</p></router-link>
      </div>
    </li>
    </ul>
  </div>
</template>

<script>
  //import ImgScroll from "./ImgScroll"
  export default {
    // components:{
    //     ImgScroll
    //   },
    data () {
        return{
          products: [
                {
                  name: '首页',
                  path: '/List/ScenicList',
                  dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
                  //icon: '../assets/img/1.png',//此方法错误
                  buttonName: '景区',
                  icon1: require('../assets/img/1.png'),
                },
                {
                  name: '地区概况',
                  path: '/List/CultureList',
                  dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
                  //icon:'../assets/img/2.png',
                  buttonName: '文化',
                  icon1: require('../assets/img/2.png'),
                },
                {
                  name: '相关线路',
                  path: '/List/PersonList',
                  dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
                  //icon:'../assets/img/3.png',
                  buttonName: '名人',
                  icon1: require('../assets/img/3.png'),
                },
                {
                  name: '关于我们',
                  path: '/List/ImgList',
                  dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
                  //icon: '../assets/img/4.png',
                  buttonName: '图片',
                  icon1: require('../assets/img/4.png'),
                }
              ],
        }
    }
  }
</script>
<style scoped>
#item{display:flex;flex-wrap: wrap;list-style-type: none;padding:10px 0;width:80%;padding:0 10%;}
#item li{display:flex;width:calc(50% - 10px);height:200px;list-style-type: none;align-items: center;background:#fff;margin:10px 0;height: 200px;box-shadow: 0px 2px 2px rgba(0,0,0,.1)}
#item li:nth-child(even){margin-left:20px;}
#item li a{color:#fff;text-decoration: none}
.imgBox{display: flex;justify-content: center;width: 40%;}
.top{line-height: 40px;font-weight: bold;font-size:20px;}
.middle{line-height:30px;}
.bottom{width:100px;padding:4px 0;background:#1CB5D8;color:#fff;text-align: center}
.el-carousel__item h3 {color: #475669;font-size: 14px;opacity: 0.75;line-height: 200px;margin: 0;}
.el-carousel__item:nth-child(2n) {background-color: #99a9bf;}
.el-carousel__item:nth-child(2n+1) {background-color: #d3dce6;}
</style>
