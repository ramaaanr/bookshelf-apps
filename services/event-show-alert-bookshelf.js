const showAlertBookshelf = function (bookStatus) {
  document.querySelector(".alert-" + bookStatus).classList.remove("d-none");
};

export { showAlertBookshelf };
