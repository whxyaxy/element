<template>
  <el-container style="width:80%;margin:20px auto"> 
    <el-main>
      <el-row style="display:flex;justify-content: space-between;">
         <!-- v-for="item in agentList" -->
      <!-- <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 3 : 0"> -->
        <el-col :span="5" v-for="(item, index) in agentList" :key="item.id" :offset="index > 0 ? 1 : 0">
       <!--  <el-card :body-style="{ padding: '0px' }"> -->
         <el-card>
          <img :src="item.icon1" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <time class="time">{{ item.currentDate }}</time>
              <!-- <el-button type="text" class="button" @click="fetchGet">查看详情</el-button> -->
             <!--  <el-button type="text" class="button"><router-link to="/Agent/List">查看详情</router-link></el-button> -->
              <router-link :to="{path:item.path}"><el-button type="text" class="button">查看详情</el-button></router-link>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div style="width:100%;margin:20px auto;background: #fff;box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);padding:20px 0;">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
        <el-step title="步骤 3" description="这段就没那么长了"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
    </el-main>  
  </el-container>

</template>
<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        active: 0,
        agentList: [
            {
              id:'0000',
              name: '景区',
              path: '/List/ScenicList',
              dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
              icon1: require('../assets/img/4.png'),
              currentDate:'2018-06-01'
            },
            {
              id:'0001',
              name: '文化',
              path: '/List/CultureList',
              dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
              icon1: require('../assets/img/1.png'),
              currentDate:'2018-06-27'
            },
            {
              id:'0002',
              name: '名人',
              path: '/List/PersonList',
              dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
              icon1: require('../assets/img/2.png'),
              currentDate:'2018-06-17'
            },
            {
              id:'0003',
              name: '图片',
              path: '/List/ImgList',
              dis:'部分内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍',
              icon1: require('../assets/img/3.png'),
              currentDate:'2018-06-20'
            },
          ],
      }
    },
    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      },
       //http://118.190.149.182/ecTravel/hotspots_init.do?limit=6&offset=1
    }
  }
</script>
<style scoped>
  .time {font-size: 13px;color: #999;}
  .bottom {margin-top: 13px;line-height: 12px;}
  .button {padding: 0;float: right;}
  .image {width: 100%;display: block;}
  .clearfix:before,.clearfix:after {display: table;content: "";}  
  .clearfix:after {clear: both}
.el-col-offset-1.3{margin-left: 5.3% ！ important;}
</style>