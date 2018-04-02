import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

Vue.use(Router)

import CatList   from './components/CatList.vue'
import CatDetail from './components/CatDetail.vue'

new Vue({
  el: '#app',
  render: h => h(App),
  router: new Router({
    routes: [
      { path: "/", component: CatList},
      { path: "/details", name: "Details", component: CatDetail, props: true}
    ]
  })
})
