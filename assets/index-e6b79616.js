import{c as b,f as N,a as P}from"./category-1a53466f.js";var E="Expected a function",T=0/0,U="[object Symbol]",R=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,G=parseInt,D=typeof b=="object"&&b&&b.Object===Object&&b,J=typeof self=="object"&&self&&self.Object===Object&&self,K=D||J||Function("return this")(),V=Object.prototype,X=V.toString,Y=Math.max,Q=Math.min,_=function(){return K.Date.now()};function tt(t,i,e){var n,r,l,a,s,d,u=0,x=!1,g=!1,k=!0;if(typeof t!="function")throw new TypeError(E);i=A(i)||0,w(e)&&(x=!!e.leading,g="maxWait"in e,l=g?Y(A(e.maxWait)||0,i):l,k="trailing"in e?!!e.trailing:k);function y(o){var c=n,h=r;return n=r=void 0,u=o,a=t.apply(h,c),a}function W(o){return u=o,s=setTimeout(f,i),x?y(o):a}function O(o){var c=o-d,h=o-u,L=i-c;return g?Q(L,l-h):L}function $(o){var c=o-d,h=o-u;return d===void 0||c>=i||c<0||g&&h>=l}function f(){var o=_();if($(o))return j(o);s=setTimeout(f,O(o))}function j(o){return s=void 0,k&&n?y(o):(n=r=void 0,a)}function q(){s!==void 0&&clearTimeout(s),u=0,n=d=r=s=void 0}function z(){return s===void 0?a:j(_())}function v(){var o=_(),c=$(o);if(n=arguments,r=this,d=o,c){if(s===void 0)return W(d);if(g)return s=setTimeout(f,i),y(d)}return s===void 0&&(s=setTimeout(f,i)),a}return v.cancel=q,v.flush=z,v}function it(t,i,e){var n=!0,r=!0;if(typeof t!="function")throw new TypeError(E);return w(e)&&(n="leading"in e?!!e.leading:n,r="trailing"in e?!!e.trailing:r),tt(t,i,{leading:n,maxWait:i,trailing:r})}function w(t){var i=typeof t;return!!t&&(i=="object"||i=="function")}function et(t){return!!t&&typeof t=="object"}function nt(t){return typeof t=="symbol"||et(t)&&X.call(t)==U}function A(t){if(typeof t=="number")return t;if(nt(t))return T;if(w(t)){var i=typeof t.valueOf=="function"?t.valueOf():t;t=w(i)?i+"":i}if(typeof t!="string")return t===0?t:+t;t=t.replace(R,"");var e=F.test(t);return e||Z.test(t)?G(t.slice(2),e?2:8):H.test(t)?T:+t}var ot=it;const M=document.querySelector(".bookgallery");let B,m=375;window.addEventListener("resize",ot(rt,200));function rt(){B=M.classList.contains("container_active"),B&&(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()}m=window.innerWidth;const st=async()=>{let t=await N();t=t.map(i=>({...i,books:i.books})),M.innerHTML=await at(t)};st();function at(t){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${t.map(i=>`
        <li class="books-list">
          <h3 class="books-list-title">${i.list_name}
          </h3>
          <ul class="books-card-container">${i.books.map(e=>`
               <li class="js-book-card" data-id="${e._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${e._id}'>
                     <div class="books-card">
                         <img src="${e.book_image}" alt="${e.title}" class="books-card-img" width="180" height="256"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${lt(e.title)}</h3>
                         <p class="books-card-author">${ct(e.author)}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${i.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}function lt(t){return window.innerWidth<=767&&t.length>=27?t.substring(0,27).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=19?t.substring(0,19).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}function ct(t){return window.innerWidth<=767&&t.length>=37?t.substring(0,37).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=29?t.substring(0,29).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}const dt=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:'./img/support/save_children.png" alt="save_children" width="131"',img2x:'./img/support/save_children@2x.png" alt="save_children" width="131"',p:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:'./img/support/project_hope.png" alt="project_hope" width="62"',img2x:'./img/support/project_hope@2x.png" alt="project_hope" width="62"',p:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:'./img/support/medical_corps.png" alt="medical_corps" width="101"',img2x:'./img/support/medical_corps@2x.png" alt="medical_corps" width="101"',p:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:'./img/support/razom.png" alt="razom" width="82"',img2x:'./img/support/razom@2x.png" alt="razom" width="82"',p:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:'./img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',img2x:'./img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',p:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:'./img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',img2x:'./img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',p:"06"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:'./img/support/medicins_sans.png" alt="medicins_sans" width="102"',img2x:'./img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',p:"07"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:'./img/support/world_vision.png" alt="world_vision" width="81"',img2x:'./img/support/world_vision@2x.png" alt="world_vision" width="81"',p:"08"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:'./img/support/united24.png" alt="united24" width="114"',img2x:'./img/support/united24@2x.png" alt="united24" width="114"',p:"09"}],S=document.querySelector(".support-box-list"),pt=document.querySelector(".support_button");function ut(t){return t.map(({title:i,url:e,img:n,img2x:r,p:l})=>`<li class="support_item">
          <p class="support_number">${l}</p>
         <a
            href="${e}"   
            title="${i}"
            target="_blank">
            <img
            class="img_support"
            srcset="${n}, ${r}"
            src="${n}"
            alt="${i}"
            height="32"
        /></a>
          </li>`).join("")}S.insertAdjacentHTML("beforeend",ut(dt));pt.addEventListener("click",gt);function gt(t){S.scrollTo({top:S.scrollHeight,behavior:"smooth"})}function ht({_id:t,book_image:i,title:e,author:n,description:r,buy_links:l}){const a=l.filter(s=>{if(s.name==="Amazon"||s.name==="Apple Books")return s.url});return`<div class="backdrop is-hidden">
  <div class="modal-shop-list" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${i}" alt="${n}${e}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${e}</h1>
        <h2 class="modal-shop-list-author">${n}</h2>
        <p class="modal-shop-list-desc">${r}</p>
        <div class="modal-shop-list-buy">
          <a
            class="link modal-shop-list-link"
            href="${a[0]}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/amazon-1x.png" alt="Amazon" width="62" height="19" />
          </a>
          <a
            class="link modal-shop-list-link"
            href="${a[1]}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/apple-books-1x.png" alt="Apple Books" width="33" height="32" />
            <button type="button" class="button">add to shopping list</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`}function mt(t,i){try{const e=JSON.stringify(i);localStorage.setItem(t,e)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}const p={containerModalShopList:document.querySelector("#container-modal-shop-list"),bookCard:document.querySelector(".js-book-card"),btnAddShopList:document.querySelector(".js-btn-add"),btnRemoveShopList:document.querySelector(".js-btn-remove")};console.log(p.bookCard);const ft="shoppingList",C=[];p.bookCard.addEventListener("click",bt);async function bt(t){p.containerModalShopList.classList.remove("is-hidden"),p.containerModalShopList.style.display="block",document.body.style.overflow="hidden";const i=t.target.closest(".js-book-card");console.log(i);const e=i.dataset.id;console.log(e);const n=await P(e),r=ht(n);p.containerModalShopList.innerHTML=r,p.btnAddShopList.addEventListener("click",()=>{C.push(n),mt(ft,C)})}const I=document.querySelector(".btn-scroll-up");I.classList.add("visually-hidden");I.addEventListener("click",wt);function wt(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const kt=document.querySelector(".loader");kt.classList.add("visually-hidden");
