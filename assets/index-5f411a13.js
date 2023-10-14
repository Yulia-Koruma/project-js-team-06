import{f as u,a as h}from"./theme-93602eb9.js";const g=document.querySelector(".bookgallery");document.querySelector(".home-typeBook");const m=async()=>{let i=await u();i=i.map(o=>({...o,books:o.books})),g.innerHTML=await k(i)};m();function k(i){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${i.map(o=>`
        <li class="books-list">
          <h3 class="books-list-title">${o.list_name}
          </h3>
          <ul class="books-card-container">${o.books.map(t=>`
               <li class="js-book-card" data-id="${t._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${t._id}'>
                     <div class="books-card">
                         <img src="${t.book_image}" alt="${t.title}" class="books-card-img" width="180" height="256"/>
                         <div class="books-overlay">
                           <p class="books-overlay-text">quick view</p>
                         </div>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${t.title}</h3>
                         <p class="books-card-author">${t.author}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${o.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}const b=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:'./img/support/save_children.png" alt="save_children" width="131"',img2x:'./img/support/save_children@2x.png" alt="save_children" width="131"',p:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:'./img/support/project_hope.png" alt="project_hope" width="62"',img2x:'./img/support/project_hope@2x.png" alt="project_hope" width="62"',p:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:'./img/support/medical_corps.png" alt="medical_corps" width="101"',img2x:'./img/support/medical_corps@2x.png" alt="medical_corps" width="101"',p:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:'./img/support/razom.png" alt="razom" width="82"',img2x:'./img/support/razom@2x.png" alt="razom" width="82"',p:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:'./img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',img2x:'./img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',p:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:'./img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',img2x:'./img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',p:"06"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:'./img/support/medicins_sans.png" alt="medicins_sans" width="102"',img2x:'./img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',p:"07"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:'./img/support/world_vision.png" alt="world_vision" width="81"',img2x:'./img/support/world_vision@2x.png" alt="world_vision" width="81"',p:"08"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:'./img/support/united24.png" alt="united24" width="114"',img2x:'./img/support/united24@2x.png" alt="united24" width="114"',p:"09"}],l=document.querySelector(".support-box-list"),w=document.querySelector(".support_button");function v(i){return i.map(({title:o,url:t,img:s,img2x:a,p:r})=>`<li class="support_item">
          <p class="support_number">${r}</p>
         <a
            href="${t}"   
            title="${o}"
            target="_blank">
            <img
            class="img_support"
            srcset="${s}, ${a}"
            src="${s}"
            alt="${o}"
            height="32"
        /></a>
          </li>`).join("")}l.insertAdjacentHTML("beforeend",v(b));w.addEventListener("click",y);function y(i){l.scrollTo({top:l.scrollHeight,behavior:"smooth"})}function _({_id:i,book_image:o,title:t,author:s,description:a,buy_links:r}){const c=r.filter(n=>{if(n.name==="Amazon"||n.name==="Apple Books")return n.url});return`<div class="backdrop is-hidden">
  <div class="modal-shop-list" data-id=${i}>
    <button type="button" class="button modal-shop-list-close">
      <svg class="modal-shop-list-icon" width="24" height="24">
        <use href="./img/icons.svg#icon-x-close"></use>
      </svg>
    </button>
    <div class="modal-shop-list-wrap">
      <img src="${o}" alt="${s}${t}" width="287" height="408" />
      <div class="modal-shop-list-info">
        <h1 class="modal-shop-list-title">${t}</h1>
        <h2 class="modal-shop-list-author">${s}</h2>
        <p class="modal-shop-list-desc">${a}</p>
        <div class="modal-shop-list-buy">
          <a
            class="link modal-shop-list-link"
            href="${c[0]}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./img/amazon-1x.png" alt="Amazon" width="62" height="19" />
          </a>
          <a
            class="link modal-shop-list-link"
            href="${c[1]}"
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
</div>`}function f(i,o){try{const t=JSON.stringify(o);localStorage.setItem(i,t)}catch{Notiflix.Notify.failure("Something went wrong. Please try again")}}const e={containerModalShopList:document.querySelector("#container-modal-shop-list"),bookCard:document.querySelector(".js-book-card"),btnAddShopList:document.querySelector(".js-btn-add"),btnRemoveShopList:document.querySelector(".js-btn-remove")};console.log(e.bookCard);const S="shoppingList",p=[];e.bookCard.addEventListener("click",$);async function $(i){e.containerModalShopList.classList.remove("is-hidden"),e.containerModalShopList.style.display="block",document.body.style.overflow="hidden";const o=i.target.closest(".js-book-card");console.log(o);const t=o.dataset.id;console.log(t);const s=await h(t),a=_(s);e.containerModalShopList.innerHTML=a,e.btnAddShopList.addEventListener("click",()=>{p.push(s),f(S,p)})}const d=document.querySelector(".btn-scroll-up");d.classList.add("visually-hidden");d.addEventListener("click",x);function x(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const L=document.querySelector(".loader");L.classList.add("visually-hidden");
