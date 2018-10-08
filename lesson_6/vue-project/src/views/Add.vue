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
      },
      url: 'users'
    }
  },
  methods: {
    cancel() {
      this.$router.push('/users')
    },

    addUser() {
      this.$store.dispatch('addUser', { url: this.url, user: this.user }).then(
        () => {
          console.log('2')
          this.$router.push('/users')
        }
        //this.$router.push('/edit/' + id)
      )
      /* .then(response => {
          console.log('response', response)
          const { id } = response.data
          this.$router.push('/edit/' + id)
        })
        .catch(error => console.error(error)) */
    }
  }
}
</script>
