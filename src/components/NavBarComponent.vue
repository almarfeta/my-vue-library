<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MyVueLibrary</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/books" class="nav-link">Books</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
nav {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
