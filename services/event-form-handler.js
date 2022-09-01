import { renderBookshelfs } from "../view/render-bookshelfs.js";
import { saveBook } from "./save-book.js";
import { checkEmptyBookshelf } from "./check-empty-bookshelf.js";
import { renderFormAddBook } from "../view/render-form-add-book.js";
const formHandler = document
  .getElementById("btn-submit")
  .addEventListener("click", (event) => {
    event.preventDefault();
    const inputTitle = document.getElementById("input-title").value;
    const inputAuthor = document.getElementById("input-author").value;
    const selectYear = document.getElementById("select-year").value;

    const book = {};
    book.id = Date.now();
    book.title = inputTitle;
    book.author = inputAuthor;
    book.year = selectYear;
    book.isComplete = false;

    saveBook(book);
    renderBookshelfs(book);
    renderFormAddBook();
    checkEmptyBookshelf(true);
  });

export { formHandler };
