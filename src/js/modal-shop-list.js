import {fetchSelectedBook} from "./api"
import { createMarkupModalShopList } from "./createMarkupModalShopList";

const refs = {
    containerModalShopList: document.querySelector('#container-modal-shop-list'),
    bookCard: document.querySelector('.js-book-card'),
};

refs.bookCard.addEventListener('click', handleBookCardClick);

async function handleBookCardClick(event) {
    const li = event.target.closest('.bookCard');
    const id = li.dataset.id;
    
    const book = await fetchSelectedBook(id);
    const markup = createMarkupModalShopList(book);

    refs.containerModalShopList.innerHTML = markup;
}


async function renderMarkup() {
    const id = "642fd89ac8cf5ee957f122a0";
    console.log(typeof(id));
    console.log(id);
    try {
    const book = await fetchSelectedBook(id);
    console.log(book);
    const markup = createMarkupModalShopList(book);

    refs.containerModalShopList.innerHTML = markup;
    } catch (error) {
        console.error('Error loading book', error);
    }
    
    
}

renderMarkup();


// const bookId = "642fd89ac8cf5ee957f12362";

// const book = fetchSelectedBook(bookId).then(response => {
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     return response.json();
// });