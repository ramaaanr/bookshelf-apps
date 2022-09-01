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
import { formHandler } from "../services/event-form-handler.js";
import { hidingAlertBookshelf } from "../services/event-hiding-alert-bookshelf.js";
import { renderFormAddBook } from "./render-form-add-book.js";
const renderView = function () {
  if (books.length === 0) {
  } else {
    hidingAlertBookshelf("unread");
    hidingAlertBookshelf("already-read");
    renderFormAddBook();
    renderBookshelfs();
  }
  formHandler;
};

export { renderView };
