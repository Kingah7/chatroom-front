<template>
  <div id="app">
    <HomePage v-if="$route.path != ''" />
  </div>
</template>

<script>
import HomePage from '@/pages/HomePage'

export default {
  name: 'App',
  components:{
    HomePage
  }
}
</script>

<style lang="scss">
@import url(./assets/font/iconfont.css);
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  font-size: 25px;
  vertical-align: middle;
  color: rgb(117,120,137);
  transition: .3s;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
  background-color: rgb(151,157,167);
}
</style>
