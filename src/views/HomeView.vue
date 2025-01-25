<template>
  <div class="container mt-4">
    <h1 class="home-title">Welcome to My Books Library!</h1>

    <CardComponent :centerText="true">
      <template #image>
        <img
          src="@/assets/library-banner-img.jpg"
          class="card-img-top"
          alt="A library"
        />
      </template>
      <template #content>
        <h5 class="card-title">Explore Books</h5>
        <p class="card-text">
          Discover our wide selection of books across various genres.
        </p>
      </template>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "HomeView",
  components: {
    CardComponent,
  },
};
</script>

<style scoped>
.home-title {
  text-align: center;
}
</style>
