import "./category"
import {fetchTopBooks} from "./api"

const BookGallery = document.querySelector('.bookgallery');

function getTopBooks(query) {
   fetchTopBooks(query).then(data => {
      console.log(data)
       // const card = data.books[0]
      // createBookCard(card)
   })

}

getTopBooks('book')

function createBookCard(card) {
  const galleryCard = card.map(({_id, book_image, title, author}) => {
 return`
<li class="js-book-card" data-id="${_id}">
     <img src="${book_image}" alt="${title}"/>
    <h2>${title}</h2>
    <p>${author}</p>
 </li>
`}).join('');
    BookGallery.insertAdjacentHTML('beforeend', galleryCard);
}
  
export {createBookCard}  ;