import {fetchSelectedBook} from "./api"
import { createMarkupModalAddShopList } from "./createMarkupModalShopList";
import { saveInLocal, removeFromLocal } from "./localStorage";
import "./category";
import "./bookcard";


export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookGallery: document.querySelector('.bookgallery'),
    // btnAddShopList: document.querySelector('.js-btn-add'),
    btnRemoveShopList: document.querySelector('.js-btn-remove'),
    
};

console.log(refs.bookGallery);

export const API_KEY = 'shoppingList';
const localStorageBooks = [];


refs.bookGallery.addEventListener('click', onBookCardClick);

async function onBookCardClick(event) {
    event.preventDefault();

    if (event.target.classList.contains('js-book-card')) {
    return;
    } 

    toggleModal();

    refs.containerModalShopList.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const liBook = event.target.closest('.js-book-card');
    const id = liBook.dataset.id;
    
    const book = await fetchSelectedBook(id);

    const markup = createMarkupModalAddShopList(book);

    refs.containerModalShopList.innerHTML = markup;

    const btnCloseModalShopList = document.querySelector('.modal-shop-list-close')

    btnCloseModalShopList.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.containerModalShopList.classList.toggle('is-hidden');
        window.removeEventListener('keydown', onEscKeyPress);
    }
    
    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
        toggleModal();
        }
    }

    const btnAddShopList = document.querySelector('.js-btn-add');


    btnAddShopList.addEventListener('click', () => {
        localStorageBooks.push(book);
        saveInLocal(API_KEY, localStorageBooks);
    });

    // refs.btnRemoveShopList.addEventListener('click', () => {
       
    // });

}

