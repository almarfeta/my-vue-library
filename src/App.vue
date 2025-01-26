<template>
  <div id="app">
    <NavBarComponent :show-header="showHeaderFooter" />
    <router-view />
    <FooterComponent :show-footer="showHeaderFooter" />
  </div>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
    FooterComponent,
  },
  computed: {
    showHeaderFooter() {
      return this.$route.name !== "login";
    },
  },
};
</script>

<style>
/* Insert global styling here... */
</style>
