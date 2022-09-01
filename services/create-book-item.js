import { changeBookshelf } from "./change-bookshelf.js";
import { checkEmptyBookshelf } from "./check-empty-bookshelf.js";
import { removeBooks } from "./remove-book.js";

const createBookItem = function (book) {
  // Card
  const card = document.createElement("div");
  card.className = "card";
  card.id = book.id;

  // CardBody <- Card
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Button Check <- CardBody <- Card
  const buttonCheck = document.createElement("button");
  buttonCheck.className = "btn-read;";
  const iconCheck = document.createElement("i");
  iconCheck.className = "bi bi-circle check";

  buttonCheck.addEventListener("click", () => {
    changeBookshelf(book.id, book.isComplete);
    iconCheck.className = "bi bi-circle check";
    book.isComplete = book.isComplete ? false : true;
  });

  buttonCheck.addEventListener("mouseenter", () => {
    iconCheck.className = "bi bi-check-circle-fill check";
  });

  buttonCheck.addEventListener("mouseleave", () => {
    iconCheck.className = "bi bi-circle check";
  });
  buttonCheck.appendChild(iconCheck);

  // Book Details <- CardBody <- Card
  const bookItem = document.createElement("div");
  bookItem.className = "book-item";

  const bookTitle = document.createElement("h1");
  bookTitle.className = "book-title";
  bookTitle.textContent = book.title;
  bookItem.appendChild(bookTitle);

  const bookYear = document.createElement("h2");
  bookYear.className = "book-year";
  bookYear.textContent = book.year;
  bookItem.appendChild(bookYear);

  const bookAuthor = document.createElement("p");
  bookAuthor.className = "book-author";
  bookAuthor.textContent = book.author;
  bookItem.appendChild(bookAuthor);

  // Button Remove <- CardBody <- Card
  const buttonRemove = document.createElement("button");
  buttonRemove.className = "btn-remove;";
  const iconRemove = document.createElement("i");
  iconRemove.className = "bi bi-trash trash";

  buttonRemove.addEventListener("click", () => {
    removeBooks(book.id);
    checkEmptyBookshelf(book.isComplete);
  });

  buttonRemove.addEventListener("mouseenter", () => {
    iconRemove.className = "bi bi-trash-fill trash";
  });

  buttonRemove.addEventListener("mouseleave", () => {
    iconRemove.className = "bi bi-trash trash";
  });
  buttonRemove.appendChild(iconRemove);

  cardBody.appendChild(buttonCheck);
  cardBody.appendChild(bookItem);
  cardBody.appendChild(buttonRemove);
  card.appendChild(cardBody);
  return card;
};

export { createBookItem };
