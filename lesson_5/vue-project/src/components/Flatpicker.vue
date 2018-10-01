<template>
  <div class="flatpicker">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text">
          <button class="btn btn-calendar" v-on:click="open">
            <i class="far fa-calendar-alt"></i>
          </button>
        </div>
      </div>
      <input class="form-control flatpicker-input" type="text" ref="flatpicker" v-bind:value="value">
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
    },

    open() {
      this.flatpicker.open()
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

.input-group-text {
  padding: 0;
}

.btn-calendar {
  border-width: 0px;
}
</style>
