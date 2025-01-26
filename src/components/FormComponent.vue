<template>
  <div class="modal-overlay" @click="closeModal()">
    <div class="modal-content" @click.stop>
      <h3 v-if="mode === 'add'" class="mb-4">Add a New Book</h3>
      <h3 v-if="mode === 'update'" class="mb-4">Edit a Book</h3>
      <form @submit.prevent="onSubmit()">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input
            type="text"
            id="title"
            class="form-control"
            v-model="form.title"
            required
          />
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input
            type="text"
            id="author"
            class="form-control"
            v-model="form.author"
            required
          />
        </div>

        <div class="mb-3">
          <label for="publishDate" class="form-label">Publish Date</label>
          <input
            type="date"
            id="publishDate"
            class="form-control"
            v-model="form.publishDate"
            required
          />
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            class="form-control"
            rows="4"
            v-model="form.description"
          ></textarea>
        </div>

        <div class="mb-3">
          <label for="pdfUrl" class="form-label">PDF URL</label>
          <input
            type="url"
            id="pdfUrl"
            class="form-control"
            v-model="form.pdfUrl"
          />
        </div>

        <div class="d-flex justify-content-end">
          <button
            type="button"
            class="btn btn-secondary me-2"
            @click="closeModal()"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BookService from "@/services/BookService";

export default {
  name: "FormComponent",
  props: ["id"],
  data() {
    return {
      form: {
        id: "",
        title: "",
        author: "",
        publishDate: "",
        description: "",
        pdfUrl: "",
      },
      mode: "add",
    };
  },
  mounted() {
    if (!this.id) {
      return;
    }

    this.form = BookService.getBookById(+this.id);
    this.mode = "update";
  },
  methods: {
    onSubmit() {
      if (this.mode === "add") {
        this.form.id = BookService.findLastId() + 1;
      }

      this.$emit(this.mode, this.form);
      this.closeModal();
    },
    closeModal() {
      this.$router.push("/books");
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
