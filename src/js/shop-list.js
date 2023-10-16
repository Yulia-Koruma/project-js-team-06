import './category';
import './api.js';
import './category-markup.js';
import './localStorage';
import { createMarkupModalAddShopList } from './createMarkupModal';

const firstPageBtn = document.getElementById('firstPage');
const prevPageBtn = document.getElementById('prevPage');
const currentPageBtn = document.getElementById('currentPage');
const nextcurrentPageBtn = document.getElementById('nextcurrentPage');
const ellipsisBtn = document.getElementById('ellipsis');
const nextPageBtn = document.getElementById('nextPage');
const goToLastBtn = document.getElementById('goToLast');
const maxItemsPerPage = 4;

let currentPage = 1;
let booksPerPage = [];
let savedBooks = getBooksFromLocalStorage();

function updateButtons() {
  currentPageBtn.innerText = currentPage;
  nextcurrentPageBtn.innerText = currentPage + 1;
  const maxPages = Math.ceil(savedBooks.length / maxItemsPerPage);
  ellipsisBtn.style.display = currentPage < maxPages - 1 ? 'block' : 'none';
}

function getBooksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('shoppingList')) || [];
}

function displayBooks() {
  const emptyMessage = document.querySelector('.empty-message');
  const shoppingList = document.querySelector('.shopping-list');
  savedBooks = getBooksFromLocalStorage();

  const maxPages = Math.ceil(savedBooks.length / maxItemsPerPage);

  if (savedBooks.length === 0) {
    emptyMessage.style.display = 'block';
    shoppingList.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    shoppingList.style.display = 'block';

    shoppingList.innerHTML = '';
    booksPerPage = savedBooks.slice(
      (currentPage - 1) * maxItemsPerPage,
      currentPage * maxItemsPerPage
    );

    booksPerPage.forEach(bookData => {
      const bookCard = createBookCard(bookData);
      shoppingList.appendChild(bookCard);
    });
  }
}

function removeBookFromList(bookData) {
  const updatedBooks = savedBooks.filter(savedBook => savedBook.title !== bookData.title);
  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
  displayBooks();
}

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

updateButtons();

firstPageBtn.addEventListener('click', () => {
  if (currentPage !== 1) {
    currentPage = 1;
    displayBooks();
    updateButtons();
  }
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayBooks();
    updateButtons();
  }
});

nextPageBtn.addEventListener('click', () => {
  const maxPages = Math.ceil(savedBooks.length / maxItemsPerPage);
  if (currentPage < maxPages) {
    currentPage++;
    displayBooks();
    updateButtons();
  }
});

goToLastBtn.addEventListener('click', () => {
  const maxPages = Math.ceil(savedBooks.length / maxItemsPerPage);
  if (currentPage < maxPages) {
    currentPage = maxPages;
    displayBooks();
    updateButtons();
  }
});

nextcurrentPageBtn.addEventListener('click', () => {
  const maxPages = Math.ceil(savedBooks.length / maxItemsPerPage);
  if (currentPage < maxPages) {
    currentPage++;
    displayBooks();
    updateButtons();
  }
});

displayBooks();
