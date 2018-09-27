<template>
  <div>
    <label>Выберите количество пользователей</label>
    <select
      v-model="selected"
      class="form-control">
      <option
        v-for="n in count"
        :key="n"
        :value="n * step"
      >
        {{ n * step }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  props: {
    count: {
      type: Number,
      default: 4
    },
    step: {
      type: Number,
      default: 5
    }
  },

  data() {
    return {
      selected: this.step * 1
    }
  },
  watch: {
    selected() {
      this.$emit('changeCountUsers', this.selected)
    }
  }
}
</script>
