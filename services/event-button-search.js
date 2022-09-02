/**
 * *buttonSearch*
 * variabel ini digunakan jika terdapat pencarian
 * */
import { renderBookshelfs } from "../view/render-bookshelfs.js";
import { checkEmptyBookshelf } from "./check-empty-bookshelf.js";

const buttonSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    const searchBox = document.getElementById("search-box").value;
    renderBookshelfs(searchBox);
    checkEmptyBookshelf(true);
    checkEmptyBookshelf(false);
  });

export { buttonSearch };
