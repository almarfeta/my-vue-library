import { createStore } from "vuex";
import booksModule from "@/modules/books";
import userModule from "@/modules/user";

export default createStore({
  modules: {
    books: booksModule,
    users: userModule,
  },
});
