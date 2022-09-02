import { saveStorage } from "../repository/save-storage.js";
import { checkEmptyBookshelf } from "./check-empty-bookshelf.js";

const changeBookshelf = function (id, isComplete) {
  const newBookShelf = isComplete
    ? document.querySelector(".bookshelf-unready-read")
    : document.querySelector(".bookshelf-already-read");

  const originBookItem = document.getElementById(id);
  const newBookItem = document.getElementById(id);
  originBookItem.remove();
  newBookShelf.appendChild(newBookItem);
  checkEmptyBookshelf(isComplete);
};

export { changeBookshelf };
