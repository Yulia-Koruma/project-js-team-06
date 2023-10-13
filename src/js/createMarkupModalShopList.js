export function createMarkupModalShopList({_id, book_image, title, author, description, buy_links}) {
    return `<div class="backdrop is-hidden">
  <div class="modal-shop-list" data-id=${_id}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${book_image}" alt="${author} ${title}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${title}</h1>
        <h2 class="modal-shop-list-author">${author}</h2>
        <p class="modal-shop-list-desc">${description}</p>
        <div class="modal-shop-list-buy">
          <a
            class="link modal-shop-list-link"
            href="${buy_links[0].url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Amazon" width="62" height="19" />
          </a>
          <a
            class="link modal-shop-list-link"
            href="${buy_links[1].url}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="" alt="Apple Books" width="33" height="32" />
            <button type="button" class="button">add to shopping list</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
`
}


