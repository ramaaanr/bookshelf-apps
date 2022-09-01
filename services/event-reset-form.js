import { resetInputField } from "./reset-input-field.js";

const resetForm = document
  .getElementById("btn-reset")
  .addEventListener("click", (event) => {
    event.preventDefault();
    resetInputField();
  });

export { resetForm };
