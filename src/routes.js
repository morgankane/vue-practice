import Home from './components/Home'
import mainmenu from './components/mainmenu'
import about from './components/about'
import contact from './components/contact'
import history from './components/history'
import delivery from './components/delivery'
import orderingGuide from './components/orderingGuide'
import admin from './components/admin'

export const routes = [
  { path: '/',
    components: {
      default: Home,
      "ordering-guide": orderingGuide,
      "delivery": delivery,
      "history": history
    }
  },
  { path: '/mainmenu', component: mainmenu },
  { path: '/admin', component: admin, beforeEnter: (to, from, next) => {
    alert('This area is for authorized users only, please login to continue.');
    next()
  }},
  { path: '/about', component: about, children: [
      { path: '/contact', component: contact},
      { path: '/history', component: history},
      { path: '/delivery', component: delivery},
      { path: '/orderingGuide', component: orderingGuide }
    ]},
  { path: '*', redirect: '/' }
]
