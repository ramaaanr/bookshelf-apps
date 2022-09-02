/**
 * *books*
 * variabel ini digunakan untuk menyimpan data buku
 */
import { books } from "../models/books.js";
import { createBookItem } from "../services/create-book-item.js";
import { isBookAlreadyInBookshelf } from "../helper/is-book-already-In-bookshelf.js";

const unreadyReadBookshelf = document.querySelector(".bookshelf-unready-read");
const alreadyReadBookshelf = document.querySelector(".bookshelf-already-read");
const alertUnreadyReadBookshelf = document.querySelector(".alert-unread");
const alertAlreadyReadBookshelf = document.querySelector(".alert-already-read");
const renderBookshelfs = function (search = "") {
  unreadyReadBookshelf.innerHTML = "";
  alreadyReadBookshelf.innerHTML = "";
  unreadyReadBookshelf.appendChild(alertUnreadyReadBookshelf);
  alreadyReadBookshelf.appendChild(alertAlreadyReadBookshelf);
  for (const book of books) {
    console.log("Cari : " + search);
    console.log("Status : " + book.title.includes(search));
    if (book.title.includes(search)) {
      if (book.isComplete == false) {
        unreadyReadBookshelf.appendChild(createBookItem(book));
      } else {
        alreadyReadBookshelf.appendChild(createBookItem(book));
      }
    }
  }
};

export { renderBookshelfs };
