/**
 * *checkEmptyBookShelf*
 * fungsi ini digunakan melakukan pemeriksaan apakah bookshelf
 * kosong dan akan menampilkan atau menyembunyikan alert dalam bookshelf
 * - parameter:
 * isComplete - berisi data true/false yang akan menjadi penentu bookshelf mana yang akan diperiksa
 * */
import { showAlertBookshelf } from "./show-alert-bookshelf.js";
import { hidingAlertBookshelf } from "./hiding-alert-bookshelf.js";
const alreadyReadBookshelf = document.querySelector(".bookshelf-already-read");
const unreadyReadBookshelf = document.querySelector(".bookshelf-unready-read");
const checkEmptyBookshelf = function (isComplete) {
  if (isComplete) {
    if (alreadyReadBookshelf.childElementCount === 1) {
      showAlertBookshelf("already-read");
    }
    if (
      unreadyReadBookshelf.childElementCount > 1 &&
      unreadyReadBookshelf.classList.contains("d-none") === false
    ) {
      hidingAlertBookshelf("unread");
    }
  } else {
    if (unreadyReadBookshelf.childElementCount === 1) {
      showAlertBookshelf("unread");
    }
    if (
      alreadyReadBookshelf.childElementCount > 1 &&
      alreadyReadBookshelf.classList.contains("d-none") === false
    ) {
      hidingAlertBookshelf("already-read");
    }
  }
};

export { checkEmptyBookshelf };
