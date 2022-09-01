const hidingAlertBookshelf = function (bookStatus) {
  document.querySelector(".alert-" + bookStatus).classList.add("d-none");
};

export { hidingAlertBookshelf };
