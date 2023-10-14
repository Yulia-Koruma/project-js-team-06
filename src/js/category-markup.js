export function createCategoryList(categories) {
  const categoryList = document.querySelector('.category-list');
  const firstCategory = categoryList.firstChild;

  const allCategoriesLink = document.createElement('a');
  allCategoriesLink.classList.add('category-item');
  allCategoriesLink.setAttribute('href', '/');
  allCategoriesLink.innerText = 'All categories';

  categoryList.insertBefore(allCategoriesLink, firstCategory);

  categoryList.innerHTML += categories
    .map(
      category =>
        `<button class="category-item" data-category="${category.list_name}">${category.list_name}</button>`
    )
    .join('');
}

export function createBookList(books) {
  const bookList = document.querySelector('.book-list');
  bookList.innerHTML = books.length
    ? books
        .map(
          book => `
            <div class="book-list-card">
              <img class="book-list-card-img" src="${book.book_image}" alt="${book.title}">
              <div class="book-list-card-content" >
                <div class="card-content-title">${book.title}</div>
                <div class="card-content-author">${book.author}</div>
              </div>
            </div>
          `
        )
        .join('')
    : '<div>No books found for this category.</div>';
}
