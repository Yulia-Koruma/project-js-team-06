import './api';

document.addEventListener('DOMContentLoaded', function () {
  function createBookCard(bookData) {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookImage = document.createElement('img');
    bookImage.src = bookData.book_image;
    bookImage.alt = bookData.title;

    const title = document.createElement('h2');
    title.textContent = bookData.title;

    const category = document.createElement('p');
    category.textContent = `Category: ${bookData.category}`;

    const description = document.createElement('p');
    description.textContent = bookData.description;

    const author = document.createElement('p');
    author.textContent = `Author: ${bookData.author}`;

    const buyLinks = document.createElement('div');
    buyLinks.classList.add('buy-links');

    bookData.buy_links.forEach(linkData => {
      const link = document.createElement('a');
      link.href = linkData.url;
      link.textContent = `Buy on ${linkData.name}`;
      buyLinks.appendChild(link);
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remove from Shopping List';
    deleteButton.addEventListener('click', () => {
      removeBookFromList(bookData);
    });

    bookCard.appendChild(bookImage);
    bookCard.appendChild(title);
    bookCard.appendChild(category);
    bookCard.appendChild(description);
    bookCard.appendChild(author);
    bookCard.appendChild(buyLinks);
    bookCard.appendChild(deleteButton);

    return bookCard;
  }

  function hasBooksInLocalStorage() {
    return localStorage.getItem('shoppingList') !== null;
  }

  function displayEmptyMessage() {
    const emptyMessage = document.querySelector('.empty-message');
    emptyMessage.style.display = 'block';
  }

  function displayBooks() {
    const shoppingList = document.querySelector('.shopping-list');
    shoppingList.innerHTML = '';

    if (!hasBooksInLocalStorage()) {
      displayEmptyMessage();
      return;
    }

    const emptyMessage = document.querySelector('.empty-message');
    emptyMessage.style.display = 'none';

    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    savedBooks.forEach(book => {
      const bookCard = createBookCard(book);
      shoppingList.appendChild(bookCard);
    });
  }

  function removeBookFromList(book) {
    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    const bookIndex = savedBooks.findIndex(
      savedBook => savedBook.title === book.title
    );
    if (bookIndex !== -1) {
      savedBooks.splice(bookIndex, 1);
      localStorage.setItem('shoppingList', JSON.stringify(savedBooks));
      displayBooks();
    }
  }

  displayBooks();
});
