import './api';

document.addEventListener('DOMContentLoaded', function () {
  const booksPerPage = 10; 
  let currentPage = 1; 

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

    
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const booksToDisplay = savedBooks.slice(startIndex, endIndex);

    booksToDisplay.forEach(book => {
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

  function updatePaginationUI() {
    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    const totalPages = Math.ceil(savedBooks.length / booksPerPage);

    const pageNumbers = document.querySelector('.page-numbers');
    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.textContent = i;
      pageButton.addEventListener('click', () => {
        currentPage = i;
        displayBooks();
        updatePaginationUI();
      });
      pageNumbers.appendChild(pageButton);
    }
  }

  const prevButton = document.querySelector('.prev-button');
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      displayBooks();
      updatePaginationUI();
    }
  });

  const nextButton = document.querySelector('.next-button');
  nextButton.addEventListener('click', () => {
    const savedBooks = JSON.parse(localStorage.getItem('shoppingList'));
    if (currentPage * booksPerPage < savedBooks.length) {
      currentPage++;
      displayBooks();
      updatePaginationUI();
    }
  });

  displayBooks();
  updatePaginationUI();
});

export {
  createBookCard,
  hasBooksInLocalStorage,
  displayEmptyMessage,
  displayBooks,
  removeBookFromList,
};
