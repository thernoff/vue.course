<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Добавление пользователя</h2>
        <add-user
          :user="user"
          @input="value => user = value"
        />
        <!-- <button
          type="button"
          class="btn btn-success"
          @click="saveUser">
            Save
        </button> -->
      </div>

    </div>
  </div>
</template>

<script>
import AddUser from '@/components/AddUser.vue'

export default {
  name: 'AddUser',
  components: {
    addUser: AddUser
  },
  data() {
    return {
      user: {
        isActive: false,
        balance: '$0',
        name: {
          first: '',
          last: ''
        },
        company: '',
        email: '',
        phone: '',
        address: ''
      }
    }
  }
}
</script>

<style>
</style>
