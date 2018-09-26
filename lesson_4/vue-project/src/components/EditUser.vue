<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="user.name.first"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Фамилия</label>
      <input
        v-model="user.name.last"
        type="text"
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
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="user.address"
        type="text"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Компания</label>
      <input
        v-model="user.company"
        type="text"
        class="form-control">
    </div>
  </div>


</template>

<script>
export default {
  name: 'EditUser',
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
</style>
