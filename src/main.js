import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import mainmenu from './components/mainmenu'
import about from './components/about'
import contact from './components/contact'
import history from './components/history'
import delivery from './components/delivery'
import orderingGuide from './components/orderingGuide'
import admin from './components/admin'
import App from './App.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/mainmenu', component: mainmenu },
  { path: '/admin', component: admin },
  { path: '/about', component: about, children: [
      { path: '/contact', component: contact},
      { path: '/history', component: history},
      { path: '/delivery', component: delivery},
      { path: '/orderingGuide', component: orderingGuide }
    ]},
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === "/mainmenu") {
    next()
  } else {
    next(false);
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
