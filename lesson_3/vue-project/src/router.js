import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Users from '@/views/Users.vue'
import AddUser from '@/views/Add.vue'
import EditUser from '@/views/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
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
    },
    {
      path: '/edit/:id',
      name: 'Edit',
      component: EditUser
    }
  ]
})
