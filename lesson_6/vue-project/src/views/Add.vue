<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Добавление пользователя</h2>
        <user-form
          v-model="user"
        />
        <button
          type="button"
          class="btn btn-success"
          @click="addUser">
          Add
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="cancel">
          Cancel
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { axiosInstance } from '@/axios-instance.js'

export default {
  name: 'AddUser',
  components: {
    userForm: () => import('@/components/UserForm.vue')
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
    cancel() {
      this.$router.push('/users')
    },

    addUser() {
      axiosInstance
        .post('/users', this.user)
        .then(response => {
          const { id } = response.data
          this.$router.push('/edit/' + id)
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
