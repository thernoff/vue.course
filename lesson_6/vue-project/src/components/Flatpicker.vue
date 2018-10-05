<template>
  <div class="flatpicker">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <button
            class="btn btn-calendar"
            @click="openFlatpicker">
            <i class="far fa-calendar-alt"/>
          </button>
        </div>
      </div>
      <input
        ref="flatpicker"
        :value="value"
        class="form-control flatpicker-input"
        type="text">
    </div>
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
    value: 'updateFlatpickr'
  },
  mounted() {
    this.init()
  },
  destroyed() {
    this.flatpicker.destroy()
  },
  methods: {
    updateFlatpicker() {
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
    },

    openFlatpicker() {
      this.flatpicker.open()
    }
  }
}
</script>

<style scoped>
.flatpicker-input {
  background-color: #fff;
}

.input-group-text {
  padding: 0;
}

.btn-calendar {
  border-width: 0px;
}
</style>
