import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SingleDevice from '../views/SingleDevice.vue'
import AllDevices from '../views/AllDevices.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/device',
    name: 'SingleDevice',
    component: SingleDevice
  },
  {
    path: '/devices',
    name: 'AllDevices',
    component: AllDevices
  }
]

const router = new VueRouter({
  routes
})

export default router
