import "./category"
import {fetchTopBooks} from "./api"
const BookGallery = document.querySelector('.bookgallery');
function getTopBooks(query) {
   fetchTopBooks(query).then(data => {
      console.log(data)
      // const card = data.books[0]   Не розумію як звязати сервер зі своєю карткою
      // createBookCard(card)
   })
}
getTopBooks('book')
function createBookCard(card) {
  const galleryCard = card.map(({_id, book_image, title, author}) => {
 return`
<li class="js-book-card" data-id="${_id}">
 <a href="${original}">
    <img src="${book_image}" alt="${title}"/>
    <h2>${title}</h2>
    <p>${author}</p>
 </a>
</li>
`}).join('');
    BookGallery.insertAdjacentHTML('beforeend', galleryCard);
}
export {createBookCard}