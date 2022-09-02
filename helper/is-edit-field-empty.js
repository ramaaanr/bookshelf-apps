/**
 * *isEditFieldEmpty*
 * fungsi digunakan untuk melakukan pemeriksaan apakah
 * field input dalam form edit kosong
 * */
const isEditFieldEmpty = function () {
  const editTitle = document.getElementById("edit-title").value;
  const editAuthor = document.getElementById("edit-author").value;
  const selectYear = document.getElementById("edit-year").value;
  if (editTitle === "" || editAuthor === "" || selectYear === "") return true;
  return false;
};

export { isEditFieldEmpty };
