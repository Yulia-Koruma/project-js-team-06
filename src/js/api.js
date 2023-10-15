import Notiflix from 'notiflix';
import axios from 'axios';

// const axios = require('axios').default;

const BASE_URL = 'https://books-backend.p.goit.global/books/';

// вибір списку книг
export async function fetchCategoryList() {
  try {
    const { data } = await axios.get(`${BASE_URL}category-list`);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again!');
  } finally {
  }
}

// вибір топ-книг, що відображаються на стартовій сторінці
export async function fetchTopBooks() {
  try {
    const { data } = await axios.get(`${BASE_URL}top-books`);
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again!');
  }
}

// Вибір
export async function fetchBooksByCategory(category) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}category?category=${category}`
    );
    return data;
  } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again!');
  }
}

// вибір книги
export async function fetchSelectedBook(bookId) {
  try {
      const { data } = await axios.get(`${BASE_URL}${bookId}`);
    return data;
    } catch (error) {
    Notiflix.Notify.failure('Something went wrong. Please try again!');
  }
}
