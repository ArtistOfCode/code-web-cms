import Vue from 'vue/dist/vue'
import Vuex from 'vuex';
import App from './App'
import Vuelidate from 'vuelidate'
import router from './router'
import layer from 'vue-layer'

Vue.config.productionTip = false;
Vue.prototype.$layer = layer(Vue, {msgtime: 1});
Vue.use(Vuelidate);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {user: sessionStorage.getItem('user')},
  mutations: {
    increment(state, user) {
      state.user = sessionStorage.getItem('user') || user;
      sessionStorage.setItem('user', 'user');
    }
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.state.user) {
      next({path: '/', query: {redirect: to.fullPath}});
    }
  }
  next();
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
