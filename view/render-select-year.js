/**
 * *renderSelectYear*
 * fungsi ini digunakan untuk melakukan rendering option pada elemen select dalam form input,
 * sehingga pilihan dari elemen tersebut menyesuaikan dengan tahun user menggunakan aplikasi
 * */
const renderSelectYear = function () {
  const selectYear = document.getElementById("select-year");

  const year = 2022;

  for (let i = year + 5; i >= year - 50; i--) {
    const option = document.createElement("option");
    if (i === year) option.selected = true;
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

export { renderSelectYear };
