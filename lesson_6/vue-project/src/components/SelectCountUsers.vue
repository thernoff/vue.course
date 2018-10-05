<template>
  <div>
    <label>Выберите количество пользователей</label>
    <select
      :value="value"
      class="form-control"
      @input="selectCountUsers($event.target.value)">
      <option
        v-for="count in options"
        :key="count"
        :value="count"
      >
        {{ count }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    options: {
      type: Array,
      default: () => [5, 10, 15, 20]
    }
  },
  methods: {
    selectCountUsers(value) {
      this.$emit('input', value)
    }
  }
}
</script>
