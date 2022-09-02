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
