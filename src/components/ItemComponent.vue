<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>
      <strong>{{ item.title }}</strong> - {{ item.author }}
    </span>

    <span class="buttons-container">
      <button
        class="btn btn-outline-primary btn-sm me-2"
        @click="goToDetails()"
      >
        <i class="bi bi-box-arrow-up-right"></i> More
      </button>
      <button
        class="btn btn-outline-warning btn-sm me-2"
        @click="emitEditEvent()"
      >
        <i class="bi bi-pencil"></i> Edit
      </button>
      <button class="btn btn-outline-danger btn-sm" @click="emitDeleteEvent()">
        <i class="bi bi-trash"></i> Delete
      </button>
    </span>
  </li>
</template>

<script>
export default {
  name: "ItemComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToDetails() {
      this.$router.push(`/books/${this.item.id}`);
    },
    emitEditEvent() {
      this.$emit("edit", this.item);
    },
    emitDeleteEvent() {
      this.$emit("delete", this.item);
    },
  },
};
</script>

<style scoped>
.list-group-item {
  border: none;
  border-bottom: 1px solid #ddd;
}

@media (max-width: 576px) {
  .buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 0.5rem;
  }
}
</style>
