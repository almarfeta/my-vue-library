<template>
  <div class="container mt-4">
    <h1>Book List</h1>

    <ListComponent :items="books">
      <template #empty-list-case>
        <p class="text-muted">No books to display.</p>
      </template>
    </ListComponent>
  </div>

  <router-view />
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";

export default {
  name: "BookListView",
  components: {
    ListComponent,
  },
  data() {
    return {
      books: [
        { id: 1, title: "Harap-Alb", author: "Ion Creanga" },
        { id: 2, title: "Ion", author: "Liviu Rebreanu" },
        { id: 3, title: "Moara cu Noroc", author: "Ioan Slavici" },
      ],
    };
  },
};
</script>
