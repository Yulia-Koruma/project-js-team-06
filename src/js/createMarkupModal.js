import amazon from '../img/amazonnn.png';
import amazon2x from '../img/amazonnn-2x.png';
import apple from '../img/apple-books-1x.png';
import apple2x from '../img/apple-books-2x.png';

export function createMarkupModalAddShopList({ _id, book_image, title, author, description, buy_links }) {
  
  return `<div class="modal-shop-list" id="modal-add" data-id=${_id}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${book_image}" alt="${author}${title}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${title}</h1>
        <h2 class="modal-shop-list-author">${author}</h2>
        <p class="modal-shop-list-desc">${description}</p>
        <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link"
                href="${buy_links[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${amazon2x} 2x" src="${amazon}" alt="${buy_links[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link"
            href="${buy_links[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${apple2x} 2x" src="${apple}" alt="${buy_links[1].name}" width="33" height="32" />
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="button btn-shop-list js-btn-add">add to shopping list</button>
  </div>
</div>`;
}



export function createMarkupModalRemoveShopList({ _id, book_image, title, author, description, buy_links }) {

  return `<div class="modal-shop-list" id="modal-remove" data-id=${_id}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${book_image}" alt="${author}${title}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${title}</h1>
        <h2 class="modal-shop-list-author">${author}</h2>
        <p class="modal-shop-list-desc">${description}</p>
          <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link modal-shop-list-link-amazon"
                href="${buy_links[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${amazon2x} 2x" src="${amazon}" alt="${buy_links[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link modal-shop-list-link-apple"
            href="${buy_links[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${apple2x} 2x" src="${apple}" alt="${buy_links[1].name}" width="33" height="32" />
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="button btn-shop-list js-btn-remove">remove from the shopping list</button>
    <p class="modal-shop-list-text">
      Сongratulations! You have added the book to the shopping list. To delete,
      press the button “Remove from the shopping list”.
    </p>
  </div>
</div>`;
}


