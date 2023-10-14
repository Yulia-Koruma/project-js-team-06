import "./category"
import { fetchTopBooks } from "./api"

const bookGallery = document.querySelector('.bookgallery');
const homeBooksByType = document.querySelector('.home-typeBook')

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
                         <div class="books-overlay">
                           <p class="books-overlay-text">quick view</p>
                         </div>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${book.title}</h3>
                         <p class="books-card-author">${book.author}</p>
                     </div>
                  </a>
             </li>`}).join('')}
          </ul>
          <button class="books-btn" type="button" data-id="${elements.list_name}">see more</button>
        </li>
   `}).join('')}
</ul>`}


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


