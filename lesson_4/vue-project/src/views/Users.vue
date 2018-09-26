<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Список пользователей</h2>
        <div
          v-if="!users.length"
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
import axios from 'axios'
import UserList from '@/components/UserList.vue'

export default {
  name: 'UsersList',
  components: {
    UserList
  },
  data: () => ({
    users: []
  }),
  mounted() {
    this.loadUsers()
  },
  methods: {
    loadUsers() {
      axios
        .get('http://localhost:3004/users')
        .then(response => response.data)
        .then(users => {
          this.users = users
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
