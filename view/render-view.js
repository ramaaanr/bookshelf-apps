/**
 * *renderView*
 * fungsi ini digunakan untuk melakukan rendering component yang membantu jalannya aplikasi
 * */
import { books } from "../models/books.js";
import { renderBookshelfs } from "./render-bookshelfs.js";
import { submitForm } from "../services/event-submit-form.js";
import { resetForm } from "../services/event-reset-form.js";
import { renderSelectYear } from "./render-select-year.js";
import { loadStorage } from "../repository/load-storage.js";
import { checkEmptyBookshelf } from "../services/check-empty-bookshelf.js";
import { buttonSearch } from "../services/event-button-search.js";
const renderView = () => {
  loadStorage();
  // Cek kondisi apakah data buku-buku kosong
  if (books.length !== 0) {
    renderBookshelfs();
    checkEmptyBookshelf(true);
    checkEmptyBookshelf(false);
  }
  submitForm;
  resetForm;
  buttonSearch;
  renderSelectYear();
};

export { renderView };
