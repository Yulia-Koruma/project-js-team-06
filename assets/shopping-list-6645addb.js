import{a as $,b as E,c as P,d as x,r as I,g as y,A as d,s as M}from"./support_object-333692f8.js";function k(e){return e.map(({_id:n,book_image:s,title:o,author:l,list_name:u,description:c,buy_links:r})=>`
    <li class="shop-list-item" data-id="${n}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${s}" alt="${l} ${o}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${C(o)}</h2>
    <h4 class="shop-list-category">${S(u)}</h4>
    <p class="shop-list-desc">${q(c)}</p>
    <div class="shop-list-wrap">
      <h3 class="shop-list-author">${l}</h3>
      <ul class="shop-list-buy">
        <li>
            <a
            class="link shop-list-link"
            href="${r[0].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-amazon"
              srcset="${$} 2x"
              src="${E}"
              alt="${r[0].name}"
              width="32"
              height="11" />
          </a>
        </li>
        <li>
          <a
            class="link shop-list-link"
            href="${r[1].url}"
            target="_blank"
            rel="noopener noreferrer">
            <img
              class="buy-icon icon-apple-books"
              srcset="${P} 2x"
              src="${x}"
              alt="${r[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}function C(e){const n=document.documentElement.clientWidth;return n<=767&&e.length>=16?e.substring(0,16).toUpperCase().replace(/\s[A-Z]*$/g,"..."):(n>767,e)}function S(e){return window.innerWidth<=767&&e.length>=20?`${e.slice(0,20)}...`:(window.innerWidth>767,e)}function q(e){return window.innerWidth<=767&&e.length>=80?`${e.slice(0,80)}...`:(window.innerWidth>767&&e.length>=80,e)}const f=document.querySelector(".empty-message"),g=document.querySelector(".shopping-list"),h=document.querySelector("pagination"),B=document.getElementById("firstPage"),b=document.getElementById("prevPage"),A=document.getElementById("currentPage"),T=document.getElementById("nextcurrentPage"),H=document.getElementById("ellipsis"),v=document.getElementById("nextPage"),L=document.getElementById("goToLast"),m=4;let t=1,i;function a(){A.textContent=t,T.textContent=t+1,H.style.display=t<i-1?"block":"none",B.disabled=t===1,b.disabled=t===1,v.disabled=t===i,L.disabled=t===i}function p(){const e=y(d)||[];if(e.length===0)f.style.display="block",h.style.display="none",g.style.display="none";else{f.style.display="none",h.style.display="block",h.classList.remove("is-hidden"),g.style.display="block";const n=(t-1)*m,s=n+m,o=e.slice(n,s),l=k(o);g.innerHTML=l}}function W(){const e=y(d)||[];i=Math.ceil(e.length/m)}W();a();B.addEventListener("click",()=>{t!==1&&(t=1,a(),p())});b.addEventListener("click",()=>{t>1&&(t--,a(),p())});v.addEventListener("click",()=>{t<i&&(t++,a(),p())});L.addEventListener("click",()=>{t<i&&(t=i,a(),p())});function w(){const e=document.querySelector(".empty-message"),n=document.querySelector(".shopping-list"),s=y(d)||[];if(s.length===0)e.style.display="block",n.style.display="none";else{e.style.display="none",n.style.display="block";const o=k(s);n.innerHTML=o,n.querySelectorAll(".shop-list-btn").forEach((u,c)=>{u.addEventListener("click",()=>{s[c],s.splice(c,1),M(d,s),w()})})}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".button.shop-list-btn").forEach(n=>{n.addEventListener("click",s=>{const o=n.closest(".shop-list-item");if(o){const l=o.getAttribute("data-id");l&&(I(l),o.remove())}})})});w();
