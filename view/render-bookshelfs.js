/**
 * *renderBookShelfs*
 * fungsi ini digunakan untuk melakukan rendering bookshelf yang akan dijadikan
 * tempat data buku berada
 * - parameter:
 * search = "" - digunakan untuk proses pencarian/filter
 * */
import { books } from "../models/books.js";
import { createBookItem } from "../services/create-book-item.js";

const unreadyReadBookshelf = document.querySelector(".bookshelf-unready-read");
const alreadyReadBookshelf = document.querySelector(".bookshelf-already-read");
const alertUnreadyReadBookshelf = document.querySelector(".alert-unread");
const alertAlreadyReadBookshelf = document.querySelector(".alert-already-read");

const renderBookshelfs = function (search = "") {
  // Sebelum data buku dimasukan kedalam BookShelf, data buku di kosongkan terlebih dahulu
  // Akan tetapi, alert jika data tidak ada harus tetap berada di dalam BookShelf
  unreadyReadBookshelf.innerHTML = "";
  alreadyReadBookshelf.innerHTML = "";
  unreadyReadBookshelf.appendChild(alertUnreadyReadBookshelf);
  alreadyReadBookshelf.appendChild(alertAlreadyReadBookshelf);

  // Memasukan data buku
  for (const book of books) {
    // cek kondisi jika ada pencarian
    if (book.title.toLowerCase().includes(search.toLowerCase())) {
      if (book.isComplete == false) {
        // Buku belum dibaca
        unreadyReadBookshelf.appendChild(createBookItem(book));
      } else {
        // Buku sudah dibaca
        alreadyReadBookshelf.appendChild(createBookItem(book));
      }
    }
  }
};

export { renderBookshelfs };
