<template>
  <div>
    <label>Выберите количество пользователей</label>
    <select
      v-bind:countUsers="countUsers"
      v-on:input="selectCountUsers($event.target.value)"
      class="form-control">
      <option
        v-for="n in options"
        :key="n"
        :value="n"
      >
        {{ n }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    countUsers: {
      type: Number,
      default: 5
    },
    options: {
      type: Array,
      default: () => [5, 10, 15, 20]
    }
  },
  methods: {
    selectCountUsers(value) {
      this.$emit('changeCountUsers', value)
    }
  }
}
</script>
