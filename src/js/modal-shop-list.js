import {fetchSelectedBook} from "./api"
import { createMarkupModalAddShopList, createMarkupModalRemoveShopList } from "./createMarkupModal";
import { saveInLocal, getFromLocal, removeFromLocal, API_KEY } from "./localStorage";
import "./category";
import "./bookcard";

export const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookGallery: document.querySelector('.js-book'),
    bookList: document.querySelector('.js-book-list'),

};

refs.bookGallery.addEventListener('click', onBookCardClick);
refs.bookList.addEventListener('click', onBookCardClick);

async function onBookCardClick(event) {
    event.preventDefault();

    const targetCard = event.target.closest('.js-book-card');

    refs.containerModalShopList.innerHTML = '';
   
    if (!targetCard) {
    return;
    }

    toggleModal();

    refs.containerModalShopList.style.display = 'block';
    document.body.style.overflow = 'hidden';

    const id = targetCard.dataset.id;
    const book = await fetchSelectedBook(id);

    const savedBooksLocalStorage = getFromLocal(API_KEY) || [];

    function removeBookFromLocalStorage(book) {
        const updatedBooks = savedBooksLocalStorage.filter(savedBook => savedBook.title !== book.title);

        localStorage.setItem(API_KEY, JSON.stringify(updatedBooks));
    }

    const isBookInLocalStorage = savedBooksLocalStorage.some(({ _id }) => _id === id) || false;

    if (!isBookInLocalStorage) {
        renderMarkupAdd();
        const btnAddShopList = document.querySelector('.js-btn-add');
        const textUnderBtn = document.querySelector('.modal-shop-list-text');

        function toggleBtnModal() {
            btnAddShopList.textContent = 'remove from the shopping list';
            btnAddShopList.classList.remove('js-btn-add');
            btnAddShopList.classList.add('js-btn-remove');
            textUnderBtn.classList.remove('visually-hidden');
            };


        btnAddShopList.addEventListener('click', () => {
            toggleBtnModal();

            const savedBooks = getFromLocal(API_KEY) || [];
            savedBooks.push(book);

            saveInLocal(API_KEY, savedBooks);

            const btnCloseModalShopList = document.querySelector('.modal-shop-list-close');
            btnCloseModalShopList.addEventListener('click', toggleModal);

            const btnRemoveShopList = document.querySelector('.js-btn-remove');
            btnRemoveShopList.addEventListener('click', () => removeBookFromLocalStorage(book));
            });
        
    } else {
        refs.containerModalShopList.innerHTML = '';
        renderMarkupRemove();
        const btnRemoveShopList = document.querySelector('.js-btn-remove');
        btnRemoveShopList.addEventListener('click', () => {
            removeBookFromLocalStorage(book);
            // renderMarkupAdd();
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

