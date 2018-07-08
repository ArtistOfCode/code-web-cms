import Vue from 'vue/dist/vue'
import Router from 'vue-router'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'login', component: Login},
    {path: '/home', name: 'home', component: Home, meta: {requiresAuth: true}},
    {path: '/about', name: 'about', component: About, meta: {requiresAuth: true}}
  ]
})
