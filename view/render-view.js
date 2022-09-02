/**
 * *books*
 * variabel ini digunakan untuk menyimpan data buku
 */
import { books } from "../models/books.js";

/**
 * *toggleAlert*
 * fungsi ini digunakan untuk menyembunyikan dan menampilkan alert
 * pada bookshelf, apakah bookshelf berisi data buku atau tidak
 *  - Parameter:
 * unread - Buku yang belum dibaca atau buku dengan nilai isComplete = false
 * already-read - Buku yang sudah dibaca atau buku dengan nilai isComplete = true
 * */
import { renderBookshelfs } from "./render-bookshelfs.js";
import { submitForm } from "../services/event-submit-form.js";
import { hidingAlertBookshelf } from "../services/event-hiding-alert-bookshelf.js";
import { resetForm } from "../services/event-reset-form.js";
import { renderSelectYear } from "./render-select-year.js";
import { loadStorage } from "../repository/load-storage.js";
import { checkEmptyBookshelf } from "../services/check-empty-bookshelf.js";
import { buttonSearch } from "../services/event-button-search.js";
const renderView = () => {
  loadStorage();
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
