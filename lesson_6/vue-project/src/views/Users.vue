<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Список пользователей (общее количество {{ titleListUsers }})</h2>
        <div
          v-if="loading"
          class="alert alert-warning">
          Loading...
        </div>
        <div
          v-else-if="countUsers === 0"
          class="alert alert-info">
          Пользователи не найдены
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
          <template
            slot="row"
            slot-scope="item">
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
export default {
  name: 'UsersList',
  components: {
    UserList: () => import('@/components/UserList.vue')
  },
  computed: {
    loading() {
      return this.$store.state.loading
    },
    users() {
      return this.$store.state.users
    },
    countUsers() {
      return this.users.length
    },
    titleListUsers() {
      if (this.countUsers % 10 === 1 && this.countUsers % 100 !== 11)
        return this.countUsers + ' пользователь'
      else if (this.countUsers % 10 > 1 && this.countUsers % 10 < 5)
        return this.countUsers + ' пользователя'
      else return this.countUsers + ' пользователей'
    }
  },

  created() {
    this.$store.dispatch('loadUsers')
  }
}
</script>
