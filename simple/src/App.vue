<template>
  <div id="app">
    <header-nav></header-nav>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <div><footer-nav></footer-nav></div>
  </div>
</template>

<script>
  import headerNav from "./components/Nav"
  import footerNav from "./components/Footer"
  export default {
    components:{
      headerNav,
      footerNav
    },
    name: 'App'
}
</script>

<style>
*{padding:0px;margin:0px;}
body{background: #f2f2f2;}
ul li{list-style: none;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
