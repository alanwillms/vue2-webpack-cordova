<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav'
import componentHandler from 'material-design-lite/material'

export default {
  name: 'app',
  components: {
    AppNav
  },
  ready () {
    this.$nextTick(() => {
      componentHandler.upgradeDom()
    })
  }
}
</script>

<style src="material-design-lite/material.css"></style>
<style src="material-design-icons/iconfont/material-icons.css"></style>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app > img {
  max-height: 50px;
}
</style>
