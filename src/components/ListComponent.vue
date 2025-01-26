<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <input
          type="text"
          class="form-control"
          v-model="searchQuery"
          :placeholder="searchQueryPlaceholder"
        />
      </div>
      <button class="btn btn-outline-secondary" @click="toggleSortOrder">
        <i v-if="sortOrder === 1" class="bi bi-sort-numeric-up"></i>
        <i v-else class="bi bi-sort-numeric-down"></i>
      </button>
    </div>

    <ul v-if="filteredAndSortedItems.length" class="list-group">
      <ItemComponent
        v-for="(item, index) in filteredAndSortedItems"
        :key="item.id || index"
        :item="item"
        @details="emitGoToDetailsEvent($event)"
        @edit="emitEditEvent($event)"
        @delete="emitDeleteEvent($event)"
      >
        <template #title>
          <slot name="item-title" :item="item">
            <p>Placeholder for an item title</p>
          </slot>
        </template>
      </ItemComponent>
    </ul>

    <div v-else>
      <slot name="empty-list-case">
        <p class="text-muted">List is empty.</p>
      </slot>
    </div>
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
    searchQueryPlaceholder: {
      type: String,
      required: false,
      default: "Search...",
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      sortOrder: 1,
    };
  },
  computed: {
    filteredAndSortedItems() {
      let filtered = this.items.filter((item) =>
        item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      filtered.sort((a, b) => {
        const dateA = new Date(a.publishDate);
        const dateB = new Date(b.publishDate);

        if (this.sortOrder === 1) {
          return dateA - dateB;
        } else {
          return dateB - dateA;
        }
      });

      return filtered;
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 1 ? -1 : 1;
    },
    emitGoToDetailsEvent($event) {
      this.$emit("details", $event);
    },
    emitEditEvent($event) {
      this.$emit("edit", $event);
    },
    emitDeleteEvent($event) {
      this.$emit("delete", $event);
    },
  },
};
</script>
