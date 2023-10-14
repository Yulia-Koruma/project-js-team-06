import{f as l}from"./theme-ca6eed78.js";const p=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:'./img/support/save_children.png" alt="save_children" width="131"',img2x:'./img/support/save_children@2x.png" alt="save_children" width="131"',p:"01"},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:'./img/support/project_hope.png" alt="project_hope" width="62"',img2x:'./img/support/project_hope@2x.png" alt="project_hope" width="62"',p:"02"},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:'./img/support/medical_corps.png" alt="medical_corps" width="101"',img2x:'./img/support/medical_corps@2x.png" alt="medical_corps" width="101"',p:"03"},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:'./img/support/razom.png" alt="razom" width="82"',img2x:'./img/support/razom@2x.png" alt="razom" width="82"',p:"04"},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:'./img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',img2x:'./img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',p:"05"},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:'./img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',img2x:'./img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',p:"06"},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:'./img/support/medicins_sans.png" alt="medicins_sans" width="102"',img2x:'./img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',p:"07"},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:'./img/support/world_vision.png" alt="world_vision" width="81"',img2x:'./img/support/world_vision@2x.png" alt="world_vision" width="81"',p:"08"},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:'./img/support/united24.png" alt="united24" width="114"',img2x:'./img/support/united24@2x.png" alt="united24" width="114"',p:"09"}],r=document.querySelector(".support-box-list"),c=document.querySelector(".support_button");function u(i){return i.map(({title:t,url:o,img:s,img2x:a,p:n})=>`<li class="support_item">
          <p class="support_number">${n}</p>
         <a
            href="${o}"   
            title="${t}"
            target="_blank">
            <img
            class="img_support"
            srcset="${s}, ${a}"
            src="${s}"
            alt="${t}"
            height="32"
        /></a>
          </li>`).join("")}r.insertAdjacentHTML("beforeend",u(p));c.addEventListener("click",d);function d(i){r.scrollTo({top:r.scrollHeight,behavior:"smooth"})}const e=document.querySelector(".btn-scroll-up");e.classList.add("visually-hidden");e.addEventListener("click",g);function g(){window.scrollTo({top:0,left:0,behavior:"smooth"})}const m=document.querySelector(".loader");m.classList.add("visually-hidden");const h=document.querySelector(".bookgallery");document.querySelector(".home-typeBook");const w=async()=>{let i=await l();i=i.map(t=>({...t,books:t.books})),h.innerHTML=await _(i)};w();function _(i){return`
     <h1 class="books-main-title">
     Best Sellers <span class="books-main-title-attribute">Books</span>
     </h1>
<ul class="books-container">${i.map(t=>`
        <li class="books-list">
          <h3 class="books-list-title">${t.list_name}
          </h3>
          <ul class="books-card-container">${t.books.map(o=>`
               <li class="js-book-card" data-id="${o._id}">
                  <a href="#" class="books-card-link" aria-label="books-item-link" rel="noopener noreferrer" data-id='${o._id}'>
                     <div class="books-card">
                         <img src="${o.book_image}" alt="${o.title}" class="books-card-img" width="180" height="256"/>
                         <div class="books-overlay">
                           <p class="books-overlay-text">quick view</p>
                         </div>
                     </div> 
                     <div class="books-descr">
                         <h3 class="books-card-title">${o.title}</h3>
                         <p class="books-card-author">${o.author}</p>
                     </div>
                  </a>
             </li>`).join("")}
          </ul>
          <button class="books-btn" type="button" data-id="${t.list_name}">see more</button>
        </li>
   `).join("")}
</ul>`}
