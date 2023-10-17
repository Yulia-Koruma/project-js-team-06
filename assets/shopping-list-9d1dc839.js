import{a as E,b as P,c as $,d as x,r as I,g as m,A as r,s as M}from"./support_object-065ebad3.js";function k(s){return s.map(({_id:t,book_image:n,title:o,author:l,list_name:g,description:c,buy_links:d})=>`
    <li class="shop-list-item" data-id="${t}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${n}" alt="${l} ${o}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${o.slice(0,14)+"..."}</h2>
    <h4 class="shop-list-category">${g}</h4>
    <p class="shop-list-desc">${c.slice(0,75)+"..."}</p>
    <div class="shop-list-wrap">
        <h3 class="shop-list-author">${l}</h3>
        <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${d[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${E}"
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
              src="${x}"
              alt="${d[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}const y=document.querySelector(".empty-message"),u=document.querySelector(".shopping-list"),B=document.getElementById("firstPage"),b=document.getElementById("prevPage"),w=document.getElementById("currentPage"),C=document.getElementById("nextcurrentPage"),S=document.getElementById("ellipsis"),f=document.getElementById("nextPage"),v=document.getElementById("goToLast"),h=4;let e=1,i;function a(){w.textContent=e,C.textContent=e+1,S.style.display=e<i-1?"block":"none",B.disabled=e===1,b.disabled=e===1,f.disabled=e===i,v.disabled=e===i}function p(){const s=m(r)||[];if(s.length===0)y.style.display="block",u.style.display="none";else{y.style.display="none",u.style.display="block";const t=(e-1)*h,n=t+h,o=s.slice(t,n),l=k(o);u.innerHTML=l}}function q(){const s=m(r)||[];i=Math.ceil(s.length/h)}q();a();B.addEventListener("click",()=>{e!==1&&(e=1,a(),p())});b.addEventListener("click",()=>{e>1&&(e--,a(),p())});f.addEventListener("click",()=>{e<i&&(e++,a(),p())});v.addEventListener("click",()=>{e<i&&(e=i,a(),p())});function L(){const s=document.querySelector(".empty-message"),t=document.querySelector(".shopping-list"),n=m(r)||[];if(n.length===0)s.style.display="block",t.style.display="none";else{s.style.display="none",t.style.display="block";const o=k(n);t.innerHTML=o,t.querySelectorAll(".shop-list-btn").forEach((g,c)=>{g.addEventListener("click",()=>{n[c],n.splice(c,1),M(r,n),L()})})}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".button.shop-list-btn").forEach(t=>{t.addEventListener("click",n=>{const o=t.closest(".shop-list-item");if(o){const l=o.getAttribute("data-id");l&&(I(l),o.remove())}})})});L();
