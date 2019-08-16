import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Porcentajes from './views/Porcentajes.vue'
import Hombres from './views/Hombres.vue'
import Mujeres from './views/Mujeres.vue'
import Parejas from './views/Parejas.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/porcentajes',
      name: 'porcentajes',
      component: Porcentajes
    },
    {
      path: '/hombres',
      name: 'hombres',
      component: Hombres
    },
    {
      path: '/mujeres',
      name: 'mujeres',
      component: Mujeres
    },
    {
      path: '/parejas',
      name: 'parejas',
      component: Parejas
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
