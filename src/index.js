import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import App from './App.vue'
import './styles.css'

import SearchPage from './pages/Search.vue'
import DetailsPage from './pages/Details.vue'

const router = new Router({
  routes: [
    { path: "/cats", component: SearchPage },
    { path: "/cats/:id/details", component: DetailsPage},

    { path: '*', redirect: '/cats'}
  ]
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
