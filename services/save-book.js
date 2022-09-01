import { books } from "../models/books.js";
const saveBook = function (book) {
  books.push(book);
};

export { saveBook };
