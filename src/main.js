import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

Vue.use(VueRouter)

import DogsView from './components/DogsView'
import HomeView from './components/HomeView'

// Routes
const routes = [
  { path: '/dogs', name: 'dogs', component: DogsView },
  { path: '/', name: 'root', component: HomeView },
  // Se não cair em nenhuma rota acima
  { path: '*', component: HomeView }
]
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
