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
        <edit-user
          v-else
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
import axios from 'axios'
import EditUser from '@/components/EditUser.vue'

export default {
  name: 'EditUser',
  components: {
    editUser: EditUser
  },
  data: function() {
    return {
      user: null
    }
  },
  mounted() {
    this.loadUser()
  },
  methods: {
    loadUser() {
      const id = this.$route.params.id
      axios
        .get('http://localhost:3004/users?_id=' + id)
        .then(response => response.data)
        .then(data => {
          console.log(data[0])
          this.user = data[0]
        })
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>
</style>
