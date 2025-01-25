<template>
  <div class="container mt-4">
    <CardComponent>
      <template #content>
        <h5 class="card-title">
          <strong>{{ book.title }}</strong> - <i>{{ book.author }}</i>
        </h5>
        <p class="card-text">
          {{ book.description }}
        </p>
        <button class="btn btn-secondary mb-3" @click="makeFullScreen()">
          <i class="bi bi-arrows-fullscreen"></i>
          Reader mode
        </button>
        <iframe
          ref="pdfIframe"
          :src="book.pdfUrl"
          width="100%"
          height="500px"
          style="border: none"
        />
      </template>
    </CardComponent>
  </div>
</template>

<script>
import BookService from "@/services/BookService";
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "BookDetailsViewView",
  components: { CardComponent },
  props: ["id"],
  data() {
    return {
      book: null,
    };
  },
  created() {
    this.book = BookService.getBookById(+this.id);
  },
  methods: {
    makeFullScreen() {
      const iframe = this.$refs.pdfIframe;
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      }
    },
  },
};
</script>
