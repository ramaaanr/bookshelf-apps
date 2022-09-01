/**
 * *books*
 * variabel ini digunakan untuk menyimpan data buku
 */
import { books } from "../models/books.js";
import { checkEmptyBookshelf } from "../services/check-empty-bookshelf.js";
import { createBookItem } from "../services/create-book-item.js";
import { isBookAlreadyInBookshelf } from "../services/is-book-already-In-bookshelf.js";

const unreadyReadBookshelf = document.querySelector(".bookshelf-unready-read");
const alreadyReadBookshelf = document.querySelector(".bookshelf-already-read");

const renderBookshelfs = function () {
  for (const book of books) {
    if (isBookAlreadyInBookshelf(book.id, books.isComplete) === false) {
      if (book.isComplete == false) {
        unreadyReadBookshelf.appendChild(createBookItem(book));
      } else {
        alreadyReadBookshelf.appendChild(createBookItem(book));
      }
    }
  }
};

export { renderBookshelfs };
