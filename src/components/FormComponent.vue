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
            :class="{ 'is-invalid': errors.title }"
          />
          <div v-if="errors.title" class="invalid-feedback">
            {{ errors.title }}
          </div>
        </div>

        <div class="mb-3">
          <label for="author" class="form-label">Author</label>
          <input
            type="text"
            id="author"
            class="form-control"
            v-model="form.author"
            required
            :class="{ 'is-invalid': errors.author }"
          />
          <div v-if="errors.author" class="invalid-feedback">
            {{ errors.author }}
          </div>
        </div>

        <div class="mb-3">
          <label for="publishDate" class="form-label">Publish Date</label>
          <input
            type="date"
            id="publishDate"
            class="form-control"
            v-model="form.publishDate"
            required
            :class="{ 'is-invalid': errors.publishDate }"
          />
          <div v-if="errors.publishDate" class="invalid-feedback">
            {{ errors.publishDate }}
          </div>
        </div>

        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea
            id="description"
            class="form-control"
            rows="4"
            v-model="form.description"
            required
            :class="{ 'is-invalid': errors.description }"
          ></textarea>
          <div v-if="errors.description" class="invalid-feedback">
            {{ errors.description }}
          </div>
        </div>

        <div class="mb-3">
          <label for="pdfUrl" class="form-label">PDF URL</label>
          <input
            type="url"
            id="pdfUrl"
            class="form-control"
            v-model="form.pdfUrl"
            required
            :class="{ 'is-invalid': errors.pdfUrl }"
          />
          <div v-if="errors.pdfUrl" class="invalid-feedback">
            {{ errors.pdfUrl }}
          </div>
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
      errors: {},
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
    validateForm() {
      this.errors = {};

      if (!this.form.title.trim()) {
        this.errors.title = "Title is required.";
      }
      if (!this.form.author.trim()) {
        this.errors.author = "Author is required.";
      }
      if (!this.form.publishDate) {
        this.errors.publishDate = "Publish date is required.";
      }
      if (!this.form.description.trim()) {
        this.errors.description = "Description is required.";
      }
      if (!this.form.pdfUrl.trim()) {
        this.errors.pdfUrl = "PDF URL is required.";
      } else if (!/^https?:\/\/\S*\.pdf$/.test(this.form.pdfUrl)) {
        this.errors.pdfUrl = "Please enter a valid PDF URL.";
      }

      return Object.keys(this.errors).length === 0;
    },
    onSubmit() {
      if (!this.validateForm()) {
        return;
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
.is-invalid {
  border-color: #dc3545;
}

.invalid-feedback {
  color: #dc3545;
  font-size: 0.875em;
}

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
  max-height: 95%;
  overflow: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}
</style>
