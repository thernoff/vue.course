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
          :user="user"
          @input="value => user = value"
        />
        <!-- <user-form
          v-else
          v-model="user"
        /> -->
        <button
          type="button"
          class="btn btn-success"
          @click="saveUser">
          Save
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
import UserForm from '@/components/UserForm.vue'

export default {
  name: 'EditUser',
  components: {
    userForm: UserForm
  },
  data: function() {
    return {
      user: null
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    cancel() {
      this.$router.push('/users')
    },

    saveUser() {
      axiosInstance
        .put('users/' + this.id, this.user)
        .then(() => this.$router.push('/users'))
        .catch(error => console.error(error))
    },

    loadUser() {
      axiosInstance
        .get('users/' + this.id)
        .then(response => response.data)
        .then(data => {
          this.user = data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
