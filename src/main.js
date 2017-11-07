// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueMdl from 'vue-mdl'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueMdl)

const createApp = function () {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
  })
  window.componentHandler.upgradeDom()
}

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:') {
  let cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)

  let cordovaApp = {
    initialize () {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false)
    },
    onDeviceReady () {
      createApp()
    }
  }

  cordovaApp.initialize()
}

// Permite rodar com "npm run dev"
if (process && process.env && process.env.NODE_ENV === 'development') {
  createApp()
}
