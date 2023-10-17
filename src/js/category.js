import { fetchCategoryList, fetchBooksByCategory } from './api.js';
import { createCategoryList, createBookList } from './category-markup.js';
import Notiflix from 'notiflix';
import { refs } from './modal-shop-list.js';

const categoryListElement = document.querySelector('.category-list');

export async function loadBooksByCategory(category) {
  try {
    const books = await fetchBooksByCategory(category);
    createBookList(books);
    refs.bookGallery.innerHTML = '';
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again!');
  } finally {
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
    // Notiflix.Notify.failure('Something went wrong. Please try again!');
  } finally {
  }
}

initializeApp();
