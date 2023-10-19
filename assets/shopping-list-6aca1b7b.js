import{a as P,b as $,c as x,d as w,r as I,g as y,A as r,s as M}from"./support_object-62cef337.js";function f(t){return t.map(({_id:s,book_image:n,title:o,author:l,list_name:u,description:c,buy_links:d})=>`
    <li class="shop-list-item" data-id="${s}">
    <button class="button shop-list-btn" type="button">
    <svg class="shop-list-btn-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
    <img class="shop-list-img" src="${n}" alt="${l} ${o}" width="100" height="142" />
    <div class="shop-list-info">
    <h2 class="shop-list-title">${o}</h2>
    <h4 class="shop-list-category">${C(u)}</h4>
    <p class="shop-list-desc">${c}</p>
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
              srcset="${P} 2x"
              src="${$}"
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
              srcset="${x} 2x"
              src="${w}"
              alt="${d[1].name}"
              width="16"
              height="16" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</li>`).join("")}function C(t){return window.innerWidth<=767&&t.length>=20?`${t.slice(0,20)}...`:(window.innerWidth>767,t)}const k=document.querySelector(".empty-message"),g=document.querySelector(".shopping-list"),h=document.querySelector("pagination"),B=document.getElementById("firstPage"),b=document.getElementById("prevPage"),S=document.getElementById("currentPage"),q=document.getElementById("nextcurrentPage"),A=document.getElementById("ellipsis"),v=document.getElementById("nextPage"),L=document.getElementById("goToLast"),m=4;let e=1,i;function a(){S.textContent=e,q.textContent=e+1,A.style.display=e<i-1?"block":"none",B.disabled=e===1,b.disabled=e===1,v.disabled=e===i,L.disabled=e===i}function p(){const t=y(r)||[];if(t.length===0)k.style.display="block",h.style.display="none",g.style.display="none";else{k.style.display="none",h.style.display="block",h.classList.remove("is-hidden"),g.style.display="block";const s=(e-1)*m,n=s+m,o=t.slice(s,n),l=f(o);g.innerHTML=l}}function H(){const t=y(r)||[];i=Math.ceil(t.length/m)}H();a();B.addEventListener("click",()=>{e!==1&&(e=1,a(),p())});b.addEventListener("click",()=>{e>1&&(e--,a(),p())});v.addEventListener("click",()=>{e<i&&(e++,a(),p())});L.addEventListener("click",()=>{e<i&&(e=i,a(),p())});function E(){const t=document.querySelector(".empty-message"),s=document.querySelector(".shopping-list"),n=y(r)||[];if(n.length===0)t.style.display="block",s.style.display="none";else{t.style.display="none",s.style.display="block";const o=f(n);s.innerHTML=o,s.querySelectorAll(".shop-list-btn").forEach((u,c)=>{u.addEventListener("click",()=>{n[c],n.splice(c,1),M(r,n),E()})})}}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".button.shop-list-btn").forEach(s=>{s.addEventListener("click",n=>{const o=s.closest(".shop-list-item");if(o){const l=o.getAttribute("data-id");l&&(I(l),o.remove())}})})});E();
