<template>
	<div class="cultureList">
		<el-header style="text-align: right; font-size: 12px">
      <el-row>
        <el-input style="width:60%" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21"></el-input>
        <el-button style="margin-left:10px" type="primary" icon="el-icon-search">搜索</el-button>
      </el-row>
       <!--  <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span> -->
      </el-header>      
      <el-main>
       <router-link v-for="(item, index) in cultureList"  tag="div" :key="index" :to="'/ScenicDetail/'+item.scenicId">
			<div class="list">
				<div class="listImg"><img :src='item.imageUrl'></div>
				<div class="listDetail">
					<div class="listTitle">{{item.name}}</div>
					<div class="listDis" v-text="item.content"></div>
				</div>
			</div>
		</router-link>
		<el-pagination
		 @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
		  background
		  layout="prev, pager, next"
		   :page-size="6"
		   :current-page="currentPage1"
		   :total="totalPage">
		</el-pagination>	
      </el-main>
	</div>
</template>
<script>
  const preImgurl = 'http://www.goxz.gov.cn:80/webUpload/image/'
  import axios from 'axios';
  export default {
    data() {
      return {
      	input21:'',
        cultureList:'',
        currentPage1: 1,
        totalPage:''
      }
    },
    created:function(){ 
    	this.fetchData('6','1')
    },
    methods:{
     fetchData(limit,offset){
     	var thats = this
        axios.get('/ecTravel/hotspots_init.do', {
	       params:{
	        limit: limit,
	        offset: offset
	       }
	    })
	    .then(function (response) {
	    	console.log(response.data.total)
	      thats.cultureList = response.data.rows;
	      thats.totalPage = response.data.total;
	      thats.cultureList.forEach((item) => {
             item.imageUrl = preImgurl + item.imageUrl;
             return item.imageUrl
           });
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
     },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
       this.fetchData(6,val)
      }
    }
  }
</script>
<style>
.list {display:flex;border-bottom: 1px solid rgba(0,0,0,0.12);height: 110px;padding-top: 10px;}
.list:nth-child(even) { background:#0000ff;} 
.listImg img{height: 100px;width: 100px;}
.listDetail {float: left;width: calc(98% - 132px);margin-left: 2%;}
.listTitle {text-align: left;margin-bottom: 10px;font-size: 16px;color: rgba(0,0,0,0.72);font-weight: bold;}
.listDis {font-size: 14px;color: rgba(0,0,0,0.56);display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp:2;overflow: hidden;
}
.el-pagination {margin: 20px auto 0;}
.el-header {background-color: #B3C0D1;color: #333;line-height: 60px;}
  .el-aside {color: #333;}
  .el-main {background: #fff;border-left: 1px solid #f1f1f1;height:850px;}
</style>