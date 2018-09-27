<template>
<div>
<label>Выберите количество пользователей</label>
  <select class="form-control" v-model="selected">
    <option
      v-for="n in count"
      v-bind:key="n"
      v-bind:value="n * step"
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
  },
  methods: {
    test() {
      console.log(this.selected)
    }
  }
}
</script>

