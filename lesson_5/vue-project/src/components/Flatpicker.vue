<template>
  <div class="flatpicker">
    <input class="form-control flatpicker-input" type="text" ref="flatpicker" v-bind:value="value">
  </div>
</template>
<script>
import flatpickr from 'flatpickr'
import 'flatpickr/dist/flatpickr.css'
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      flatpicker: null
    }
  },
  watch: {
    value() {
      this.updateDatepicker()
    }
  },
  methods: {
    updateDatepicker() {
      if (this.flatpicker) {
        this.flatpicker.setDate(this.value)
      }
    },

    init() {
      this.flatpicker = flatpickr(this.$refs.flatpicker, {
        dateFormat: 'd.m.Y',
        onChange: (selectedDates, dateStr) => {
          this.$emit('input', dateStr)
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>
<style scoped>
.flatpicker-input {
  background-color: #fff;
}
</style>
