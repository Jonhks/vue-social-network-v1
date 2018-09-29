import Vue from 'vue'
import App from './App.vue'
import BoostrapVue from 'bootstrap-vue'
import vueRouter from 'vue-router'
import routes from './router/routes.js'
import firebase from 'firebase'

  // Initialize Firebase

const config = {
  apiKey: "AIzaSyCSEs73ZJvQ4cFPOlZJbU4k-RCkV23hALI",
  authDomain: "vue-social-network.firebaseapp.com",
  databaseURL: "https://vue-social-network.firebaseio.com",
  projectId: "vue-social-network",
  storageBucket: "vue-social-network.appspot.com",
  messagingSenderId: "661090504725"
};
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(user => {
  new Vue({
    el: '#app',
    render: h => h(App),
    router
  })
})

Vue.use(BoostrapVue)
Vue.use(vueRouter)

const router = new vueRouter ({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) =>{
  let user = firebase.auth().currentUser;
  let autorizacion = to.matched.some(record => record.meta.autentication);
  console.log(user)
  if(autorizacion && !user) {
    next('login')
  }else if(!autorizacion && user) {
    next('home')
  } else {
    next()
  }
})





