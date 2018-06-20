import Vue from 'vue'
import Router from 'vue-router'
// import IconPicker from

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/icon-picker',
      name: 'icon-picker',
      component: () => import('@/views/icon-picker')
    }
  ]
})
