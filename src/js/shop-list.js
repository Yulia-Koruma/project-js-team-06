import './category';
import { fetchCategoryList, fetchBooksByCategory } from './api.js';
import { createCategoryList, createBookList } from './category-markup.js';

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.items li');
  const firstButton = document.getElementById('firstPage');
  const prevButton = document.getElementById('prevPage');
  const pageNumbers = document.getElementById('pageNumbers');
  const nextButton = document.getElementById('nextPage');
  const lastButton = document.getElementById('lastPage');
  let currentPage = 1;
  const itemsPerPage = 5; // Кількість елементів на сторінці

  function showPage(page) {
    items.forEach((item, index) => {
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      if (index >= startIndex && index < endIndex) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  function updatePageNumbers(totalPages) {
    let pageNumbersHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      pageNumbersHTML += `<button class="page">${i}</button>`;
    }
    pageNumbers.innerHTML = pageNumbersHTML;

    const pageButtons = document.querySelectorAll('.page');
    pageButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentPage = index + 1;
        showPage(currentPage);
        updatePageNumbers(totalPages);
      });
    });
  }

  function updatePaginationUI() {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    updatePageNumbers(totalPages);
  }

  firstButton.addEventListener('click', () => {
    currentPage = 1;
    showPage(currentPage);
    updatePaginationUI();
  });

  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
      updatePaginationUI();
    }
  });

  nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
      updatePaginationUI();
    }
  });

  lastButton.addEventListener('click', () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    currentPage = totalPages;
    showPage(currentPage);
    updatePaginationUI();
  });

  // Показати першу сторінку при завантаженні
  showPage(currentPage);
  updatePaginationUI();
});

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
