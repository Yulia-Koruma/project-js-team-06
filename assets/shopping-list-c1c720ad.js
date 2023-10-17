import{a as h,b as m,c as u,d as y,g as f,A as k}from"./support_object-c8e753f6.js";function B(s){return s.map(({_id:n,book_image:i,title:c,author:r,list_name:d,description:g,buy_links:o})=>`
    <li class="shop-list-item" data-id="${n}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${i}" alt="${r} ${c}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${c.slice(0,14)+"..."}</h2>
    <h4 class="shop-list-category">${d}</h4>
    <p class="shop-list-desc">${g.slice(0,75)+"..."}</p>
    <div class="shop-list-wrap">
        <h3 class="shop-list-author">${r}</h3>
        <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${o[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${h}"
              src="${m}"
              alt="${o[0].name}"
              width="32"
              height="11" />
          </a>
        </li>
        <li>
          <a
            class="link shop-list-link"
            href="${o[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-apple-books"
              srcset="${u}"
              src="${y}"
              alt="${o[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}const $=document.getElementById("firstPage"),v=document.getElementById("prevPage"),b=document.getElementById("currentPage"),p=document.getElementById("nextcurrentPage"),L=document.getElementById("ellipsis"),w=document.getElementById("goToLast"),a=document.querySelector(".shopping-list"),l=4;let e=1;function t(){b.innerText=e,p.innerText=e+1,L.style.display=e<l-1?"block":"none"}t();$.addEventListener("click",()=>{e!==1&&(e=1,t())});v.addEventListener("click",()=>{e>1&&(e--,t())});p.addEventListener("click",()=>{e<l&&(e++,t())});w.addEventListener("click",()=>{e<l&&(e=l,t())});function E(){const s=document.querySelector(".empty-message"),n=f(k)||[];if(n.length===0)s.style.display="block",a.style.display="none";else{s.style.display="none",a.style.display="block";const i=B(n);a.insertAdjacentHTML("beforeend",i)}}E();
