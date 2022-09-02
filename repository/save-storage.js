/**
 * *saveStorage*
 * fungsi digunakan untuk melakukan penyimapana data kedalam localstorage
 * */
import { isStorageExist } from "../helper/is-storage-exist.js";
import { STORAGE_KEY } from "../config/storage-key.js";
import { books } from "../models/books.js";
const saveStorage = function () {
  if (isStorageExist()) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }
};

export { saveStorage };
