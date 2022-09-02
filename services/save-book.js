import { books } from "../models/books.js";
import { saveStorage } from "../repository/save-storage.js";
const saveBook = function (book) {
  books.push(book);
  saveStorage();
};

export { saveBook };
