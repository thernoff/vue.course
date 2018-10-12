<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link
        tag="a"
        to="/"
        exact
        class="navbar-brand">
        {{ navbarTitle }}
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div
        id="navbarCollapse"
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link
            tag="li"
            to="/"
            exact
            class="nav-item">
            <a class="nav-link">Главная</a>
          </router-link>
          <router-link
            tag="li"
            to="/users"
            class="nav-item">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link
            tag="li"
            to="/add"
            class="nav-item">
            <a class="nav-link">Добавить пользователя</a>
          </router-link>
          <router-link
            tag="li"
            to="/phone"
            class="nav-item">
            <a class="nav-link">Телефонный справочник</a>
          </router-link>
        </ul>
      </div>
    </nav>

    <main
      role="main"
      class="container">
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    navbarTitle() {
      return this.$store.state.navbarTitle
    }
  },
  created() {
    this.$store.dispatch('loadUsers')
  }
}
</script>


<style>
#app {
  margin-top: 80px;
}
</style>
