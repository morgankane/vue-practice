import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import mainmenu from './components/mainmenu'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/mainmenu', component: mainmenu }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
