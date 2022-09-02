/**
 * *showAlertBookShelf*
 * fungsi ini digunakan untuk menampilkan alert jika buku kosong
 * - parameter:
 * bookStatus - berisi string yang akan menentukan element alert mana yang akan ditampilkan
 * */
const showAlertBookshelf = function (bookStatus) {
  document.querySelector(".alert-" + bookStatus).classList.remove("d-none");
};

export { showAlertBookshelf };
