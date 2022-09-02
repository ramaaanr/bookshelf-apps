/**
 * *removeBook*
 * fungsi ini digunakan menyimpan data buku yang diterima dalam parameter
 * kedalam data books
 * - parameter:
 * book - berisi objek buku yang sebelumnya diolah
 * */
import { books } from "../models/books.js";

const removeBook = function (id) {
  const bookItem = document.getElementById(id);
  bookItem.remove();

  const index = books.findIndex((book) => {
    return book.id === id;
  });

  books.splice(index, 1);
};

export { removeBook };
