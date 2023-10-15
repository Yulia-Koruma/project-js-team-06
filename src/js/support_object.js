
import saveChildren from '../img/support/save_children.png';
import projectHope from '../img/support/project_hope.png';
import medicalCorps from '../img/support/medical_corps.png';
import razom from '../img/support/razom.png';
import actionAgainstHunger from '../img/support/action_against_hunger.png';
import sergiyPrytyla from '../img/support/sergiy_prytyla.png';
import medicinsSans from '../img/support/medicins_sans.png';
import worldVision from '../img/support/world_vision.png';
import united24 from '../img/support/united24.png';

const supportPage = [
  {
      title: 'Save the Children',
      url:
        'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: saveChildren,
      p: '01',
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: projectHope,
      p: '02',
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: medicalCorps,
   
      p: '03',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: razom,
      p: '04',
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: actionAgainstHunger,
      p: '05',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: sergiyPrytyla,
      p: '06',
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: medicinsSans,
      p: '07',
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: worldVision,
      p: '08',
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: united24,
      p: '09',
    },
];


// const supportPage = [
//     {
//         title: 'Save the Children',
//         url:
//           'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
        
//         img: './img/support/save_children.png" alt="save_children" width="131"',
//         img2x: './img/support/save_children@2x.png" alt="save_children" width="131"',
//         p: '01',
//       },
//       {
//         title: 'Project HOPE',
//         url: 'https://www.projecthope.org/country/ukraine/',
//         img: './img/support/project_hope.png" alt="project_hope" width="62"',
//         img2x: './img/support/project_hope@2x.png" alt="project_hope" width="62"',
//         p: '02',
//       },
//       {
//         title: 'International Medical Corps',
//         url: 'https://internationalmedicalcorps.org/country/ukraine/',
//         img: './img/support/medical_corps.png" alt="medical_corps" width="101"',
//         img2x: './img/support/medical_corps@2x.png" alt="medical_corps" width="101"',
//         p: '03',
//       },
//       {
//         title: 'RAZOM',
//         url: 'https://www.razomforukraine.org/',
//         img: './img/support/razom.png" alt="razom" width="82"',
//         img2x: './img/support/razom@2x.png" alt="razom" width="82"',
//         p: '04',
//       },
//       {
//         title: 'Action against hunger',
//         url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
//         img: './img/support/action_against_hunger.png" alt="action_against_hunger" width="55"',
//         img2x: './img/support/action_against_hunger@2x.png" alt="action_against_hunger" width="55"',
//         p: '05',
//       },
//       {
//         title: 'Serhiy Prytula Charity Foundation',
//         url: 'https://prytulafoundation.org/en',
//         img: './img/support/sergiy_prytyla.png" alt="sergiy_prytyla" width="115"',
//         img2x: './img/support/sergiy_prytyla@2x.png" alt="sergiy_prytyla" width="115"',
//         p: '06',
//       },
//       {
//         title: 'Medicins Sans Frontieres',
//         url: 'https://www.msf.org/ukraine',
//         img: './img/support/medicins_sans.png" alt="medicins_sans" width="102"',
//         img2x: './img/support/medicins_sans@2x.png" alt="medicins_sans" width="102"',
//         p: '07',
//       },
//       {
//         title: 'World vision',
//         url: 'https://www.wvi.org/emergencies/ukraine',
//         img: './img/support/world_vision.png" alt="world_vision" width="81"',
//         img2x: './img/support/world_vision@2x.png" alt="world_vision" width="81"',
//         p: '08',
//       },
//       {
//         title: 'UNITED24',
//         url: 'https://u24.gov.ua/uk',
//         img: './img/support/united24.png" alt="united24" width="114"',
//         img2x: './img/support/united24@2x.png" alt="united24" width="114"',
//         p: '09',
//       },
//   ];

  
  const containerSupport = document.querySelector('.support_box_list');
  const buttonSupport = document.querySelector('.support_button');


  function supportList(array) {
   
    return array
      .map(
        ({ title, url, img, img2x, p }) =>
          `<li class="support_item ">
          <p class="support_number">${p}</p>
         <a
            href="${url}"   
            title="${title}"
            target="_blank">
            <img
            class="img_support"
            srcset="${img}, ${img2x}"
            src="${img}"
            alt="${title}"
            height="32"
        /></a>
          </li>`
      )
      .join('');
  }



  containerSupport.insertAdjacentHTML('beforeend', supportList(supportPage));
  
 console.log(containerSupport);

  buttonSupport.addEventListener('click', scrollSupport);
  
  function scrollSupport(event) {
    containerSupport.scrollTo({
      top: containerSupport.scrollHeight,
      behavior: 'smooth',
    });
  }


