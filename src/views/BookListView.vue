<template>
  <div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h1>Book List</h1>
      <button class="btn btn-success" @click="openAddBookModal()">
        Add Book
      </button>
    </div>

    <ListComponent
      :search-query-placeholder="searchQueryPlaceholder"
      :items="books"
      @details="goToDetails($event)"
      @edit="openEditBookModal($event)"
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

    <router-view @add="handleAdd($event)" @update="handleUpdate($event)" />
  </div>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "BookListView",
  components: {
    ListComponent,
  },
  data() {
    return {
      searchQueryPlaceholder: "Search books by title...",
    };
  },
  computed: {
    ...mapGetters("books", { books: "allBooks" }),
  },
  created() {
    this.$store.dispatch("books/fetchBooks");
  },
  methods: {
    openAddBookModal() {
      this.$router.push("/books/add");
    },
    openEditBookModal($event) {
      this.$router.push(`/books/edit/${$event.id}`);
    },
    goToDetails($event) {
      this.$router.push(`/books/${$event.id}`);
    },
    handleAdd($event) {
      this.$store.dispatch("books/addBook", $event);
    },
    handleUpdate($event) {
      this.$store.dispatch("books/updateBook", $event);
    },
    handleDelete($event) {
      this.$store.dispatch("books/deleteBook", $event.id);
    },
  },
};
</script>
