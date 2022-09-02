import { STORAGE_KEY } from "../config/storage-key.js";
import { books } from "../models/books.js";

const loadStorage = function () {
  const datas = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log("INI LOAD STORAGE");
  if (datas !== null) {
    for (const data of datas) {
      if (
        books.findIndex((book) => {
          return book.id === data.id;
        }) === -1
      ) {
        console.log("DITAMBAH");
        books.push(data);
      }
    }
  }
};

export { loadStorage };
