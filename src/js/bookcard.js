import "./category"
import { fetchTopBooks } from "./api"

import { loaderEl } from './scrollup';
import {loadBooksByCategory} from './category'

const bookGallery = document.querySelector('.bookgallery');
let isActive;
let currentRenderWidth = 375;
let reloadState = true;


window.addEventListener('resize', onResizewindow);

function onResizewindow() {
  const listBook = document.querySelectorAll('.books-card-container');
  const viewport = document.documentElement.clientWidth;
  listBook.forEach(ul => {
    const listElements = Array.from(ul.querySelectorAll('.js-book-card'));
    listElements.forEach(itemBook => {
      itemBook.style.display = 'none';
    });
    if (viewport >= 320 && viewport < 767) {
      showCards(1, ul);
    } else if (viewport >= 768 && viewport < 1439) {
      showCards(3, ul);
    } else if (viewport >= 1440) {
      showCards(listElements.length, ul);
    }
  });
}

function showCards(number, listBook) {
  const itemBook = Array.from(listBook.querySelectorAll('li'));
  for (let i = 0; i < number; i++) {
    itemBook[i].style.display = 'block';
  }
}


const createTopBooksMarkup = async () => {
  loaderEl.classList.remove("visually-hidden-js");
   let markup = await fetchTopBooks();
  markup = markup.map(el => {
    return { ...el, books: el.books };
  });
  bookGallery.innerHTML = await booksCardTemplate(markup);
  loaderEl.classList.add("visually-hidden-js");

  const seeMoreBtnBox = document.querySelector('.books-container-small');
  seeMoreBtnBox.addEventListener('click', onClickSeeMore);
  async function onClickSeeMore(event) {
     if (event.target.nodeName !== "BUTTON") {
    return;
  }
    const categoryToSee = event.target.dataset.id;
    await loadBooksByCategory(categoryToSee);
    const booksContainer = document.querySelector('.books-container-title');
    const lastWord = categoryToSee.split(' ').pop();
    const titleWithLastWordHighlighted = categoryToSee.replace(
        new RegExp(`${lastWord}$`),
        `<span class="highlighted-word">${lastWord}</span>`
      );
    booksContainer.innerHTML = `<h2 class="books-list-title">${titleWithLastWordHighlighted}</h2>`;
  };
  
};

createTopBooksMarkup();



function booksCardTemplate(data) {
    return `
     <h1 class="books-main-title animate__animated animate__zoomIn  animate__slower">
     Best Sellers <span class="books-main-title-attribute animate__animated animate__zoomIn animate__slower">Books</span>
     </h1>
<ul class="books-container-small">${data.map(elements => {
    return `
        <li class="books-list">
          <h2 class="books-list-title-smal">${elements.list_name}
          </h2>
          <ul class="books-card-container">${elements.books.map(book => {
              return `
               <li class="js-book-card" data-id="${book._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
                     <div class="books-card">
                         <img src="${book.book_image}" alt="${book.title}" class="books-card-img"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${cutBookTitle(book.title)}</h3>
                         <p class="books-card-author">${cutBookAuthor(book.author)}</p>
                     </div>
                  </a>
             </li>`}).join('')}
          </ul>
          <button class="books-btn nimate__animated animate__heartBeat animate__slower animate__infinite" type="button" data-id="${elements.list_name}">see more</button>
        </li>
   `}).join('')}
</ul>`}


function cutBookTitle(title) {
  if (window.innerWidth <= 767 && title.length >= 27)
    return title
      .substring(0, 27)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  if (window.innerWidth > 767 && title.length >= 19)
    return title
      .substring(0, 19)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  return title;
}

function cutBookAuthor(author) {
  if (window.innerWidth <= 767 && author.length >= 37)
    return author
      .substring(0, 37)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  if (window.innerWidth > 767 && author.length >= 29)
    return author
      .substring(0, 29)
      .toUpperCase()
      .replace(/\s[A-Z]*$/g, '...');

  return author;
}