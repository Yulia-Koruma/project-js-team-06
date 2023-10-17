import{a as g,b as h,c as m,d as u}from"./support_object-66edee73.js";function y(n){return n.map(({_id:t,book_image:o,title:i,author:c,list_name:p,description:d,buy_links:l})=>`
    <li class="shop-list-item" data-id="${t}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${o}" alt="${c} ${i}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${i.slice(0,14)+"..."}</h2>
    <h4 class="shop-list-category">${p}</h4>
    <p class="shop-list-desc">${d.slice(0,75)+"..."}</p>
    <div class="shop-list-wrap">
        <h3 class="shop-list-author">${c}</h3>
        <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${l[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${g} 2x"
              src="${h}"
              alt="${l[0].name}"
              width="32"
              height="11" />
          </a>
        </li>
        <li>
          <a
            class="link shop-list-link"
            href="${l[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-apple-books"
              srcset="${m} 2x"
              src="${u}"
              alt="${l[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}const f=document.getElementById("firstPage"),k=document.getElementById("prevPage"),B=document.getElementById("currentPage"),r=document.getElementById("nextcurrentPage"),$=document.getElementById("ellipsis"),v=document.getElementById("goToLast"),a=4;let e=1;function s(){B.innerText=e,r.innerText=e+1,$.style.display=e<a-1?"block":"none"}s();f.addEventListener("click",()=>{e!==1&&(e=1,s())});k.addEventListener("click",()=>{e>1&&(e--,s())});r.addEventListener("click",()=>{e<a&&(e++,s())});v.addEventListener("click",()=>{e<a&&(e=a,s())});document.querySelector(".shopping-list");function b(){const n=document.querySelector(".empty-message"),t=document.querySelector(".shopping-list"),o=JSON.parse(localStorage.getItem("shoppingList"))||[];if(o.length===0)n.style.display="block",t.style.display="none";else{n.style.display="none",t.style.display="block",t.innerHTML="";const i=y(o);t.insertAdjacentHTML("beforeend",i)}}b();
