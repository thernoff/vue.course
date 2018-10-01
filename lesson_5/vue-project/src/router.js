import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/views/Users.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: () => import('@/views/Add.vue')
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: () => import('@/views/Edit.vue')
    }
  ]
})
