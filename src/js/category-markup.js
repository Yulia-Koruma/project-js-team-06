export function createCategoryList(categories, books) {
  const categoryList = document.querySelector('.category-list');
  const firstCategory = categoryList.firstChild;

  const allCategoriesLink = document.createElement('a');
  allCategoriesLink.classList.add('category-item');
  allCategoriesLink.setAttribute('href', './index.html');
  allCategoriesLink.innerText = 'All categories';
  allCategoriesLink.classList.add('category-active');

  categoryList.insertBefore(allCategoriesLink, firstCategory);

  categories.forEach(category => {
    const categoryButton = document.createElement('button');
    categoryButton.classList.add('category-item');
    categoryButton.setAttribute('data-category', category.list_name);
    categoryButton.innerText = category.list_name;

    categoryButton.addEventListener('click', () => {
      const categoryItems = document.querySelectorAll('.category-item');
      categoryItems.forEach(item => item.classList.remove('category-active'));

      categoryButton.classList.add('category-active');
      
      const booksContainer = document.querySelector('.books-container-title');
      const lastWord = categoryButton.innerText.split(' ').pop();
      const titleWithLastWordHighlighted = categoryButton.innerText.replace(
        new RegExp(`${lastWord}$`),
        `<span class="highlighted-word">${lastWord}</span>`
      );
      booksContainer.innerHTML = `<h2 class="books-list-title">${titleWithLastWordHighlighted}</h2>`;

      const filteredBooks = books.filter( book => book.category === category.list_name);
      createBookList(filteredBooks);
    });

    categoryList.appendChild(categoryButton);
  });
}

export function createBookList(books) {
  const bookList = document.querySelector('.book-list');
 
  bookList.innerHTML = books.length
    ? books
        .map(
          book => `

            <div class="book-list-card js-book-card" data-id="${book._id}">

              <img class="book-list-card-img" src="${book.book_image}" alt="${book.title}">
              <ul class="book-list-card-content">
                <li class="card-content-title">${book.title}</li>
                <li class="card-content-author">${book.author}</li>
              </ul>
            </div>
          `
        )
        .join('')
    : '<div>No books found for this category.</div>';
   
}


