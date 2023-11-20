import jobCategories from '../constants/job-categories.ts';

const buildJobCategoryList = () => {
  const jobCategoryEl = document.getElementById('job-categories');
  const buildCategoryEl = ({ url, name, icon }) => `
  <li>
  <a href="${url}" class="button" data-variant="curved" target="_blank">
  <i class="${icon} text-2xl"></i>
  <span class="flex-1">${name}</span>
  </a>
  </li>
`;

  // Job Categories
  jobCategoryEl.innerHTML = jobCategories.map(buildCategoryEl).join('');
}

export default buildJobCategoryList;
