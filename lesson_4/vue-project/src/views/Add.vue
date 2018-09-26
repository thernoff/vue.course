<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Добавление пользователя</h2>
        <user-form
          :user="user"
          @input="value => user = value"
        />
        <button
          type="button"
          class="btn btn-success"
          @click="saveUser">
            Save
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'AddUser',
  components: {
    userForm: UserForm
  },
  data() {
    return {
      user: {
        isActive: false,
        balance: '',
        picture: '',
        age: 0,
        accessLevel: '',
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        address: '',
        about: '',
        registered: ''
      }
    }
  },
  methods: {
    saveUser() {}
  }
}
</script>
