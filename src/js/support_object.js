
import saveChildren from '../img/support/save_children.png';
import saveChildren2x from '../img/support/save_children@2x.png';
import projectHope from '../img/support/project_hope.png';
import projectHope2x from '../img/support/project_hope@2x.png';
import medicalCorps from '../img/support/medical_corps.png';
import medicalCorps2x from '../img/support/medical_corps@2x.png';
import razom from '../img/support/razom.png';
import razom2x from '../img/support/razom@2x.png';
import actionAgainstHunger from '../img/support/action_against_hunger.png';
import actionAgainstHunger2x from '../img/support/action_against_hunger@2x.png';
import sergiyPrytyla from '../img/support/sergiy_prytyla.png';
import sergiyPrytyla2x from '../img/support/sergiy_prytyla@2x.png';
import medicinsSans from '../img/support/medicins_sans.png';
import medicinsSans2x from '../img/support/medicins_sans@2x.png';
import worldVision from '../img/support/world_vision.png';
import worldVision2x from '../img/support/world_vision@2x.png';
import united24 from '../img/support/united24.png';
import united242x from '../img/support/united24@2x.png';

const supportPage = [
  {
      title: 'Save the Children',
      url:
        'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: saveChildren,
      img2x: saveChildren2x,
      p: '01',
      width: '131',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: projectHope,
      img2x: projectHope2x,
      p: '02',
      width: '62',
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: medicalCorps,
      img2x: medicalCorps2x,
      p: '03',
      width: '101',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: razom,
      img2x: razom2x,
      p: '04',
      width: '82',
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: actionAgainstHunger,
      img2x: actionAgainstHunger2x,
      p: '05',
      width: '55',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: sergiyPrytyla,
      img2x: sergiyPrytyla2x,
      p: '06',
      width: '115',
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: medicinsSans,
      img2x: medicinsSans2x,
      p: '07',
      width: '102',
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: worldVision,
      img2x: worldVision2x,
      p: '08',
      width: '81',
    },
    {
      title: 'united24',
      url: 'https://u24.gov.ua/uk',
      img: united24,
      img2x: united242x,
      p: '09',
      width: '114',
    },
];

  const containerSupport = document.querySelector('.support_list');
  const buttonSupport = document.querySelector('.support_button');


 export function supportList(array) {
   
    return array
      .map(
        ({ title, url, img, img2x, p, width }) =>
          `<li class="support_item">
          
          <p class="support_number">${p}</p>
         <a class="img_link_support"
            href="${url}"   
            title="${title}"
            target="_blank">
            <img
            class="img_support"
            srcset="${img}, ${img2x}"
            src="${img}"
            alt="${title}"
            width="${width}"
            height="32"
            
        /></a>
          
          </li>`
      )
      .join('');
     
  }
  


  containerSupport.insertAdjacentHTML('beforeend', supportList(supportPage));

      const logoSupport = containerSupport.querySelectorAll('.support_item');
      let changeSupport = false;
  
      buttonSupport.addEventListener('click', toggleSupport);
  
      export function toggleSupport() {
        changeSupport = !changeSupport;
  
        const btnArrow = document.querySelector('.button-arrow');
        btnArrow.classList.toggle('trasform-arrow', changeSupport);
  
        for (let i = 0; i < 6; i++) {
          if (logoSupport[i] && logoSupport[i + 6]) {
            if (changeSupport) {
              logoSupport[i].classList.add('hidden');
              logoSupport[i + 6].classList.remove('hidden');
            } else {
              logoSupport[i].classList.remove('hidden');
              logoSupport[i + 6].classList.add('hidden');
            }
          }
        }
      }
  
      for (let i = 6; i < logoSupport.length; i++) {
        logoSupport[i].classList.add('hidden');
      }
    
  
  
 