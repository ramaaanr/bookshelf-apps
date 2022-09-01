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
import { toggleAlert } from "../services/event-toggle-alert-books.js";
import { renderBookshelfs } from "./render-bookshelfs.js";
import { formHandler } from "../services/event-form-handler.js";
const renderView = function () {
  if (books.length === 0) {
  } else {
    toggleAlert("unread");
    toggleAlert("already-read");
    renderBookshelfs();
  }
  formHandler;
};

export { renderView };
