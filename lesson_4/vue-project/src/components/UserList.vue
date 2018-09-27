<template>
  <div>
    <select-count-users
      v-bind:count="3"
      v-bind:step="this.limit"
      v-on:changeCountUsers="limit = $event"
    >
    </select-count-users>
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
          v-for="(item, index) in limitUsers"
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
              v-on:click="removeUser(item.id, index)"
            >
              <span aria-hidden="true"><i class="fas fa-trash-alt"></i></span>
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
    <pagination :totalUsers="total" :limit="limit"></pagination>
  </div>
</template>

<script>
import axios from 'axios'
import Pagination from '@/components/Pagination.vue'
import SelectCountUsers from '@/components/SelectCountUsers.vue'

export default {
  name: 'UserList',
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      limit: 5
    }
  },
  components: {
    Pagination,
    SelectCountUsers
  },
  computed: {
    total() {
      return this.users.length
    },
    limitUsers() {
      console.log('this.start', this.start)
      console.log('this.limit', this.limit)
      console.log('limitUsers', this.start * this.limit + +this.limit)

      return this.users.slice(
        (this.start - 1) * this.limit,
        (this.start - 1) * this.limit + +this.limit
      )
    },
    start() {
      return this.$route.query.page || 1
    }
  },
  methods: {
    removeUser(id, index) {
      axios
        .delete('http://localhost:3004/users/' + id)
        .then(response => {
          //this.users.splice(index, 1)
          this.$router.push('/users')
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
