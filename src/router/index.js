import Vue from 'vue'
import Router from 'vue-router'
import DogsView from '@/components/DogsView'
import HomeView from '@/components/HomeView'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/dogs', name: 'dogs', component: DogsView },
    { path: '/', name: 'root', component: HomeView },
    // Se não cair em nenhuma rota acima
    { path: '*', component: HomeView }
  ]
})
