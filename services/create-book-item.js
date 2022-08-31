const createBookItem = function (book) {
  /**
     *
     *<div class="card">
        <div class="card-body">
            <button class="btn-read">
                <i class="bi bi-circle check"></i>
            </button>
            <div class="book-item">
                <h1 id="book-title">Judul Buku</h1>
                <h2 id="book-year">2022</h2>
                <p id="book-author">Author</p>
            </div>
            <button class="btn-remove">
                 <i class="bi bi-trash-fill"></i>
            </button>
        </div>
     </div>
     */
  // Card
  const card = document.createElement("div");
  card.className = "card";

  // CardBody <- Card
  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  // Button Check <- CardBody <- Card
  const buttonCheck = document.createElement("button");
  buttonCheck.className = "btn-read;";
  const iconCheck = document.createElement("i");
  iconCheck.className = "bi bi-circle check";
  buttonCheck.appendChild(iconCheck);

  // Book Details <- CardBody <- Card
  //   <div class="book-item">
  //     <h1 id="book-title">Judul Buku</h1>
  //     <h2 id="book-year">2022</h2>
  //     <p id="book-author">Author</p>
  //   </div>;
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
  iconRemove.className = "bi bi-trash-fill";
  buttonRemove.appendChild(iconRemove);

  cardBody.appendChild(buttonCheck);
  cardBody.appendChild(bookItem);
  cardBody.appendChild(buttonRemove);
  card.appendChild(cardBody);
  return card;
};

export { createBookItem };
