import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
//import AMap from 'vue-amap'
import VueAMap from 'vue-amap';
import axios from 'axios';
Vue.use(ElementUI);
Vue.use(VueAMap);

//   // 初始化vue-amap
// AMap.initAMapApiLoader({
//   // 高德key
//   key: '4434734b3e818ff57d16408e5149afda',
//   // 插件集合 （插件按需引入）
//   plugin: ['AMap.Geolocation']
// })

VueAMap.initAMapApiLoader({
  key: '4434734b3e818ff57d16408e5149afda',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
});

Vue.config.productionTip = false

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
