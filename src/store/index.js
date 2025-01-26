import { createStore } from "vuex";
import booksModule from "@/modules/books";

export default createStore({
  modules: {
    books: booksModule,
  },
});
