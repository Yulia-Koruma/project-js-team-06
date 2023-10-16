import './category';
import './api.js';
import './category-markup.js';
import './localStorage';
import { createMarkupModalAddShopList } from './createMarkupModal';
import { createMarkupShopList } from './createMarkupShopList';
import { API_KEY } from './localStorage';

const firstPageBtn = document.getElementById('firstPage');
const prevPageBtn = document.getElementById('prevPage');
const currentPageBtn = document.getElementById('currentPage');
const nextPageBtn = document.getElementById('nextcurrentPage');
const ellipsisBtn = document.getElementById('ellipsis');
const goToLastBtn = document.getElementById('goToLast');

const maxPages = 4;
let currentPage = 1;

function updateButtons() {
  currentPageBtn.innerText = currentPage;
  nextPageBtn.innerText = currentPage + 1;
  ellipsisBtn.style.display = currentPage < maxPages - 1 ? 'block' : 'none';
}

updateButtons();

firstPageBtn.addEventListener('click', () => {
  if (currentPage !== 1) {
    currentPage = 1;
    updateButtons();
  }
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateButtons();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < maxPages) {
    currentPage++;
    updateButtons();
  }
});

goToLastBtn.addEventListener('click', () => {
  if (currentPage < maxPages) {
    currentPage = maxPages;
    updateButtons();
  }
});

// Отримуємо посилання на контейнер для книжок в кошику покупок
const shoppingList = document.querySelector('.shopping-list');

// Функція для створення DOM-елементів книжки в кошику покупок
// function createBookCard(bookData) {
//   const bookCard = document.createElement('div');
//   bookCard.classList.add('book-card');

//   const bookImage = document.createElement('img');
//   bookImage.src = bookData.book_image;
//   bookImage.alt = bookData.title;

//   const title = document.createElement('h2');
//   title.textContent = bookData.title;

//   const category = document.createElement('p');
//   category.textContent = `Category: ${bookData.category}`;

//   const description = document.createElement('p');
//   description.textContent = bookData.description;

//   const author = document.createElement('p');
//   author.textContent = `Author: ${bookData.author}`;

//   const buyLinks = document.createElement('div');
//   buyLinks.classList.add('buy-links');

//   bookData.buy_links.forEach(linkData => {
//     const link = document.createElement('a');
//     link.href = linkData.url;
//     link.textContent = `Buy on ${linkData.name}`;
//     buyLinks.appendChild(link);
//   });

//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Remove from Shopping List';
//   deleteButton.addEventListener('click', () => {
//     removeBookFromList(bookData);
//   });

//   bookCard.appendChild(bookImage);
//   bookCard.appendChild(title);
//   bookCard.appendChild(category);
//   bookCard.appendChild(description);
//   bookCard.appendChild(author);
//   bookCard.appendChild(buyLinks);
//   bookCard.appendChild(deleteButton);

//   return bookCard;
// }

function displayBooks() {
  const emptyMessage = document.querySelector('.empty-message');
 

  const savedBooks = JSON.parse(localStorage.getItem(API_KEY)) || [];
  console.log(savedBooks);

  if (savedBooks.length === 0) {
    emptyMessage.style.display = 'block';
    shoppingList.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    shoppingList.style.display = 'block';

    shoppingList.innerHTML = '';

    const markup = createMarkupShopList(savedBooks);
    shoppingList.insertAdjacentHTML('beforeend', markup);
   
  }
}

  // const deleteButton = document.querySelector('.shop-list-btn');
  //   deleteButton.addEventListener('click', () => {
  //   removeBookFromList(bookData);
  // });

function removeBookFromList(bookData) {
  const savedBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];
  const updatedBooks = savedBooks.filter( savedBook => savedBook.title !== bookData.title);

  localStorage.setItem('shoppingList', JSON.stringify(updatedBooks));
  displayBooks();
}

displayBooks();
