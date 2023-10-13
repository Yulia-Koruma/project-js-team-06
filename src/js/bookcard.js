import "./category"
import { fetchTopBooks } from "./api"


const bookGallery = document.querySelector('.bookgallery');

// function getTopBooks(query) {
//    fetchTopBooks(query).then(data => {
//       console.log(data)
//       // const card = data.books[0]   Не розумію як звязати сервер зі своєю карткою
//       // createBookCard(card)
//    })
// }


// getTopBooks('book')

let book = null;
async function getBook(id) {
    try {
        book = await fetchTopBooks(id);
        createBookCard(book);
    } catch (error) {
       
    }
}


function createBookCard(card) {
  const galleryCard = card.map(({_id, book_image, title, author}) => {
     return `
 <li class="js-book-card" data-id="${_id}">
     <img src="${book_image}" alt="${title}"/>
    <h2>${title}</h2>
    <p>${author}</p>
 </li>`}).join('');
    bookGallery.insertAdjacentHTML('beforeend', galleryCard);
}
export {createBookCard}  ;