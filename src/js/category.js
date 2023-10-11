import { fetchCategoryList, fetchBooksByCategory } from './api.js';
import { createCategoryList, createBookList } from './category-markup.js';

const categoryListElement = document.querySelector('.category-list');

async function loadBooksByCategory(category) {
  try {
    const books = await fetchBooksByCategory(category);
    createBookList(books);
  } catch (error) {
    console.error('Error loading books:', error);
  }
}

async function initializeApp() {
  try {
    const categories = await fetchCategoryList();
    createCategoryList(categories);

    categoryListElement.addEventListener('click', async event => {
      if (event.target.classList.contains('category-item')) {
        const selectedCategory = event.target.dataset.category;
        await loadBooksByCategory(selectedCategory);
      }
    });
  } catch (error) {
    console.error('Error initializing app:', error);
  }
}

initializeApp();
