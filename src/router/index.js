import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import Bonus from '../views/Bonus.vue'
import Admin from '../views/Admin.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  {
    path: '/bonus',
    name: 'Bonus',
    component: Bonus
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
 
]

const router = new VueRouter({
  scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
          return { selector: to.hash }
      } else if (savedPosition) {
          return savedPosition;
      } else {
          return { x: 0, y: 0 }
      }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
