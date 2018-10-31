<template>
  <el-container style="margin:0 auto 20px;width:80%;box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
    <el-aside width="200px" :style="{backgroundImage:'url('+imgUrl+')'}">
      <div class="asideTop">
        <i class="el-icon-loading"></i>
      </div>
       <el-menu :default-openeds="['1']" style="border-right: none">
          <keep-alive><router-link to="/List/ScenicList"><el-menu-item index="1-1">景区简介</el-menu-item></router-link></keep-alive></keep-alive>
          <keep-alive><router-link to="/List/CultureList"><el-menu-item index="1-2">文化简介</el-menu-item></router-link></keep-alive>
          <keep-alive><router-link to="/List/PersonList"><el-menu-item index="1-3">名人简介</el-menu-item></router-link></keep-alive>
          <keep-alive><router-link to="/List/ImgList"><el-menu-item index="1-4">图片简介</el-menu-item></router-link></keep-alive>
      </el-menu>
    </el-aside>
    
    <el-container>
      <router-view/>
    </el-container>
  </el-container>
</template>
<script>
export default{
  data(){
    return{
      input10:'',
      imgUrl:require('../assets/img/Bitmap.png'),
    }
  }
}
</script>
<style scoped>
  .router-link-active{color: #409EFF! important;}
 .router-link-active > li{background: #dcebfd ! important;}
  .el-container{min-height: 800px;}
  .el-menu{background: transparent;}
  .el-menu a{width:100%;text-decoration: none;color: #303133;}
  .el-header {background-color: #B3C0D1;color: #333;line-height: 60px;}
  .el-aside {color: #333;background-position-y: bottom;background-repeat: no-repeat;background-position-x: center;}
  .el-main {background: #fff;border-left: 1px solid #f1f1f1;height: 740px;}
  .asideTop{background:transparent;width: 100%;height:121px;display: flex;align-items: center;justify-content: center;border-bottom: 1px solid #f1f1f1;}
  .el-icon-loading {display: block;width:80px;height:80px;border-radius: 50%;background: #fff;color:#528cfc;box-shadow: 0px 2px 1px rgba(0,0,0,.1);font-size: 30px;font-weight: bold;}
  .el-menu-item {border-bottom: 1px solid #f1f1f1;}
</style>