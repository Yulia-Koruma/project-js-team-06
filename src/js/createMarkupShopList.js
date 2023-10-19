import amazon from '../img/amazonnn.png';
import amazon2x from '../img/amazonnn-2x.png';
import apple from '../img/apple-books-1x.png';
import apple2x from '../img/apple-books-2x.png';

export function createMarkupShopList(arr) {
    return arr.map(({ _id, book_image, title, author, list_name, description, buy_links }) => `
    <li class="shop-list-item" data-id="${_id}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${book_image}" alt="${author} ${title}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${cutBookTitle(title)}</h2>
    <h4 class="shop-list-category">${cutBookCategory(list_name)}</h4>
    <p class="shop-list-desc">${cutBookDesc(description)}</p>
    <div class="shop-list-wrap">
      <h3 class="shop-list-author">${author}</h3>
      <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${buy_links[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${amazon2x} 2x"
              src="${amazon}"
              alt="${buy_links[0].name}"
              width="32"
              height="11" />
          </a>
        </li>
        <li>
          <a
            class="link shop-list-link"
            href="${buy_links[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-apple-books"
              srcset="${apple2x} 2x"
              src="${apple}"
              alt="${buy_links[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join('');
}

function cutBookTitle(title) {
  if (window.innerWidth <= 767 && title.length >= 16) {
    return `${title.slice(0, 16)}...`;
  }
  if (window.innerWidth > 767 && title.length >= 16) {
    return title;
  }
 
  return title;
}

function cutBookCategory(category) {
  if (window.innerWidth <= 767 && category.length >= 20) {
    return `${category.slice(0, 20)}...`;
  }
  if (window.innerWidth > 767 && category.length >= 20) {
    return category;
  }
 
  return category;
}




function cutBookDesc(description) {
  if (window.innerWidth <= 767 && description.length >= 80) {
    return `${description.slice(0, 80)}...`;
  }
  
  if (window.innerWidth > 767 && description.length >= 80) {
    return description;
    
  }

  return description;
}