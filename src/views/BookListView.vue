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
import BookService from "@/services/BookService";

export default {
  name: "BookListView",
  components: {
    ListComponent,
  },
  data() {
    return {
      books: [],
    };
  },
  created() {
    this.books = BookService.getBooks();
  },
};
</script>
