<template>
  <div class="about">
    <el-collapse accordion style="box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;background: #dcebfd !important;">
      <el-collapse-item>
        <template slot="title">
          所在区域<i class="header-icon el-icon-info"></i>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>

   <div class="amap-wrapper" style="width:100%;height:500px;">
    <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
   </div>

    <el-collapse accordion style="background: #dcebfd !important;margin-top:10px;box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;">
      <el-collapse-item>
        <template slot="title">
          今年营收情况<i class="header-icon el-icon-info"></i>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
    <div class="chartBox">
      <div id="myChart" :style="{width: '50%', height: '300px'}"></div>
      <div id="myChart2" :style="{width: '50%', height: '300px'}"></div>
    </div>
  </div>
</template>

<script>
// import VueAMap from 'vue-amap';
// import { AMapManager } from 'vue-amap';
// let amapManager = new VueAMap.AMapManager();
export default {
  data () {
    return {
   
    }
  },
  mounted(){
    this.drawEchar();
    this.drawEchart2();
  },
  methods:{
    drawEchar(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        var data = [];

        for (var i = 0; i <= 100; i++) {
            var theta = i / 100 * 360;
            var r = 5 * (1 + Math.sin(theta / 180 * Math.PI));
            data.push([r, theta]);
        }
        // 绘制图表
        myChart.setOption({
            title: {
            text: '产业分布',
             // x:'center'
        },
        legend: {
            data: ['line']
        },
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {
        },
        series: [{
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            data: data
        }]
        });
    },
    drawEchart2(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart2'))
        // 绘制图表
        myChart.setOption({
              title : {
              text: '产值比例',
              subtext: '纯属虚构',
              // x:'center'
          },
          tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
              x : 'center',
              y : 'bottom',
              data:['rose1','rose2','rose3','rose4','rose5','rose6','rose7','rose8']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {
                      show: true,
                      type: ['pie', 'funnel']
                  },
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          series : [
              {
                  name:'半径模式',
                  type:'pie',
                  radius : [20, 110],
                  center : ['25%', '50%'],
                  roseType : 'radius',
                  label: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  lableLine: {
                      normal: {
                          show: false
                      },
                      emphasis: {
                          show: true
                      }
                  },
                  data:[
                      {value:10, name:'rose1'},
                      {value:5, name:'rose2'},
                      {value:15, name:'rose3'},
                      {value:25, name:'rose4'},
                      {value:20, name:'rose5'},
                      {value:35, name:'rose6'},
                      {value:30, name:'rose7'},
                      {value:40, name:'rose8'}
                  ]
              },
              {
                  name:'面积模式',
                  type:'pie',
                  radius : [30, 110],
                  center : ['75%', '50%'],
                  roseType : 'area',
                  data:[
                      {value:10, name:'rose1'},
                      {value:5, name:'rose2'},
                      {value:15, name:'rose3'},
                      {value:25, name:'rose4'},
                      {value:20, name:'rose5'},
                      {value:35, name:'rose6'},
                      {value:30, name:'rose7'},
                      {value:40, name:'rose8'}
                  ]
              }
          ]
        });
    }
  }
}
</script>
<style scoped>
.about{width:80%;margin:auto;}
.chartBox{display: flex;padding: 40px 0px;box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px 0px;background:#fff;margin-bottom: 20px;}
.el-collapse-item__header {background: #dcebfd !important;margin-left: 10px;font-weight: bold;font-size: 18px;}
.el-collapse-item__arrow {line-height: 60px;}
.el-collapse-item__content {margin:20px 0 0 20px;line-height: 30px;}
</style>
