<template>
  <div class="container mt-4">
    <h1>Book List</h1>

    <ListComponent
      :search-query-placeholder="searchQueryPlaceholder"
      :items="books"
      @details="goToDetails($event)"
      @edit="handleEdit($event)"
      @delete="handleDelete($event)"
    >
      <template #item-title="{ item }">
        <strong>{{ item.title }}</strong> - {{ item.author }}
        {{ "(" + item.publishDate + ")" }}
      </template>

      <template #empty-list-case>
        <p class="text-muted">There are no books yet.</p>
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
      searchQueryPlaceholder: "Search books by title...",
      books: [],
    };
  },
  created() {
    this.books = BookService.getBooks();
  },
  methods: {
    goToDetails($event) {
      this.$router.push(`/books/${$event.id}`);
    },
    handleEdit($event) {
      //TODO: Implement this function
      console.log("Editing item: ", $event);
      BookService.updateBook();
      this.books = BookService.getBooks();
    },
    handleDelete($event) {
      BookService.deleteBook($event.id);
      this.books = BookService.getBooks();
    },
  },
};
</script>
