import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import SignIn from '../components/SignIn.vue'


const routes = [
  {path: '*', redirect: '/login'},
  {path: '/', redirect: '/login'},
  {path: '/singin', component: SignIn, name: 'signin'},
  {path: '/login', component: Login, name: 'login'},
  {path: '/home', component: Home, name: 'home', meta: {
    autentication: true
  }}
]

export default routes