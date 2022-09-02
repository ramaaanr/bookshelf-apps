/**
 * *renderInputField*
 * fungsi ini digunakan untuk mebersihkan input field kembali ke default
 * */
const resetInputField = function () {
  document.getElementById("input-title").value = "";
  document.getElementById("input-author").value = "";
  document.getElementById("select-year").value = new Date().getFullYear();
};

export { resetInputField };
