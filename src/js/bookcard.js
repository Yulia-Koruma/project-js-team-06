import "./category"
import { fetchTopBooks } from "./api"
import throttle from 'lodash.throttle';

const bookGallery = document.querySelector('.bookgallery');
let isActive;
let currentRenderWidth = 375;
let reloadState = true;

window.addEventListener('resize', throttle(onResizewindow, 200));

function onResizewindow() {
  isActive = bookGallery.classList.contains('container_active');
  if (!isActive) return;
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
}

currentRenderWidth = window.innerWidth;
let amountRenderedBooks = 1;
if (currentRenderWidth < 768) {
  amountRenderedBooks = 1;
} else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
  amountRenderedBooks = 3;
} else {
  amountRenderedBooks = 5;
}


const createTopBooksMarkup = async () => {
   let markup = await fetchTopBooks();
  markup = markup.map(el => {
    return { ...el, books: el.books };
  });
 bookGallery.innerHTML = await booksCardTemplate(markup);
};

createTopBooksMarkup();

function booksCardTemplate(data) {
    return `
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${data.map(elements => {
    return `
        <li class="books-list">
          <h3 class="books-list-title">${elements.list_name}
          </h3>
          <ul class="books-card-container">${elements.books.map(book => {
              return `
               <li class="js-book-card" data-id="${book._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${book._id}'>
                     <div class="books-card">
                         <img src="${book.book_image}" alt="${book.title}" class="books-card-img" width="180" height="256"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${cutBookTitle(book.title)}</h3>
                         <p class="books-card-author">${cutBookAuthor(book.author)}</p>
                     </div>
                  </a>
             </li>`}).join('')}
          </ul>
          <button class="books-btn" type="button" data-id="${elements.list_name}">see more</button>
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

// const homeBooksByType = document.querySelector('.home-typeBook')
// const homeBtnEl = document.querySelectorAll('.books-btn');

// const showTypeBook = async type => {
//   const typeBooksMore = await  fetchBooksByCategory(type);
//   homeBooksByType.innerHTML = booksCardTemplateByType(typeBooksMore, type);};

// homeBtnEl.forEach(btn => {
//   btn.addEventListener('click', event => {
//     showTypeBook(event.target.dataset.id);
//     });
//   });

// function booksCardTemplateByType(data, typeBooks) {
//     if (data.length > 0) {
//       return `
//     <h3 class="books-main-title">${typeBooks.substring(0, typeBooks.lastIndexOf(' '))}
//       <span class="books-main-title-attribute"> ${typeBooks.split(' ').pop()}</span>
//     </h3>
//         <ul class="books-card-container">${data.map(book => 
//           `<li class="books-item category-item">
//             <a href="#" class="books-card-link" rel="noopener noreferrer" data-id='${book._id}'>
//               <div class="books-card">
//                 <img class="books-card-img" src="${book.book_image}" alt="${book.title}" width="180" height="256"/>
//                 <div class="books-overlay">
//                   <p class="books-overlay-text">quick view</p>
//                 </div> 
//               </div>
//               <div class="books-descr">
//                 <h3 class="books-card-title">${book.title}</h3>
//                 <p class="books-card-author">${book.author}</p>
//               </div>
//             </a>
//           </li>`).join('')}
//         </ul>`;
//   } else {
//     Notiflix.Notify.failure(`Not found`);
//   }
// }
