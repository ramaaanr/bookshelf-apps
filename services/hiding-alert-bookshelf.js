/**
 * *hidingAlertBookShelf*
 * fungsi ini digunakan untuk menyembunyikan alert jika buku tidak kosong
 * - parameter:
 * bookStatus - berisi string yang akan menentukan element alert mana yang akan disembunyikan
 * */
const hidingAlertBookshelf = function (bookStatus) {
  document.querySelector(".alert-" + bookStatus).classList.add("d-none");
};

export { hidingAlertBookshelf };
