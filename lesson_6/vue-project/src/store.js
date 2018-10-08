import Vue from 'vue'
import Vuex from 'vuex'
import { axiosInstance } from '@/axios-instance.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    navbarTitle: 'Пользователи',
    loading: true,
    users: []
  },

  mutations: {
    addUser(state, user) {
      state.users.push(user)
    },

    /* saveUser(state, user) {
      state.users.some(user => {
        if ( user.id )
      })
    } */
  },

  actions: {
    loadUsers(context) {
      context.state.loading = true
      axiosInstance
        .get('users')
        .then(response => response.data)
        .then(users => {
          context.state.users = users
          context.state.loading = false
        })
        .catch(error => console.error(error))
    },

    addUser(context, { url, user }) {
      context.state.loading = true
      return new Promise((resolve, reject) => {
        axiosInstance
          .post(url, user)
          .then(response => {
            //const { id } = response.data
            //context.commit('addUser', Object.assign(user, { id }))
            //context.state.loading = false
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    saveUser(context, { url, user }) {
      return new Promise((resolve, reject) => {
        axiosInstance
          .put(url, user)
          .then(response => {
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    removeUser(context, url) {
      return new Promise((resolve, reject) => {
        axiosInstance
          .delete(url)
          .then(() => {
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
})

export default store
