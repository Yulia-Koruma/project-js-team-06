import{c as b,f as U,a as N}from"./category-c695c08a.js";var M="Expected a function",A=0/0,P="[object Symbol]",R=/^\s+|\s+$/g,H=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,Z=/^0o[0-7]+$/i,Y=parseInt,G=typeof b=="object"&&b&&b.Object===Object&&b,D=typeof self=="object"&&self&&self.Object===Object&&self,J=G||D||Function("return this")(),K=Object.prototype,V=K.toString,X=Math.max,Q=Math.min,_=function(){return J.Date.now()};function tt(t,e,i){var n,r,l,a,s,d,u=0,$=!1,g=!1,k=!0;if(typeof t!="function")throw new TypeError(M);e=B(e)||0,w(i)&&($=!!i.leading,g="maxWait"in i,l=g?X(B(i.maxWait)||0,e):l,k="trailing"in i?!!i.trailing:k);function y(o){var c=n,h=r;return n=r=void 0,u=o,a=t.apply(h,c),a}function W(o){return u=o,s=setTimeout(f,e),$?y(o):a}function O(o){var c=o-d,h=o-u,T=e-c;return g?Q(T,l-h):T}function j(o){var c=o-d,h=o-u;return d===void 0||c>=e||c<0||g&&h>=l}function f(){var o=_();if(j(o))return L(o);s=setTimeout(f,O(o))}function L(o){return s=void 0,k&&n?y(o):(n=r=void 0,a)}function q(){s!==void 0&&clearTimeout(s),u=0,n=d=r=s=void 0}function z(){return s===void 0?a:L(_())}function v(){var o=_(),c=j(o);if(n=arguments,r=this,d=o,c){if(s===void 0)return W(d);if(g)return s=setTimeout(f,e),y(d)}return s===void 0&&(s=setTimeout(f,e)),a}return v.cancel=q,v.flush=z,v}function et(t,e,i){var n=!0,r=!0;if(typeof t!="function")throw new TypeError(M);return w(i)&&(n="leading"in i?!!i.leading:n,r="trailing"in i?!!i.trailing:r),tt(t,e,{leading:n,maxWait:e,trailing:r})}function w(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function it(t){return!!t&&typeof t=="object"}function nt(t){return typeof t=="symbol"||it(t)&&V.call(t)==P}function B(t){if(typeof t=="number")return t;if(nt(t))return A;if(w(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=w(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(R,"");var i=F.test(t);return i||Z.test(t)?Y(t.slice(2),i?2:8):H.test(t)?A:+t}var ot=et;const I=document.querySelector(".bookgallery");let E,m=375;window.addEventListener("resize",ot(rt,200));function rt(){E=I.classList.contains("container_active"),E&&(window.innerWidth>767&&m<768||window.innerWidth>1439&&m<1440||window.innerWidth<1440&&m>1439||window.innerWidth<768&&m>767)&&location.reload()}m=window.innerWidth;const st=async()=>{let t=await U();t=t.map(e=>({...e,books:e.books})),I.innerHTML=await at(t)};st();function at(t){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${t.map(e=>`
        <li class="books-list">
          <h3 class="books-list-title">${e.list_name}
          </h3>
          <ul class="books-card-container">${e.books.map(i=>`
               <li class="js-book-card" data-id="${i._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${i._id}'>
                     <div class="books-card">
                         <img src="${i.book_image}" alt="${i.title}" class="books-card-img" width="180" height="256"/>
                         <p class="books-overlay-text">quick view</p>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${lt(i.title)}</h3>
                         <p class="books-card-author">${ct(i.author)}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${e.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}function lt(t){return window.innerWidth<=767&&t.length>=27?t.substring(0,27).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=19?t.substring(0,19).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}function ct(t){return window.innerWidth<=767&&t.length>=37?t.substring(0,37).toUpperCase().replace(/\s[A-Z]*$/g,"..."):window.innerWidth>767&&t.length>=29?t.substring(0,29).toUpperCase().replace(/\s[A-Z]*$/g,"..."):t}const dt=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:'./img/support/save_children.png" alt="save_children" width="131"',img2x:'./img/support/save_children@2x.png" alt="save_children" width="131"',p:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:'./img/support/project_hope.png" alt="project_hope" width="62"',img2x:'./img/support/project_hope@2x.png" alt="project_hope" width="62"',p:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:'./img/support/medical_corps.png" alt="medical_corps" width="101"',img2x:'./img/support/medical_corps@2x.png" alt="medical_corps" width="101"',p:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:'./img/support/razom.png" alt="razom" width="82"',img2x:'./img/support/razom@2x.png" alt="razom" width="82"',p:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:'./img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',img2x:'./img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',p:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:'./img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',img2x:'./img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',p:"06"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:'./img/support/medicins_sans.png" alt="medicins_sans" width="102"',img2x:'./img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',p:"07"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:'./img/support/world_vision.png" alt="world_vision" width="81"',img2x:'./img/support/world_vision@2x.png" alt="world_vision" width="81"',p:"08"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:'./img/support/united24.png" alt="united24" width="114"',img2x:'./img/support/united24@2x.png" alt="united24" width="114"',p:"09"}],S=document.querySelector(".support-box-list"),pt=document.querySelector(".support_button");function ut(t){return t.map(({title:e,url:i,img:n,img2x:r,p:l})=>`<li class="support_item">
          <p class="support_number">${l}</p>
         <a
            href="${i}"   
            title="${e}"
            target="_blank">
            <img
            class="img_support"
            srcset="${n}, ${r}"
            src="${n}"
            alt="${e}"
            height="32"
        /></a>
          </li>`).join("")}S.insertAdjacentHTML("beforeend",ut(dt));pt.addEventListener("click",gt);function gt(t){S.scrollTo({top:S.scrollHeight,behavior:"smooth"})}function ht({_id:t,book_image:e,title:i,author:n,description:r,buy_links:l}){const a=l.filter(s=>{if(s.name==="Amazon"||s.name==="Apple Books")return s.url});return`<div class="backdrop is-hidden">
  <div class="modal-shop-list" data-id=${t}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${e}" alt="${n}${i}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${i}</h1>
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
</div>`}function mt(t,e){try{const i=JSON.stringify(e);localStorage.setItem(t,i)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}const p={containerModalShopList:document.querySelector("#container-modal-shop-list"),bookCard:document.querySelector(".js-book-card"),btnAddShopList:document.querySelector(".js-btn-add"),btnRemoveShopList:document.querySelector(".js-btn-remove")};console.log(p.bookCard);const ft="shoppingList",C=[];p.bookCard.addEventListener("click",bt);async function bt(t){p.containerModalShopList.classList.remove("is-hidden"),p.containerModalShopList.style.display="block",document.body.style.overflow="hidden";const e=t.target.closest(".js-book-card");console.log(e);const i=e.dataset.id;console.log(i);const n=await N(i),r=ht(n);p.containerModalShopList.innerHTML=r,p.btnAddShopList.addEventListener("click",()=>{C.push(n),mt(ft,C)})}const x=document.querySelector(".btn-scroll-up");x.addEventListener("click",yt);function wt(){x.classList.remove("visually-hidden")}function kt(){x.classList.add("visually-hidden")}window.addEventListener("scroll",()=>{(window.scrollY||document.documentElement.scrollTop)>400?wt():kt()});function yt(){window.scrollTo({top:0,left:0,behavior:"smooth"})}document.querySelector(".loader");
