<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="localUser.firstName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="localUser.lastName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="localUser.email"
        type="email"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        v-model="localUser.balance"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        v-model="localUser.phone"
        type="phone"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="localUser.address"
        type="address"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="localUser.company"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <div class="form-check">
        <input
          id="defaultCheck1"
          v-model="localUser.isActive"
          class="form-check-input"
          type="checkbox"
          value=""
        >
        <label
          class="form-check-label"
          for="defaultCheck1">
          Активен
        </label>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: 'UserForm',
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUser: null
    }
  },
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser)
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user)
    console.log('this.localUser', this.localUser)
  }
}
</script>
