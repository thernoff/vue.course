<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Телефонный справочник</h2>
        <div
          v-if="!countUsers"
          class="alert alert-warning">
          Loading...
        </div>
        <user-list
          v-else
          :users="users"
        >
          <tr slot="thead">
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Телефон</th>
          </tr>
          <template
            slot="row"
            slot-scope="item">
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.phone }}</td>
          </template>
        </user-list>
      </div>
    </div>
  </div>
</template>

<script>
import { axiosInstance } from '@/axios-instance.js'

export default {
  name: 'UsersList',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  computed: {
    users() {
      return this.$store.state.users
    },
    countUsers() {
      return this.users.length
    }
  },
  created() {
    this.$store.dispatch('loadUsers')
  }
}
</script>
