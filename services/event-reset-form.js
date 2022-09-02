/**
 * *resetForm*
 * variabel ini digunakan jika terdapat event click reset pada form input
 * */
import { resetInputField } from "./reset-input-field.js";

const resetForm = document
  .getElementById("btn-reset")
  .addEventListener("click", (event) => {
    event.preventDefault();
    resetInputField();
  });

export { resetForm };
