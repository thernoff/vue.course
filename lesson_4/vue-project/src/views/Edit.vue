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
import axios from 'axios'
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
    saveUser() {
      console.log(this.user)
    },
    loadUser() {
      axios
        .get('http://localhost:3004/users/' + this.id)
        .then(response => response.data)
        .then(data => {
          this.user = data
        })
        .catch(error => console.error(error))
    }
  }
}
</script>
