<template>
	<div class="detail" >
		<div>文化简介详情页</div>
		<div class="detailBox">
			<h2 class="h2">{{cultureItem.title}}</h2>
			<!-- <div v-html="cultureItem.content"></div> -->
		</div>
		<div class="detailBox">
			<h2 class="h2">{{cultureTitle}}</h2>
			<div v-html="cultureContent"></div>
		</div>
	</div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
	     cultureItem:'',
	     cultureTitle:'',
	     cultureContent:''
      }
    },
    created:function(){ 
      //console.log(this.$route.params.id)
      this.fetchData()
      console.log(this.cultureDetail,'111')
    },
    methods:{
     fetchData(){
     	var thats = this
     	 //console.log(thats.$route.params.id,'111')
        axios.get('/profile/cultureShow_cultureByIdDetil.do', {
	       params:{
	        cultureId: thats.$route.params.id,
	       }
	    })
	    .then(function (response) {
	    	 console.log(response,'11111');
	    	 //  console.log(response.data,'2222');
	    	 //  console.log(response.data.title,'3333');
	      thats.cultureItem = response.data;
	      // thats.cultureContent = response.data.content;
	      // thats.cultureTitle = response.data.title;
	      // console.log(response.data,'4444');
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