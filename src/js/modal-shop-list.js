import {fetchSelectedBook} from "./api"
import { createMarkupModalAddShopList, createMarkupModalRemoveShopList } from "./createMarkupModal";
import { saveInLocal, removeFromLocal } from "./localStorage";
import "./category";
import "./bookcard";
import { API_KEY } from "./localStorage";


export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookGallery: document.querySelector('.bookgallery'),
    
    // btnRemoveShopList: document.querySelector('.js-btn-remove'),
    
};

const localStorageBooks = [];


refs.bookGallery.addEventListener('click', onBookCardClick);

async function onBookCardClick(event) {
    event.preventDefault();

    const targetCard = event.target.closest('.js-book-card');

    if (!targetCard) {
    return;
    }

    toggleModal();

    refs.containerModalShopList.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const id = targetCard.dataset.id;
    const book = await fetchSelectedBook(id);
    const markup = createMarkupModalAddShopList(book);

    refs.containerModalShopList.innerHTML = markup;

    window.addEventListener('click', onBackdropClick);
    
    function onBackdropClick(event) {
        if (event.target === refs.containerModalShopList) {
            toggleModal();
        }
    }

    const btnCloseModalShopList = document.querySelector('.modal-shop-list-close')
    btnCloseModalShopList.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.containerModalShopList.classList.toggle('is-hidden');

        window.removeEventListener('keydown', onEscKeyPress);
        window.removeEventListener('click', onBackdropClick);

        refs.containerModalShopList.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    
    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
        toggleModal();
        }
    }

    const btnAddShopList = document.querySelector('.js-btn-add');

    btnAddShopList.addEventListener('click', () => {
        refs.containerModalShopList.innerHTML = createMarkupModalRemoveShopList(book);

        localStorageBooks.push(book);
        saveInLocal(API_KEY, localStorageBooks);

        const btnCloseModalShopList = document.querySelector('.modal-shop-list-close')
        btnCloseModalShopList.addEventListener('click', toggleModal);
    });

    // refs.btnRemoveShopList.addEventListener('click', () => {
       
    // });

}

