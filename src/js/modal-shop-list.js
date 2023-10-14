import {fetchSelectedBook} from "./api"
import { createMarkupModalShopList } from "./createMarkupModalShopList";


export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookCard: document.querySelector('.js-book-card'),
    btnAddShopList: document.querySelector('.js-btn-add'),
    btnRemoveShopList: document.querySelector('.js-btn-remove'),


};

refs.bookCard.addEventListener('click', handleBookCardClick);

async function handleBookCardClick(event) {
    refs.containerModalShopList.classList.remove('is-hidden');
    refs.containerModalShopList.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const liBook = event.target.closest('.js-book-card');
    const id = liBook.dataset.id;
    
    const book = await fetchSelectedBook(id);
    const markup = createMarkupModalShopList(book);

    refs.containerModalShopList.innerHTML = markup;
}


// async function renderMarkup() {
//     const id = "642fd89ac8cf5ee957f122a0";
//     console.log(typeof(id));
//     console.log(id);
//     try {
//     const book = await fetchSelectedBook(id);
//     console.log(book);
//         const markup = createMarkupModalShopList(book);

//         refs.containerModalShopList.innerHTML = markup;

//     // refs.containerModalShopList.insertAdjacentHTML('beforeend', markup);
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