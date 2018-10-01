<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="user.firstName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="user.lastName"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Email</label>
      <input
        v-model="user.email"
        type="email"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Баланс</label>
      <input
        v-model="user.balance"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Телефон</label>
      <input
        v-model="user.phone"
        type="phone"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="user.address"
        type="address"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="user.company"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <div class="form-check">
        <input
          id="defaultCheck1"
          v-model="user.isActive"
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
  }
}
</script>
