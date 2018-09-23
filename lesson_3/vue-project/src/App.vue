<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a
        class="navbar-brand"
        href="#">Пользователи</a>
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

<style>
#app {
  margin-top: 80px;
}
</style>
