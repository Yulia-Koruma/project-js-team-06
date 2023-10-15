export function createMarkupModalAddShopList({ _id, book_image, title, author, description, buy_links }) {
  
  const links = buy_links.filter(item => {
    if (item.name === "Amazon" || item.name === "Apple Books") {
      return item.url;
    }
  });

  return `<div class="modal-shop-list" id="modal-add" data-id=${_id}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
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
                href="${links[0]}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="./img/amazon-2x.png 2x" src="./img/amazon-1x.png" alt="Amazon" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link"
            href="${links[1]}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="./img/apple-books-2x.png 2x" src="./img/apple-books-1x.png" alt="Apple Books" width="33" height="32" />
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="button btn-shop-list js-btn-add">add to shopping list</button>
  </div>
</div>`
}

