import BookService from "@/services/BookService";

const booksModule = {
  namespaced: true,
  state: () => ({
    books: [],
  }),
  getters: {
    allBooks(state) {
      return state.books;
    },
  },
  mutations: {
    SET_BOOKS(state, books) {
      state.books = books;
    },
    ADD_BOOK(state, book) {
      state.books.push(book);
    },
    UPDATE_BOOK(state, updatedBook) {
      const index = state.books.findIndex((b) => b.id === updatedBook.id);
      if (index !== -1) {
        state.books[index] = updatedBook;
      }
    },
    DELETE_BOOK(state, bookId) {
      state.books = state.books.filter((b) => b.id !== bookId);
    },
  },
  actions: {
    fetchBooks({ commit }) {
      const books = BookService.getBooks();
      commit("SET_BOOKS", books);
    },
    addBook({ commit }, book) {
      book.id = BookService.findLastId() + 1;
      BookService.addBook(book);
      commit("ADD_BOOK", book);
    },
    updateBook({ commit }, updatedBook) {
      BookService.updateBook(updatedBook);
      commit("UPDATE_BOOK", updatedBook);
    },
    deleteBook({ commit }, bookId) {
      BookService.deleteBook(bookId);
      commit("DELETE_BOOK", bookId);
    },
  },
};

export default booksModule;
