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
          :users="users"
        >
          <tr slot="thead">
            <th>#</th>
            <th>Имя</th>
            <th>Фамилия</th>
            <th>Активен</th>
            <th>Баланс</th>
            <th>Email</th>
            <th>Телефон</th>
            <th>Зарегистрирован</th>
          </tr>
          <template slot="row" slot-scope="item">
            <td>
              <router-link :to="'/edit/' + item.id">
                # {{ item.id }}
              </router-link>
            </td>
            <td>{{ item.firstName }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.isActive }}</td>
            <td>{{ item.balance }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>{{ item.registered }}</td>
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
