<template>
  <footer class="bg-light text-center text-lg-start">
    <div class="text-center p-3">
      Source code on
      <a
        class="text-dark"
        href="https://github.com/almarfeta/my-vue-library"
        target="_blank"
      >
        GitHub
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
}
</style>
