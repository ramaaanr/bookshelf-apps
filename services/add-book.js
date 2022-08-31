/**
 * *books*
 * variabel ini digunakan untuk menyimpan data buku
 */
import { books } from "./../models/books.js";
import { createBookItem } from "./create-book-item.js";

const unreadyReadBookshelf = document.querySelector(".bookshelf-unready-read");
const alreadyReadBookshelf = document.querySelector(".bookshelf-already-read");

const addBook = function () {
  for (const book of books) {
    if (book.isComplete == false) {
      unreadyReadBookshelf.appendChild(createBookItem(book));
    } else {
      alreadyReadBookshelf.appendChild(createBookItem(book));
    }
  }
};

export { addBook };
