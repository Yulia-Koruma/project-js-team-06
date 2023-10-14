import {fetchSelectedBook} from "./api"
import { createMarkupModalShopList } from "./createMarkupModalShopList";
import { saveInLocal, getFromLocal, removeFromLocal } from "./localStorage";
import "./category";
import "./bookcard";


export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookCard: document.querySelector('.js-book-card'),
    btnAddShopList: document.querySelector('.js-btn-add'),
    btnRemoveShopList: document.querySelector('.js-btn-remove'),
};

console.log(refs.bookCard);

export const API_KEY = 'shoppingList';
const localStorageBooks = [];


refs.bookCard.addEventListener('click', handleBookCardClick);

async function handleBookCardClick(event) {
    refs.containerModalShopList.classList.remove('is-hidden');
    refs.containerModalShopList.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const liBook = event.target.closest('.js-book-card');
    console.log(liBook);
    const id = liBook.dataset.id;
    console.log(id);
    
    const book = await fetchSelectedBook(id);
    const markup = createMarkupModalShopList(book);

    refs.containerModalShopList.innerHTML = markup;

    refs.btnAddShopList.addEventListener('click', () => {
        localStorageBooks.push(book);
        saveInLocal(API_KEY, localStorageBooks);
    });

    // refs.btnRemoveShopList.addEventListener('click', () => {
       
    // });

}



// async function renderMarkup() {
//     const id = "642fd89ac8cf5ee957f12363";
//     console.log(typeof(id));
//     console.log(id);
//     try {
//     const book = await fetchSelectedBook(id);
//     console.log(book);
//         const markup = createMarkupModalShopList(book);
        
//         refs.containerModalShopList.innerHTML = markup;

  
//     } catch (error) {
//         console.error('Error loading book', error);
//     }
    
    
// }

// renderMarkup();


// const bookId = "642fd89ac8cf5ee957f12362";

// const book = fetchSelectedBook(bookId).then(response => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response.json();
// });