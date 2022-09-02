import { renderBookshelfs } from "../view/render-bookshelfs.js";

const buttonSearch = document
  .getElementById("btn-search")
  .addEventListener("click", () => {
    const searchBox = document.getElementById("search-box").value;
    renderBookshelfs(searchBox);
  });

export { buttonSearch };
