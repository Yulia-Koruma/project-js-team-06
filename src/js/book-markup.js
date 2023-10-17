

export function createMarkupBook(books) {
    return books.map(({ _id, book_image, title, author}) => {`
    <li class="js-book-card" data-id="${_id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${_id}'>
                     <div class="books-card">
                         <img src="${book_image}" alt="${title}" class="books-card-img"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${cutBookTitle(title)}</h3>
                         <p class="books-card-author">${cutBookAuthor(author)}</p>
                     </div>
                  </a>
             </li>`}).join('')
};

