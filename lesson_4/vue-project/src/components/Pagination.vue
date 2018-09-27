<template>
  <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>

    <router-link
      v-for="page in countPages"
      :key="page"
      tag="li"
      :to="'/users?page=' + page"
      class="page-item"
      exact
    >
      <a class="page-link">{{ page }}</a>
    </router-link>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<script>
export default {
  props: {
    limit: {
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
      return Math.ceil(this.totalUsers / this.limit)
    }
  }
}
</script>
