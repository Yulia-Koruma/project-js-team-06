export function createCategoryList(categories) {
  const categoryList = document.querySelector('.category-list');
  const firstCategory = categoryList.firstChild;

  const allCategoriesLink = document.createElement('a');
  allCategoriesLink.classList.add('category-item');
  allCategoriesLink.setAttribute('href', './index.html');
  allCategoriesLink.innerText = 'All categories';

  const isNoCategorySelected = !categories.some(
    category => category.list_name === 'selectedCategoryName'
  );
  if (isNoCategorySelected) {
    allCategoriesLink.classList.add('category-active');
  }

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
    });

    categoryList.appendChild(categoryButton);
  });
}

export function createBookList(books) {
  const bookList = document.querySelector('.book-list');
  const booksContainer = document.querySelector('.books-container-title');

  const categoryTitle =
    books.length > 0 ? books[0].list_name : 'Best Sellers Books';

  const lastWord = categoryTitle.split(' ').pop();
  const titleWithLastWordHighlighted = categoryTitle.replace(
    new RegExp(`${lastWord}$`),
    `<span class="highlighted-word">${lastWord}</span>`
  );

  booksContainer.innerHTML = `<h2 class="books-list-title">${titleWithLastWordHighlighted}</h2>`;

  bookList.innerHTML += books.length
    ? books
        .map(
          book => `
            <div class="book-list-card">
              <img class="book-list-card-img" src="${book.book_image}" alt="${book.title}">
              <div class="book-list-card-content">
                <div class="card-content-title">${book.title}</div>
                <div class="card-content-author">${book.author}</div>
              </div>
            </div>
          `
        )
        .join('')
    : '<div>No books found for this category.</div>';
}
