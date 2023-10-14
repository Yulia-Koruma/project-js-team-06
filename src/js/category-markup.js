export function createCategoryList(categories) {
  const categoryList = document.querySelector('.category-list');
  categoryList.innerHTML = categories
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
            <img src="${book.book_image}" alt="${book.title}">
            <div class="book-item">${book.title}</div>
            <div class="book-item">${book.author}</div>
          `
        )
        .join('')
    : '<div>No books found for this category.</div>';
}
