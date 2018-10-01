<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Список пользователей (общее количество {{ countUsers }})</h2>
        <div
          v-if="!countUsers"
          class="alert alert-warning">
          Loading...
        </div>
        <user-list
          v-else
          :users="users" />
      </div>
    </div>
  </div>
</template>

<script>
import { axiosInstance } from '@/axios-instance.js'
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersList',
  components: {
    UserList
  },
  data: () => ({
    users: []
  }),
  computed: {
    countUsers() {
      return this.users.length
    }
  },
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axiosInstance
        .get('users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
