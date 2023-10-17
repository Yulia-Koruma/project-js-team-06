import { createMarkupShopList } from './createMarkupShopList';
import { API_KEY, getFromLocal, removeFromLocal } from './localStorage';

const emptyMessage = document.querySelector('.empty-message');
const shoppingList = document.querySelector('.shopping-list');

const firstPageBtn = document.getElementById('firstPage');
const prevPageBtn = document.getElementById('prevPage');
const currentPageBtn = document.getElementById('currentPage');
const nextcurrentPageBtn = document.getElementById('nextcurrentPage');
const ellipsisBtn = document.getElementById('ellipsis');
const nextPageBtn = document.getElementById('nextPage');
const goToLastBtn = document.getElementById('goToLast');

// Определите максимальное количество книг на странице
const booksPerPage = 4;

// Переменные для хранения состояния пагинации
let currentPage = 1;
let maxPages;

function updateButtons() {
  currentPageBtn.textContent = currentPage;
  nextcurrentPageBtn.textContent = currentPage + 1;
  ellipsisBtn.style.display = currentPage < maxPages - 1 ? 'block' : 'none';

  // Проверка и обновление видимости кнопок в соответствии с текущей страницей
  firstPageBtn.disabled = currentPage === 1;
  prevPageBtn.disabled = currentPage === 1;
  nextPageBtn.disabled = currentPage === maxPages;
  goToLastBtn.disabled = currentPage === maxPages;
}

function displayBooksOnPage() {
  const savedBooks = getFromLocal(API_KEY) || [];

  if (savedBooks.length === 0) {
    emptyMessage.style.display = 'block';
    shoppingList.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    shoppingList.style.display = 'block';

    // Вычислите индексы начала и конца книг на текущей странице
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;

    // Отобразите только книги на текущей странице
    const booksToDisplay = savedBooks.slice(startIndex, endIndex);
    const markup = createMarkupShopList(booksToDisplay);

    shoppingList.innerHTML = markup;
  }
}

function updateMaxPages() {
  const savedBooks = getFromLocal(API_KEY) || [];
  maxPages = Math.ceil(savedBooks.length / booksPerPage);
}

// Инициализация максимального количества страниц и кнопок
updateMaxPages();
updateButtons();

firstPageBtn.addEventListener('click', () => {
  if (currentPage !== 1) {
    currentPage = 1;
    updateButtons();
    displayBooksOnPage();
  }
});

prevPageBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateButtons();
    displayBooksOnPage();
  }
});

nextPageBtn.addEventListener('click', () => {
  if (currentPage < maxPages) {
    currentPage++;
    updateButtons();
    displayBooksOnPage();
  }
});

goToLastBtn.addEventListener('click', () => {
  if (currentPage < maxPages) {
    currentPage = maxPages;
    updateButtons();
    displayBooksOnPage();
  }
});

function displayBooks() {
  const emptyMessage = document.querySelector('.empty-message');

  const savedBooks = getFromLocal(API_KEY) || [];

  if (savedBooks.length === 0) {
    emptyMessage.style.display = 'block';
    shoppingList.style.display = 'none';
  } else {
    emptyMessage.style.display = 'none';
    shoppingList.style.display = 'block';

    const markup = createMarkupShopList(savedBooks);
    shoppingList.innerHTML = markup;
  }
}




// function removeFromLocal(key) {
//   try {
//     localStorage.removeItem(key);
//   } catch (error) {
//     Notiflix.Notify.failure('Something went wrong. Please try again');
//   }
// }



document.addEventListener('DOMContentLoaded', () => {
  const deleteButtons = document.querySelectorAll('.button.shop-list-btn');

  
  deleteButtons.forEach(button => {
    button.addEventListener('click', event => {
      const listItem = button.closest('.shop-list-item');

      if (listItem) {
        const dataId = listItem.getAttribute('data-id');

      
        if (dataId) {
          //удаления элемента из localStorage 
          removeFromLocal(book._id); 

          // удалить соответствующий элемент из DOM
          listItem.remove();
        }
      }
    });
  });
});





displayBooks();
