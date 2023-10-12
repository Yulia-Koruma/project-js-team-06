import {fetchSelectedBook} from "./api"
import { createMarkupModalShopList } from "./createMarkupModalShopList";

const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookCard: document.querySelector('.bookCard'),
};

refs.bookCard.addEventListener('click', handleBookCardClick);

async function handleBookCardClick(event) {
    const li = event.target.closest('.bookCard');
    const id = li.dataset.id;
    
    const book = await fetchSelectedBook(id);
    const markup = createMarkupModalShopList(book);

    refs.containerModalShopList.innerHTML = markup;
}