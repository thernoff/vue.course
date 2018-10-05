<template>
  <div>
    <select-count-users
      v-model.number="countUsersOnePage"
    />
    <table class="table table-hover">
      <thead>
        <slot name="thead"></slot>
      </thead>
      <tbody>
        <tr
          v-for="item in limitUsers"
          :key="item.id">
          <slot name="row" v-bind="item"></slot>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th colspan="8">
            Всего пользователей: {{ countLimitUsers }}
          </th>
        </tr>
      </tfoot>
    </table>
    <pagination
      v-model.number="currentPage"
      :total-users="total"
      :countUsersOnePage="countUsersOnePage"
    />
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
      countUsersOnePage: 5,
      currentPage: 1
    }
  },
  computed: {
    total() {
      return this.users.length
    },
    limitUsers() {
      return this.users.slice(
        (this.currentPage - 1) * this.countUsersOnePage,
        (this.currentPage - 1) * this.countUsersOnePage + +this.countUsersOnePage
      )
    },
    countLimitUsers() {
      return this.limitUsers.length
    }
  },
  watch: {
    countUsersOnePage() {
      this.currentPage = 1
    }
  }
}
</script>
