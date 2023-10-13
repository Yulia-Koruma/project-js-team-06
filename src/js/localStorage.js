import { refs } from './modal-shop-list';
export const API_KEY = 'shoppingList';

const localStorageBooks = [];

refs.btnAddShopList.addEventListener('click', (event) => {
    const targetBook = event.target.closest('.modal-shop-list');

    localStorage.setItem(API_KEY, )
}
    
)

export function addBookLocalStorage ()