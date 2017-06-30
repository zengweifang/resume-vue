// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import VueRouter from 'vue-router'
import login from './views/login/login'
import list from './views/list/list'
import detail from './views/detail/detail'

Vue.config.productionTip = false

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [{
    path: '/login',
    component: login
  }, {
    path: '/list',
    component: list
  }, {
    path: '/detail',
    component: detail
  }],
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  components: {
    App
  },
  data: {
    eventHub: new Vue()
  }
}).$mount('#app')

router.push('login')
