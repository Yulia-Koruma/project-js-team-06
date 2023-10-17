import{a as L,b as P,c as $,d as E,r as x,g,A as m}from"./support_object-b43b8ce3.js";function u(t){return t.map(({_id:s,book_image:l,title:n,author:i,list_name:B,description:v,buy_links:d})=>`
    <li class="shop-list-item" data-id="${s}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${l}" alt="${i} ${n}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${n.slice(0,14)+"..."}</h2>
    <h4 class="shop-list-category">${B}</h4>
    <p class="shop-list-desc">${v.slice(0,75)+"..."}</p>
    <div class="shop-list-wrap">
        <h3 class="shop-list-author">${i}</h3>
        <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${d[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${L}"
              src="${P}"
              alt="${d[0].name}"
              width="32"
              height="11" />
          </a>
        </li>
        <li>
          <a
            class="link shop-list-link"
            href="${d[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-apple-books"
              srcset="${$}"
              src="${E}"
              alt="${d[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}const h=document.querySelector(".empty-message"),a=document.querySelector(".shopping-list"),y=document.getElementById("firstPage"),k=document.getElementById("prevPage"),I=document.getElementById("currentPage"),M=document.getElementById("nextcurrentPage"),w=document.getElementById("ellipsis"),b=document.getElementById("nextPage"),f=document.getElementById("goToLast"),p=4;let e=1,o;function c(){I.textContent=e,M.textContent=e+1,w.style.display=e<o-1?"block":"none",y.disabled=e===1,k.disabled=e===1,b.disabled=e===o,f.disabled=e===o}function r(){const t=g(m)||[];if(t.length===0)h.style.display="block",a.style.display="none";else{h.style.display="none",a.style.display="block";const s=(e-1)*p,l=s+p,n=t.slice(s,l),i=u(n);a.innerHTML=i}}function C(){const t=g(m)||[];o=Math.ceil(t.length/p)}C();c();y.addEventListener("click",()=>{e!==1&&(e=1,c(),r())});k.addEventListener("click",()=>{e>1&&(e--,c(),r())});b.addEventListener("click",()=>{e<o&&(e++,c(),r())});f.addEventListener("click",()=>{e<o&&(e=o,c(),r())});function H(){const t=document.querySelector(".empty-message"),s=g(m)||[];if(s.length===0)t.style.display="block",a.style.display="none";else{t.style.display="none",a.style.display="block";const l=u(s);a.innerHTML=l}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".button.shop-list-btn").forEach(s=>{s.addEventListener("click",l=>{const n=s.closest(".shop-list-item");n&&n.getAttribute("data-id")&&(x(book._id),n.remove())})})});H();
