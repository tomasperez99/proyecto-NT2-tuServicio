import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vistaTrabajador from './components/vistaTrabajador.vue'
import Login from './components/Login.vue'
import crearSolicitud from './components/crearSolicitud.vue'
import Index from './components/Index.vue'
import TrabajadoresDisponibles from './components/TrabajadoresDisponibles.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {path:'/vistaTrabajador',component:vistaTrabajador},
  {path:'/Login',component:Login},
  {path:'/crearSolicitud',component:crearSolicitud},
  {path: '/Index', component:Index},
  {path:'/trabajadoresDisponibles',component:TrabajadoresDisponibles}
]
import Router from 'vue-router'
Vue.use(Router) 
const router = new Router({
  routes,
  mode: 'hash'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
