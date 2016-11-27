<template>
  <div id="app">
    <img src="./assets/logo.png">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav'

export default {
  name: 'app',
  components: {
    AppNav
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
