<template>
	<div class="detail" id="ScenicDetail">
		<div class="detailBox">
			<h2 class="h2">{{ScenicDetail.name}}</h2>
			<div v-html="ScenicDetail.content"></div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
	     msg:'vuedemo',
	     ScenicDetail:''
      }
    },
    mounted:function(){ 
      console.log(this.$route.params.id)
      this.fetchData()
    },
    methods:{
     fetchData(){
     	var thats = this
    console.log(thats.$route.params.id,'111')
        axios.get('/travel/scenicShow_getScenic.do', {
	       params:{
	        scenicId: thats.$route.params.id,
	       }
	    })
	    .then(function (response) {
	      thats.ScenicDetail = response.data.dateItem;
	    })
	    .catch(function (error) {
	      console.log(error);
	    });
     }
    }
  }
</script>
<style>
	.detail{width:80%;margin:20px auto;box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;background:#fff;}
	.h2{text-align: center;margin-bottom: 10px}
	.detailBox{padding:20px;text-align: justify;}
</style>