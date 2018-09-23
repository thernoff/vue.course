import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import AddUser from '@/views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/add',
      name: 'Add',
      component: AddUser
    }
  ]
})
