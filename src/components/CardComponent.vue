<template>
  <div class="card shadow-sm mb-3" :class="{ 'text-center': centerText }">
    <slot name="image"></slot>
    <div class="card-body">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    centerText: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  overflow: hidden;
}
</style>
