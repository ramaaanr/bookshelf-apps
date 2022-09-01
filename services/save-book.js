import { STORAGE_KEY } from "../config/storage-key.js";
import { books } from "../models/books.js";
import { isStorageExist } from "./is-storage-exist.js";
const saveBook = function (book) {
  books.push(book);
};

export { saveBook };
