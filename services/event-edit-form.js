import { isEditFieldEmpty } from "../helper/is-edit-field-empty.js";
import { books } from "../models/books.js";
import { saveStorage } from "../repository/save-storage.js";
import { renderBookshelfs } from "../view/render-bookshelfs.js";
import { renderEditYear } from "../view/render-edit-year.js";

const editForm = function (book) {
  const editTitle = document.getElementById("edit-title");
  const editAuthor = document.getElementById("edit-author");
  const editYear = document.getElementById("edit-year");
  const alertEdit = document.querySelector(".alert-edit-form");
  renderEditYear();
  editAuthor.value = book.author;
  editTitle.value = book.title;
  editYear.value = book.year;
  document.getElementById("edit-submit").addEventListener("click", (event) => {
    event.preventDefault();
    if (isEditFieldEmpty()) {
      alertEdit.className = "alert alert-danger alert-edit-form";
    } else {
      alertEdit.className = "alert alert-danger alert-edit-form d-none";
      const index = books.findIndex((data) => {
        return data.id === book.id;
      });
      books[index].title = editTitle.value;
      books[index].author = editAuthor.value;
      books[index].year = editYear.value;
      console.log(books[index]);
      renderBookshelfs();
      saveStorage();
    }
  });
  document.getElementById("edit-reset").addEventListener("click", (event) => {
    editTitle.value = "";
    editAuthor.value = "";
    editAuthor.value = "";
  });
};

export { editForm };
