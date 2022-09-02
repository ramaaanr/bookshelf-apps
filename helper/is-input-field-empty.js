/**
 * *isEditFieldEmpty*
 * fungsi digunakan untuk melakukan pemeriksaan apakah
 * field input dalam form input data buku kosong
 * */
const isInputFieldEmpty = function () {
  const inputTitle = document.getElementById("input-title").value;
  const inputAuthor = document.getElementById("input-author").value;
  const selectYear = document.getElementById("select-year").value;
  if (inputTitle === "" || inputAuthor === "" || selectYear === "") return true;
  return false;
};

export { isInputFieldEmpty };
