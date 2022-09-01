import { books } from "../models/books.js";

const removeBooks = function (id) {
  const bookItem = document.getElementById(id);
  bookItem.remove();

  const index = books.findIndex((book) => {
    return book.id === id;
  });

  books.splice(index, 1);
};

export { removeBooks };
