<template>
  <el-container style="margin:auto;width:80%;box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
    <el-aside width="200px" style="background-color:#fff">
     <!--  <el-menu :default-openeds="['1', '3']"> -->
       <el-menu :default-openeds="['1']" style="border-right: none">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-message"></i>导航一</template>
         <!--  <el-menu-item-group> -->
            <router-link to="/SelfResearch/Form"><el-menu-item index="1-1">选项1</el-menu-item></router-link>
            <router-link to="/SelfResearch/Table"><el-menu-item index="1-2">选项2</el-menu-item></router-link>
            <router-link to="/SelfResearch/Other"><el-menu-item index="1-3">选项3</el-menu-item></router-link>
         <!--  </el-menu-item-group> -->
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>导航二</template>
          <!-- <el-menu-item-group> -->
            <router-link to="/SelfResearch/Form"><el-menu-item index="2-1">选项1</el-menu-item></router-link>
            <router-link to="/SelfResearch/Table"><el-menu-item index="2-2">选项2</el-menu-item></router-link>
            <router-link to="/SelfResearch/Other"><el-menu-item index="2-3">选项3</el-menu-item></router-link>
          <!-- </el-menu-item-group>  -->
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-setting"></i>导航三</template>
          <!-- <el-menu-item-group> -->
            <router-link to="/SelfResearch/Form"><el-menu-item index="3-1">选项1</el-menu-item></router-link>
            <router-link to="/SelfResearch/Table"><el-menu-item index="3-2">选项2</el-menu-item></router-link>
            <router-link to="/SelfResearch/Other"><el-menu-item index="3-3">选项3</el-menu-item></router-link>
          <!-- </el-menu-item-group> -->
        </el-submenu>
      </el-menu>
    </el-aside>
    
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>      
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>

</script>
<style scoped>
  .router-link-active{color: #409EFF! important;}
  .router-link-active > li{background: #dcebfd ! important;}
  .el-submenu a{width:100%;text-decoration: none;color: #303133;}
  .el-header {background-color: #B3C0D1;color: #333;line-height: 60px;}
  .el-aside {color: #333;}
</style>