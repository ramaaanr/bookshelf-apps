/**
 * *saveBook*
 * fungsi ini digunakan menyimpan data buku yang diterima dalam parameter
 * kedalam data books
 * - parameter:
 * book - berisi objek buku yang sebelumnya diolah
 * */
import { books } from "../models/books.js";
import { saveStorage } from "../repository/save-storage.js";

const saveBook = function (book) {
  books.push(book);
  saveStorage();
};

export { saveBook };
