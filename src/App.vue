<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-nav/>
    <router-view/>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

require('material-design-lite/material.css')
require('material-design-icons/iconfont/material-icons.css')
require('material-design-lite/material')

export default {
  name: 'app',
  components: {
    AppNav
  },
  mounted () {
    window.componentHandler.upgradeDom()
    window.componentHandler.upgradeElement(this.$el)
  }
}
</script>

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
