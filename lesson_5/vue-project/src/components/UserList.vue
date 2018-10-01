<template>
  <div>
    <select-count-users
      v-model="countUsers"
      v-on:changeCountUsers="changeCountUsers"
    />
    <table class="table table-hover">
      <thead>
        <tr>
          <th>#</th>
          <th>Имя</th>
          <th>Фамилия</th>
          <th>Активен</th>
          <th>Баланс</th>
          <th>Email</th>
          <th>Телефон</th>
          <th>Зарегистрирован</th>
          <th>Удалить</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in limitUsers"
          :key="item.id">
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
          <td>
            <button
              type="button"
              class="btn btn-danger"
              @click="removeUser(item.id)"
            >
              <span aria-hidden="true"><i class="fas fa-trash-alt"/></span>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">
            Всего пользователей: {{ limitUsers.length }}
          </th>
        </tr>
      </tfoot>
    </table>
    <pagination
      :total-users="total"
      :limit="limit"/>
  </div>
</template>

<script>
import { axiosInstance } from '@/axios-instance.js'

export default {
  name: 'UserList',
  components: {
    Pagination: () => import('@/components/Pagination.vue'),
    SelectCountUsers: () => import('@/components/SelectCountUsers.vue')
  },
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      limit: 5,
      countUsers: 5
    }
  },
  computed: {
    total() {
      return this.users.length
    },
    limitUsers() {
      return this.users.slice(
        (this.start - 1) * this.limit,
        (this.start - 1) * this.limit + +this.limit
      )
    },
    countLimitUsers() {
      return this.limitUsers.length
    },
    start() {
      return this.$route.query.page || 1
    }
  },
  methods: {
    removeUser(id) {
      axiosInstance
        .delete('users/' + id)
        .then(() => {
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    },
    changeCountUsers(limit) {
      this.limit = limit
      this.$router.push('/users')
    }
  }
}
</script>
