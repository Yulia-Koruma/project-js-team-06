import {fetchSelectedBook} from "./api"
import { createMarkupModalAddShopList, createMarkupModalRemoveShopList } from "./createMarkupModal";
import { saveInLocal, getFromLocal, removeFromLocal } from "./localStorage";
import "./category";
import "./bookcard";
import { API_KEY } from "./localStorage";



export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookGallery: document.querySelector('.js-book'),

    // categoryList: document.querySelector('.category-list'),

};

console.log(refs.containerModalShopList);

refs.bookGallery.addEventListener('click', onBookCardClick);
// refs.categoryList.addEventListener('click', onBookCardClick);


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

    const savedBooks = getFromLocal(API_KEY) || [];

    function removeBookFromLocalStorage(book) {
        const updatedBooks = savedBooks.filter(savedBook => savedBook.title !== book.title);

        localStorage.setItem(API_KEY, JSON.stringify(updatedBooks));
    }

    const isBookInLocalStorage = savedBooks.some(({ _id }) => _id === id) || false;

    if (!isBookInLocalStorage) {
        renderMarkupAdd();
        const btnAddShopList = document.querySelector('.js-btn-add');

        btnAddShopList.addEventListener('click', () => {
        renderMarkupRemove();

        const savedBooks = getFromLocal(API_KEY) || [];
        savedBooks.push(book);

        saveInLocal(API_KEY, savedBooks);

        const btnCloseModalShopList = document.querySelector('.modal-shop-list-close');
        btnCloseModalShopList.addEventListener('click', toggleModal);

        const btnRemoveShopList = document.querySelector('.js-btn-remove');
        btnRemoveShopList.addEventListener('click', () => removeBookFromLocalStorage(book));
        });
        
    } else {
        renderMarkupRemove();
        const btnRemoveShopList = document.querySelector('.js-btn-remove');
        btnRemoveShopList.addEventListener('click', () => {
            removeBookFromLocalStorage(book);
            renderMarkupAdd();
        });
    }

    function renderMarkupAdd() {
        refs.containerModalShopList.innerHTML = createMarkupModalAddShopList(book);
    };

    function renderMarkupRemove() {
        refs.containerModalShopList.innerHTML = createMarkupModalRemoveShopList(book);
    }


    window.addEventListener('click', onBackdropClick);
    
    function onBackdropClick(event) {
        if (event.target === refs.containerModalShopList) {
            toggleModal();
        }
    }

    const btnCloseModalShopList = document.querySelector('.modal-shop-list-close');
    btnCloseModalShopList.addEventListener('click', onClose);
    
    function toggleModal() {
        refs.containerModalShopList.classList.toggle('is-hidden');

        refs.containerModalShopList.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    function onClose() {
        toggleModal();

        window.removeEventListener('keydown', onEscKeyPress);
        window.removeEventListener('click', onBackdropClick);
    }
    
    window.addEventListener('keydown', onEscKeyPress);

    function onEscKeyPress(event) {
        if (event.code === 'Escape') {
        toggleModal();
        }
    }

}

