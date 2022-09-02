/**
 * *renderEditYear*
 * fungsi ini digunakan untuk melakukan rendering option pada elemen select dalam form edit,
 * sehingga pilihan dari elemen tersebut menyesuaikan dengan tahun user menggunakan aplikasi
 * */
const renderEditYear = function () {
  const editYear = document.getElementById("edit-year");
  const year = new Date().getFullYear();
  for (let i = year + 5; i >= year - 50; i--) {
    const option = document.createElement("option");
    if (i === year) option.selected = true;
    option.value = i;
    option.textContent = i;
    const option2 = option;
    editYear.appendChild(option);
  }
};

export { renderEditYear };
