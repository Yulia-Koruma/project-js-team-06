import{c as k,f as H,a as q}from"./support_object-0267ce1e.js";var Q="Expected a function",N=0/0,G="[object Symbol]",Z=/^\s+|\s+$/g,K=/^[-+]0x[0-9a-f]+$/i,J=/^0b[01]+$/i,X=/^0o[0-7]+$/i,z=parseInt,$=typeof k=="object"&&k&&k.Object===Object&&k,_=typeof self=="object"&&self&&self.Object===Object&&self,tt=$||_||Function("return this")(),et=Object.prototype,ot=et.toString,nt=Math.max,it=Math.min,T=function(){return tt.Date.now()};function st(t,e,o){var n,s,r,l,a,d,c=0,S=!1,h=!1,p=!0;if(typeof t!="function")throw new TypeError(Q);e=U(e)||0,w(o)&&(S=!!o.leading,h="maxWait"in o,r=h?nt(U(o.maxWait)||0,e):r,p="trailing"in o?!!o.trailing:p);function m(i){var A=n,f=s;return n=s=void 0,c=i,l=t.apply(f,A),l}function I(i){return c=i,a=setTimeout(v,e),S?m(i):l}function L(i){var A=i-d,f=i-c,D=e-A;return h?it(D,r-f):D}function b(i){var A=i-d,f=i-c;return d===void 0||A>=e||A<0||h&&f>=r}function v(){var i=T();if(b(i))return E(i);a=setTimeout(v,L(i))}function E(i){return a=void 0,p&&n?m(i):(n=s=void 0,l)}function M(){a!==void 0&&clearTimeout(a),c=0,n=d=s=a=void 0}function O(){return a===void 0?l:E(T())}function B(){var i=T(),A=b(i);if(n=arguments,s=this,d=i,A){if(a===void 0)return I(d);if(h)return a=setTimeout(v,e),m(d)}return a===void 0&&(a=setTimeout(v,e)),l}return B.cancel=M,B.flush=O,B}function rt(t,e,o){var n=!0,s=!0;if(typeof t!="function")throw new TypeError(Q);return w(o)&&(n="leading"in o?!!o.leading:n,s="trailing"in o?!!o.trailing:s),st(t,e,{leading:n,maxWait:e,trailing:s})}function w(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function at(t){return!!t&&typeof t=="object"}function lt(t){return typeof t=="symbol"||at(t)&&ot.call(t)==G}function U(t){if(typeof t=="number")return t;if(lt(t))return N;if(w(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=w(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Z,"");var o=J.test(t);return o||X.test(t)?z(t.slice(2),o?2:8):K.test(t)?N:+t}var ct=rt;const V=document.querySelector(".bookgallery");let R,g=375;window.addEventListener("resize",ct(dt,200));function dt(){R=V.classList.contains("container_active"),R&&(window.innerWidth>767&&g<768||window.innerWidth>1439&&g<1440||window.innerWidth<1440&&g>1439||window.innerWidth<768&&g>767)&&location.reload()}g=window.innerWidth;const At=async()=>{let t=await H();t=t.map(e=>({...e,books:e.books})),V.innerHTML=await ut(t)};At();function ut(t){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${t.map(e=>`
        <li class="books-list">
          <h3 class="books-list-title-smal">${e.list_name}
          </h3>
          <ul class="books-card-container">${e.books.map(o=>`
               <li class="js-book-card" data-id="${o._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${o._id}'>
                     <div class="books-card">
                         <img src="${o.book_image}" alt="${o.title}" class="books-card-img"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${ht(o.title)}</h3>
                         <p class="books-card-author">${mt(o.author)}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${e.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}function ht(t){return window.innerWidth<=767&&t.length>=27?t.substring(0,27).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=19?t.substring(0,19).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}function mt(t){return window.innerWidth<=767&&t.length>=37?t.substring(0,37).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=29?t.substring(0,29).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}const j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAAAAADwndHIAAAAAXNSR0IArs4c6QAAAp9JREFUeNqFz+tLU3Ecx/H9KZ+lomZKXjO6YUQZdqOILChSe2Dik6UpIvRAwWhkEaVdsLLr8YKKlxRdaaQmztTN5qY23cXc3HA77nz+gc7Zismy9n5w+J4Hr9/v+1ORND5v6HeRNBudLt2Ai+uDwV+u9T16rSfpmZlWspNc7B6wkXQZTTR06kkVbQUxAA7OkunQHAWO6HOAfVayKwWAulqiDsFqKFbFAWlN5GOgSR5vy7wMO4quAQVkGrIgdwhydbRmYP/NLGCUE8nJybFAPe8DFw4jYYIPgQwASTYV89Ql5ElkKzz1aweQMqRTo5C6eLWZnUAD5Rbjke0R03GKvt0oVfhVxyVgSkWKonvsBDIUfpmBWOSTqcoy9EjmBuAeycBx4CMnAS15BQmizCf4BhiT+bNcACFeTO4MPaOQNGqSgBB/AJST74OraACnzG1sA0ZVrARKOnJD/DqZqMhU+bOwFzmN2iCfT8SBFSrXNZJlgD3IWxVuiUMRefFvfgcw8pPCpWPAMMlhoJ4shtoX5uNANTcykLQZwUuBVWXrSr4EEL/nhmk9BvkUs3GOYf59BzLfFQCojeCVsnyaDqSvaBDsPDWIqa8A2rZwqVg5uy4xcyiCz+4CcKYChS5NXu3bVu3ps7TnQO6WtIVz7UVVjZ5dU2STto98ou35PZlqq5pd/lde/tyQfD5JmiM9zZryXomc1t4N0KDVLqv4J9sm/5F3sl0Q2h3cpjB3985x+xw/7E6DYP0/p6ene9bL7dqYWVoVXFE4/fqWtuHFyBNEy+fWD25LN6Nx0j0oCELPl1mrWyQpeZdnxvtahPb5AHXmqFzJMdIuBGtpbQkNvQY/6Z+QovJQPtNItyKVOvq/2UNOYjQeTvI4lxcsS851kVH6BVj9SQl13NmUAAAAAElFTkSuQmCC",F="data:image/png;base64,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",P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",Y="data:image/png;base64,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";function W({_id:t,book_image:e,title:o,author:n,description:s,buy_links:r}){return`<div class="modal-shop-list" id="modal-add" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${e}" alt="${n}${o}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${o}</h1>
        <h2 class="modal-shop-list-author">${n}</h2>
        <p class="modal-shop-list-desc">${s}</p>
        <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link"
                href="${r[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${F} 2x" src="${j}" alt="${r[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link"
            href="${r[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${Y} 2x" src="${P}" alt="${r[1].name}" width="33" height="32" />
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="button btn-shop-list js-btn-add">add to shopping list</button>
  </div>
</div>`}function pt({_id:t,book_image:e,title:o,author:n,description:s,buy_links:r}){return`<div class="modal-shop-list" id="modal-remove" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${e}" alt="${n}${o}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${o}</h1>
        <h2 class="modal-shop-list-author">${n}</h2>
        <p class="modal-shop-list-desc">${s}</p>
          <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link"
                href="${r[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${F} 2x" src="${j}" alt="${r[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link"
            href="${r[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${Y} 2x" src="${P}" alt="${r[1].name}" width="33" height="32" />
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
</div>`}const C="shoppingList";function ft(t,e){try{const o=JSON.stringify(e);localStorage.setItem(t,o)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}const u={containerModalShopList:document.querySelector("#container-modal-shop-list"),bookGallery:document.querySelector(".bookgallery")},x=[];u.bookGallery.addEventListener("click",gt);async function gt(t){t.preventDefault();const e=t.target.closest(".js-book-card");if(!e)return;l(),u.containerModalShopList.style.display="block",document.body.style.overflow="hidden";const o=e.dataset.id,n=await q(o);u.containerModalShopList.innerHTML=W(n),window.addEventListener("click",s);function s(c){c.target===u.containerModalShopList&&l()}document.querySelector(".modal-shop-list-close").addEventListener("click",l);function l(){u.containerModalShopList.classList.toggle("is-hidden"),window.removeEventListener("keydown",a),window.removeEventListener("click",s),u.containerModalShopList.style.display="none",document.body.style.overflow="auto"}window.addEventListener("keydown",a);function a(c){c.code==="Escape"&&l()}document.querySelector(".js-btn-add").addEventListener("click",()=>{u.containerModalShopList.innerHTML=pt(n),x.push(n),ft(C,x),document.querySelector(".modal-shop-list-close").addEventListener("click",l),document.querySelector(".js-btn-remove").addEventListener("click",h);function h(m){u.containerModalShopList.innerHTML=W(n),p(m)}function p(m){const L=(JSON.parse(localStorage.getItem(C))||[]).filter(b=>b.title!==m.title);localStorage.setItem(C,JSON.stringify(L))}})}const y=document.querySelector(".btn-scroll-up");y.addEventListener("click",kt);function bt(){y.classList.remove("visually-hidden")}function vt(){y.classList.add("visually-hidden")}window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?bt():vt()});function kt(){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.querySelector(".loader");
