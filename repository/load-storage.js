/**
 * *loadStorage*
 * fungsi digunakan untuk melakukan pengambilan data dari localstorage
 * agar dapat dimuat kedalam model books
 * */
import { STORAGE_KEY } from "../config/storage-key.js";
import { books } from "../models/books.js";

const loadStorage = function () {
  const datas = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (datas !== null) {
    for (const data of datas) {
      if (
        books.findIndex((book) => {
          return book.id === data.id;
        }) === -1
      ) {
        books.push(data);
      }
    }
  }
};

export { loadStorage };
