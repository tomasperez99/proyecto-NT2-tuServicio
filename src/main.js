import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import vistaTrabajador from './components/vistaTrabajador.vue'
import Login from './components/Login.vue'
import crearSolicitud from './components/crearSolicitud.vue'
import Index from './components/Index.vue'
import TrabajadoresDisponibles from './components/TrabajadoresDisponibles.vue'
import Solicitud from './components/Solicitud.vue'
import Resenia from './components/Resenia.vue'
import Estadisticas from './components/Estadisticas.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)

const routes = [
  {path:'/vistaTrabajador/:id',component:vistaTrabajador},
  {path:'/Login',component:Login},
  {path:'/crearSolicitud',component:crearSolicitud},
  {path: '/Index', component:Index},
  {path:'/trabajadoresDisponibles',component:TrabajadoresDisponibles},
  {path: '/Solicitud/:id', component:Solicitud},
  {path: '/Resenia', component: Resenia},
  {path: '/Estadisticas', component: Estadisticas }
]
import Router from 'vue-router'
Vue.use(Router) 
const router = new Router({
  routes,
  mode: 'hash'
})

Vue.config.productionTip = false

const store = new Vuex.Store({
    state: {
        cantProfesionales: 0,
        cantAvisos: 0
    },
    mutations: {
        agregarProfesional: state => state.cantProfesionales++,
        agregarAviso: state => state.cantAvisos++
    }
  })


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
