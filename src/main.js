import Vue from 'vue'
import App from './App.vue'
import BoostrapVue from 'bootstrap-vue'
import vueRouter from 'vue-router'
import routes from './router/routes.js'


Vue.use(BoostrapVue)
Vue.use(vueRouter)

const router = new vueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
