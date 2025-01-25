<template>
  <div>
    <ul v-if="items && items.length" class="list-group">
      <ItemComponent
        v-for="(item, index) in items"
        :key="item.id || index"
        :item="item"
        @edit="handleEdit(item)"
        @delete="handleDelete(item)"
      />
    </ul>

    <slot name="empty-list-case" v-else>
      <p class="text-muted">No items to display.</p>
    </slot>
  </div>
</template>

<script>
import ItemComponent from "@/components/ItemComponent.vue";

export default {
  name: "ListComponent",
  components: {
    ItemComponent,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleEdit(item) {
      //TODO: Implement this function
      console.log("Editing item: ", item);
    },
    handleDelete(item) {
      //TODO: Implement this function
      console.log("Deleting item: ", item);
    },
  },
};
</script>
