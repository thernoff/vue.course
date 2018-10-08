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
    loadUsers(state, users) {
      state.users = users
    },

    addUser(state, user) {
      state.users.push(user)
    },

    toggleLoading(state, loading) {
      state.loading = loading
    }
  },

  actions: {
    loadUsers(context) {
      context.commit('toggleLoading', true)
      axiosInstance
        .get('users')
        .then(response => response.data)
        .then(users => {
          context.commit('loadUsers', users)
          context.commit('toggleLoading', false)
        })
        .catch(error => console.error(error))
    },

    addUser(context, { url, user }) {
      context.state.loading = true
      return axiosInstance.post(url, user)
    },

    saveUser(context, { url, user }) {
      return axiosInstance
        .put(url, user)
    },

    removeUser(context, url) {
      return axiosInstance
        .delete(url)
    }
  }
})

export default store
