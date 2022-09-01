const renderSelectYear = function () {
  console.log("INI SELECT RENDER YEAR");
  const selectYear = document.getElementById("select-year");
  const year = new Date().getFullYear();
  for (let i = year + 5; i >= year - 50; i--) {
    const option = document.createElement("option");
    if (i === year) option.selected = true;
    option.value = i;
    option.textContent = i;
    console.log(i);
    selectYear.appendChild(option);
  }
};

export { renderSelectYear };
