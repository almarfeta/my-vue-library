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

  populate() {
    localStorage.setItem(
      "books",
      JSON.stringify([
        {
          id: 1,
          title: "Harap-Alb",
          author: "Ion Creanga",
          publishDate: "1877-08-01",
          description:
            "Povestea lui Harap-Alb este un basm cult scris de Ion Creangă. A apărut în revista Convorbiri literare, la 1 august 1877, apoi a fost publicat în același an în ziarul Timpul de către Mihai Eminescu. Pornind de la modelul folcloric, autorul reactualizează teme de circulație universală trecându-le prin filtrul propriei viziuni; asistăm astfel la un text narativ complex, amplu și pluriepisodic, cu numeroase personaje purtătoare ale unor valori simbolice.",
          pdfUrl:
            "https://oradeliteratura.wordpress.com/wp-content/uploads/2009/06/ion-creanga-povestea-lui-harap-alb.pdf",
        },
        {
          id: 2,
          title: "Ion",
          author: "Liviu Rebreanu",
          publishDate: "1920-11-20",
          description:
            "Ion este primul roman obiectiv din literatura română, fiind apărut în anul 1920, după o lungă perioadă de elaborare, așa cum însuși autorul menționează în finalul operei, între martie 1913 - iulie 1920. Apariția romanului a stârnit un adevărat entuziasm în epocă, mai ales că nimic din creația nuvelistică de până atunci nu anunța această evoluție spectaculoasă: „Nimic din ce e publicat înainte nu ne putea face să prevedem admirabila dezvoltare a unui scriitor, care a început și a continuat vreo zece ani, nu numai fără strălucire, dar și fără indicații de viitor”, nota Eugen Lovinescu.",
          pdfUrl:
            "https://bgrmihailsturdza.wordpress.com/wp-content/uploads/2014/02/rebreanu-liviu-ion-i-cartea.pdf",
        },
        {
          id: 3,
          title: "Moara cu Noroc",
          author: "Ioan Slavici",
          publishDate: "1881-01-01",
          description:
            "Moara cu noroc este o nuvelă scrisă de Ioan Slavici, tratând consecințele pe care dorința de îmbogățire le are asupra destinului uman. Nuvela este publicată în anul 1881, în volumul Novele din popor, alături de alte nuvele ale scriitorului, precum: Popa Tanda, Gura satului, O viață pierdută, La crucea din sat, Scormon și Budulea Taichii.",
          pdfUrl: "https://www.scoalaluceafarul.ro/carti/moara_cu_noroc.pdf",
        },
      ])
    );
  },
};
