<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>
      <li
        v-for="page in countPages"
        :key="page"
        :class="{active: page === currentPage}"
        class="page-item"
      >
        <a
          class="page-link"
          @click.prevent="changePage(page)"
        >
          {{ page }}
        </a>
      </li>
      <li class="page-item">
        <a
          class="page-link"
          href="#"
          aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'Pagination',
  model: {
    prop: 'currentPage'
  },
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    countUsersOnePage: {
      type: Number,
      default: 5
    },
    totalUsers: {
      type: Number,
      required: true
    }
  },
  computed: {
    countPages() {
      return Math.ceil(this.totalUsers / this.countUsersOnePage)
    }
  },
  watch: {
    currentPage() {
      console.log('currentPage', this.currentPage)
    }
  },
  methods: {
    changePage(page) {
      this.$emit('input', page)
    }
  }
}
</script>
