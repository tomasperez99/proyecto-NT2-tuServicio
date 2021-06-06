import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import NavBar from './components/NavBar.vue'
import vistaTrabajador from './components/vistaTrabajador.vue'
import Login from './components/Login.vue'
import crearSolicitud from './components/crearSolicitud.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

const routes = [
  {path:'/NavBar',component:NavBar},
  {path:'/vistaTrabajador',component:vistaTrabajador},
  {path:'/Login',component:Login},
  {path:'/crearSolicitud',component:crearSolicitud}
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
