<template>
  <div>
    <div class="form-group">
      <label>Имя</label>
      <input
        v-model="value.firstName"
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
        type="tel"
        class="form-control">
    </div>

    <div class="form-group">
      <label>Адрес</label>
      <input
        v-model="localUser.address"
        type="text"
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
      <label>Дата регистрации</label>
      <flatpicker v-model="localUser.registered"/>
    </div>

    <div class="form-group">
      <label>О пользователе</label>
      <vue-editor v-model="localUser.about"/>
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
import { VueEditor } from 'vue2-editor'
export default {
  name: 'UserForm',
  components: {
    Flatpicker: () => import('@/components/Flatpicker.vue'),
    VueEditor
  },
  props: {
    value: {
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
    this.localUser = Object.assign({}, this.value)
  }
}
</script>
