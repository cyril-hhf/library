const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleReadStatus = function() {
  this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const shelf = document.querySelector('.shelf');
  shelf.innerHTML = '<button id="newBookButton">ADD NEW BOOK!</button>'; // Clear existing content and re-add button

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.dataset.index = index;

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
      <button onclick="removeBook(${index})">Remove</button>
      <button onclick="toggleReadStatus(${index})">Change Read Status</button>
    `;

    shelf.appendChild(bookCard);
  });

  document.getElementById('newBookButton').addEventListener('click', () => {
    document.getElementById('bookFormDialog').showModal();
  });
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function toggleReadStatus(index) {
  myLibrary[index].toggleReadStatus();
  displayBooks();
}

document.getElementById('newBookButton').addEventListener('click', () => {
  document.getElementById('bookFormDialog').showModal();
});

document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').checked;

  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);

  document.getElementById('bookFormDialog').close();
  this.reset();
});

// Example to add a few books manually
addBookToLibrary(new Book('For one more day', 'Mitch Albom', 197, false));
addBookToLibrary(new Book('Open Water Diver Manual', 'PADI', 247, true));
addBookToLibrary(new Book('1984', 'George Orwell', 328, true));
addBookToLibrary(new Book('To Kill a Mockingbird', 'Harper Lee', 281, false));
addBookToLibrary(new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180, true));
addBookToLibrary(new Book('The Catcher in the Rye', 'J.D. Salinger', 214, false));
addBookToLibrary(new Book('Pride and Prejudice', 'Jane Austen', 279, true));
addBookToLibrary(new Book('The Hobbit', 'J.R.R. Tolkien', 310, false));
addBookToLibrary(new Book('Fahrenheit 451', 'Ray Bradbury', 194, true));
addBookToLibrary(new Book('Jane Eyre', 'Charlotte Brontë', 500, false));
addBookToLibrary(new Book('Animal Farm', 'George Orwell', 112, true));
addBookToLibrary(new Book('Moby-Dick', 'Herman Melville', 635, false));

