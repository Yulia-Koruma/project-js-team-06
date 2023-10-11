import Notiflix from 'notiflix';
import axios from 'axios';

const axios = require('axios').default;


// вибір списку книг
export async function fetchCategoryList() {
    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/category-list');

        return data;

    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again!');
    } finally {
    }
}

// вибір топ-книг, що відображаються на стартовій сторінці
export async function fetchTopBooks() {
    try {
        const { data } = await axios.get('https://books-backend.p.goit.global/books/top-books');

        let books = await data.map(category => category.books);
        return books;

    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again!');
    }
}

// Вибір категорії
export async function fetchSomeCategory(selectedCategory) {
    try {
        let { data } = await axios.get('https://books-backend.p.goit.global/books/category', {
            params: {
                category: selectedCategory,
            }
        })
        return data;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again!');
    }
}

// вибір книги
export async function fetchSelectedBook(bookId) {
    try {
        let books = await axios.get(`https://books-backend.p.goit.global/books/${bookId}`)
        let book = await books.data;
        return book;
    } catch (error) {
        Notiflix.Notify.failure('Something went wrong. Please try again!');
    }
}
