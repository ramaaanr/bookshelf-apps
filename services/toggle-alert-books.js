const toggleAlert = function (bookStatus) {
  document.querySelector(".alert-" + bookStatus).classList.toggle("d-none");
};

export { toggleAlert };
