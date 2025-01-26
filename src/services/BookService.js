export default {
  getBooks() {
    return JSON.parse(localStorage.getItem("books")) || [];
  },

  addBook(book) {
    const books = this.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  },

  deleteBook(id) {
    const books = this.getBooks().filter((book) => book.id !== id);
    localStorage.setItem("books", JSON.stringify(books));
  },

  updateBook(updatedBook) {
    const books = this.getBooks().map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );
    localStorage.setItem("books", JSON.stringify(books));
  },

  getBookById(id) {
    return this.getBooks().find((book) => book.id === id) || null;
  },

  findLastId() {
    return Math.max(...this.getBooks().map((book) => book.id));
  },
};
