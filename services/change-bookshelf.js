/**
 * *changeBookShelf*
 * fungsi ini digunakan untuk memindahkan buku dalam bookshelf
 * - parameter:
 * id - data digunakan untuk menangkap elemen mana yang akan diubah
 * isComplete - data digunakan untuk menangkap bookshelf
 * */
import { checkEmptyBookshelf } from "./check-empty-bookshelf.js";

const changeBookshelf = function (id, isComplete) {
  const newBookShelf = isComplete
    ? document.querySelector(".bookshelf-unready-read")
    : document.querySelector(".bookshelf-already-read");

  const originBookItem = document.getElementById(id);
  const newBookItem = document.getElementById(id);
  originBookItem.remove();
  newBookShelf.appendChild(newBookItem);
  checkEmptyBookshelf(isComplete);
};

export { changeBookshelf };
