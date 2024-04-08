import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
import 'uno.css';
// import './main.css';
// import { buildHiringEvents } from './js/hiring-events.js';
// import { buildAgencySelect } from './js/agency-select.js';
import '@nycds/core';
import buildJobCategoryList from './js/scaffolding/job-category-list-items';
import './js/inert-polyfill.js';
import './js/components/NYCForm.js';
import './js/components/NYCClearInputButton.js';
import './js/components/NYCReel.js';
import './js/components/NYCEventCard.js';
import './js/components/NYCEventCardList.js';
import './js/components/NYCCsv.js';

const main = () => {
  try {
    // buildHiringEvents();
    // buildAgencySelect();
    //buildJobCategoryList();
    // const toggleSwitch = document.querySelector('#theme-toggle');
    // let currentTheme = localStorage.getItem('theme');
    // console.log(currentTheme);
    // currentTheme = "dark";

    // if (currentTheme) {
    //   document.documentElement.setAttribute('data-theme', currentTheme);
      
    //   if (currentTheme === 'dark') {
    //     toggleSwitch.checked = true;
    //   }
    // }

    // function switchTheme(e) {
    //   if (e.target.checked) {
    //     document.documentElement.setAttribute('data-theme', 'dark');
    //     localStorage.setItem('theme', 'dark');
    //   } else {
    //     document.documentElement.setAttribute('data-theme', 'light');
    //     localStorage.setItem('theme', 'light');
    //   }    
    // }

    // toggleSwitch.addEventListener('change', switchTheme, false);
  } catch (e) {
    console.error(e);
  }
}

main();
