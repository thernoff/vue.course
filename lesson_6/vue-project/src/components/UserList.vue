<template>
  <div>
    <select-count-users
      v-model.number="countUsersOnePage"
    />
    <table class="table table-hover">
      <thead>
        <slot name="thead"/>
      </thead>
      <tbody>
        <tr
          v-for="item in limitUsers"
          :key="item.id">
          <slot
            v-bind="item"
            name="row"/>
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
      :count-users-one-page="countUsersOnePage"
    />
  </div>
</template>

<script>
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
        (this.currentPage - 1) * this.countUsersOnePage + this.countUsersOnePage
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
