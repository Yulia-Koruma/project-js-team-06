import{c as B,f as F,a as G}from"./support_object-b6e47729.js";var W="Expected a function",y=0/0,X="[object Symbol]",J=/^\s+|\s+$/g,q=/^[-+]0x[0-9a-f]+$/i,K=/^0b[01]+$/i,V=/^0o[0-7]+$/i,Z=parseInt,z=typeof B=="object"&&B&&B.Object===Object&&B,$=typeof self=="object"&&self&&self.Object===Object&&self,_=z||$||Function("return this")(),tt=Object.prototype,ot=tt.toString,et=Math.max,nt=Math.min,I=function(){return _.Date.now()};function it(t,o,e){var n,r,s,h,a,d,u=0,L=!1,l=!1,f=!0;if(typeof t!="function")throw new TypeError(W);o=M(o)||0,S(e)&&(L=!!e.leading,l="maxWait"in e,s=l?et(M(e.maxWait)||0,o):s,f="trailing"in e?!!e.trailing:f);function m(i){var A=n,w=r;return n=r=void 0,u=i,h=t.apply(w,A),h}function c(i){return u=i,a=setTimeout(v,o),L?m(i):h}function g(i){var A=i-d,w=i-u,j=o-A;return l?nt(j,s-w):j}function b(i){var A=i-d,w=i-u;return d===void 0||A>=o||A<0||l&&w>=s}function v(){var i=I();if(b(i))return x(i);a=setTimeout(v,g(i))}function x(i){return a=void 0,f&&n?m(i):(n=r=void 0,h)}function H(){a!==void 0&&clearTimeout(a),u=0,n=d=r=a=void 0}function P(){return a===void 0?h:x(I())}function E(){var i=I(),A=b(i);if(n=arguments,r=this,d=i,A){if(a===void 0)return c(d);if(l)return a=setTimeout(v,o),m(d)}return a===void 0&&(a=setTimeout(v,o)),h}return E.cancel=H,E.flush=P,E}function st(t,o,e){var n=!0,r=!0;if(typeof t!="function")throw new TypeError(W);return S(e)&&(n="leading"in e?!!e.leading:n,r="trailing"in e?!!e.trailing:r),it(t,o,{leading:n,maxWait:o,trailing:r})}function S(t){var o=typeof t;return!!t&&(o=="object"||o=="function")}function rt(t){return!!t&&typeof t=="object"}function at(t){return typeof t=="symbol"||rt(t)&&ot.call(t)==X}function M(t){if(typeof t=="number")return t;if(at(t))return y;if(S(t)){var o=typeof t.valueOf=="function"?t.valueOf():t;t=S(o)?o+"":o}if(typeof t!="string")return t===0?t:+t;t=t.replace(J,"");var e=K.test(t);return e||V.test(t)?Z(t.slice(2),e?2:8):q.test(t)?y:+t}var lt=st;const Y=document.querySelector(".bookgallery");let R,k=375;window.addEventListener("resize",lt(ct,200));function ct(){R=Y.classList.contains("container_active"),R&&(window.innerWidth>767&&k<768||window.innerWidth>1439&&k<1440||window.innerWidth<1440&&k>1439||window.innerWidth<768&&k>767)&&location.reload()}k=window.innerWidth;const dt=async()=>{let t=await F();t=t.map(o=>({...o,books:o.books})),Y.innerHTML=await ut(t)};dt();function ut(t){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${t.map(o=>`
        <li class="books-list">
          <h3 class="books-list-title-smal">${o.list_name}
          </h3>
          <ul class="books-card-container">${o.books.map(e=>`
               <li class="js-book-card" data-id="${e._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${e._id}'>
                     <div class="books-card">
                         <img src="${e.book_image}" alt="${e.title}" class="books-card-img"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${At(e.title)}</h3>
                         <p class="books-card-author">${ht(e.author)}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${o.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}function At(t){return window.innerWidth<=767&&t.length>=27?t.substring(0,27).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=19?t.substring(0,19).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}function ht(t){return window.innerWidth<=767&&t.length>=37?t.substring(0,37).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=29?t.substring(0,29).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}const Q="data:image/png;base64,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",U="/project-js-team-06/assets/amazonnn-2x-29a9e776.png",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN/SURBVHgB7VdJjExBGP7+6uluYmgkthmS0YdhLpYgHIZEuFhCiHBxJXFzEOHiKBFbuFhCxBEniUQcjEhExBJMIhwsI5a2RmaEWbpf/f5+vVW9rvf6dTJu8yeVrqr31V9f/VtVA2NSEor6yOfTnV6y0E2gaQpIaY7Gm6IIrDXyDP6c0N4j2oWXaIYEX8Q8RvKKdBdi9OQtjeTX0B70oREJPof5rJIPQJQpz8DNNWw+EpcnxlLaNdJrIlrqllDqpqzL+GvdPBvMR+KSovYaM+YT1XZQJqJwNrUVmjqkodg48BvW2DHmkLH8dnrn0uvMfS0SxLSaWYDlhsBvWINjjJBxqa82mPta7hCWWXKZuWUikN0Iamkt2gvc3wd8vC2slY1rXwWamAUSKfDfHPDtMfAnB4eH2kJJKKY0cwC/7ABo0V4gPcnQIfL1CfStncDAe6B1NtTaC8DsVTZmuB/88Ai495Sc0FRMrda+5kB7MjZ8SR2bQcsPWQSqMmMJaO0lwYmSTdctAlVJZ0ArD4Oy26yYUcwq1BLggHknzEGUUNsKcKYLmNoVicO4GaVYqIi2XW6T8IqaDUDANU6ZsqAxhv14q0VbIOzswKxEb0V0jGpALY0QJb26Vhg4cDpbg2+mJi3BMYoWw3ZBlCWgFWplluNv0CyJaEuYNGOW5dgkjHGgvtS7o2yE0uI4loiJqViCAoTgsAQb2UEajfXHwFRLtt8v8ohKUU7YlS2OqWORgBUTHBmYdXXC6A9JCf7xxvcntS9yY7w8+KdgBvtB0+cB4yeXiVJdgQolIbcoWyW+mCCfnkPfOAjOPRVFhdLkuMlQy3dDrdlftZbuOQF+cAY89AuVoKb2xVBbTjeXHfImLNe1Eki/kDvh0WU5YcFYKN//9kPfOSrdhG8Jfesw9L2TZUgtu/jDM3inusUiGcttHBUTYonf1Y2KMvDD/Iqg6J5jQEc3+NlVub4TcIuk4+Bva70E83AoCU9TLgHrzHWxSdXT+DSA13f90l3JJK7D1PQYFehdgKbBiNUNjni2uZ5u/s1b/4SDS09lXlb0uA5WYU4j+2a+kgTpxP+TvtTRL3MRZgn/DtV6OzQX/EAa7ebxgBTD9UFWzuTlAzM78sMoPiKzCBNXwEQK97KiHenjuVcuVeHL9s7q8pRaxqzbpJImm/0bKPEyIhn8nRN837X5mATlH/NXv+oaRoVuAAAAAElFTkSuQmCC",O="data:image/png;base64,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";function pt({_id:t,book_image:o,title:e,author:n,description:r,buy_links:s}){return`<div class="modal-shop-list" id="modal-add" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${o}" alt="${n}${e}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${e}</h1>
        <h2 class="modal-shop-list-author">${n}</h2>
        <p class="modal-shop-list-desc">${r}</p>
        <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link"
                href="${s[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${U} 2x" src="${Q}" alt="${s[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link"
            href="${s[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${O} 2x" src="${N}" alt="${s[1].name}" width="33" height="32" />
          </a>
          </li>
        </ul>
      </div>
    </div>
    <button type="button" class="button btn-shop-list js-btn-add">add to shopping list</button>
  </div>
</div>`}function mt({_id:t,book_image:o,title:e,author:n,description:r,buy_links:s}){return`<div class="modal-shop-list" id="modal-remove" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M21 7L7 21M7 7L21 21" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${o}" alt="${n}${e}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${e}</h1>
        <h2 class="modal-shop-list-author">${n}</h2>
        <p class="modal-shop-list-desc">${r}</p>
          <ul class="modal-shop-list-buy">
          <li>
            <a class="link modal-shop-list-link modal-shop-list-link-amazon"
                href="${s[0].url}"
                target="_blank"
                rel="noopener noreferrer">
                <img class="buy-icon icon-amazon" srcset="${U} 2x" src="${Q}" alt="${s[0].name}" width="62" height="19" />
            </a>
            </li>
          <li>
            <a class="link modal-shop-list-link modal-shop-list-link-apple"
            href="${s[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img class="buy-icon icon-apple-books" srcset="${O} 2x" src="${N}" alt="${s[1].name}" width="33" height="32" />
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
</div>`}const C="shoppingList";function gt(t,o){try{const e=JSON.stringify(o);localStorage.setItem(t,e)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}function T(t){try{const o=localStorage.getItem(t);return o===null?void 0:JSON.parse(o)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}const p={containerModalShopList:document.querySelector("#container-modal-shop-list"),bookGallery:document.querySelector(".bookgallery")};p.bookGallery.addEventListener("click",ft);async function ft(t){t.preventDefault();const o=t.target.closest(".js-book-card");if(!o)return;l(),p.containerModalShopList.style.display="block",document.body.style.overflow="hidden";const e=o.dataset.id,n=await G(e),r=T(C)||[];function s(c){const g=r.filter(b=>b.title!==c.title);localStorage.setItem(C,JSON.stringify(g))}r.some(({_id:c})=>c===e)||!1?(d(),document.querySelector(".js-btn-remove").addEventListener("click",()=>{s(n)})):(a(),document.querySelector(".js-btn-add").addEventListener("click",()=>{d();const g=T(C)||[];g.push(n),gt(C,g),document.querySelector(".modal-shop-list-close").addEventListener("click",l),document.querySelector(".js-btn-remove").addEventListener("click",()=>s(n))}));function a(){p.containerModalShopList.innerHTML=pt(n)}function d(){p.containerModalShopList.innerHTML=mt(n)}window.addEventListener("click",u);function u(c){c.target===p.containerModalShopList&&l()}document.querySelector(".modal-shop-list-close").addEventListener("click",f);function l(){p.containerModalShopList.classList.toggle("is-hidden"),p.containerModalShopList.style.display="none",document.body.style.overflow="auto"}function f(){l(),window.removeEventListener("keydown",m),window.removeEventListener("click",u)}window.addEventListener("keydown",m);function m(c){c.code==="Escape"&&l()}}const D=document.querySelector(".btn-scroll-up");D.addEventListener("click",wt);function bt(){D.classList.remove("visually-hidden")}function vt(){D.classList.add("visually-hidden")}window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?bt():vt()});function wt(){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.querySelector(".loader");
