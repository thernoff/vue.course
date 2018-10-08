<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2 class="text-center">Редактирование пользователя</h2>
        <div
          v-if="!user"
          class="alert alert-warning">
          Loading...
        </div>
        <user-form
          v-else
          v-model="user"
        />
        <button
          type="button"
          class="btn btn-success"
          @click="saveUser">
          Save
        </button>
        <button
          type="button"
          class="btn btn-danger"
          @click="removeUser">
          Delete
        </button>
        <button
          type="button"
          class="btn btn-warning"
          @click="returnToUsers">
          Cancel
        </button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
  components: {
    userForm: () => import('@/components/UserForm.vue')
  },
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    },
    url() {
      return 'users/' + this.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    returnToUsers() {
      this.$router.push('/users')
    },

    saveUser() {
      this.$store
        .dispatch('saveUser', { url: this.url, user: this.user })
        .then(() => this.returnToUsers())
        .catch(error => console.error(error))
    },

    removeUser() {
      this.$store
        .dispatch('removeUser', this.url)
        .then(() => {
          this.returnToUsers()
        })
        .catch(error => console.error(error))
    },

    loadUser() {
      this.$store.state.users.some(user => {
        if (user.id == this.id) {
          this.user = user
        }
      })
    }
  }
}
</script>
