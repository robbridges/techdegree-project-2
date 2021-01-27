/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
@Param list {array} the dataset that we are gathering from, and will be displaying
@param page {number} the number of the page that we want to see
We then create with a template literal our HTML variable to append, and insert it at the end. 
*/ 
const showPage = (list, page) => {
   const startIndex = (page * 9) - 9; 
   const endIndex = (page * 9);
   const ul = document.querySelector('.student-list');
   ul.innerText = '';
   for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {

      const htmlElement = 
      ` <li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
            <h3 class="name"> ${list[i].name.first} ${list[i].name.last}</h3>
            <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
            <span class="date">${list[i].registered.date}</span>
         </div>
      </li>
      `;

      ul.insertAdjacentHTML("beforeend", htmlElement);
      }
      
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
@Param list {array} data set that we are using
We also check to make sure that the event that was clicked on was a button, and not the div that wraps it, which would lead to a blank pagination

*/
const addPagination = (list) => {
   const maxPageNumber = Math.ceil(list.length / 9);
   const buttonList = document.querySelector('.link-list');
   buttonList.innerHTML ='';
   for (i=0; i < maxPageNumber; i++) {
      const htmlString =
      `
         <li>
            <button type='button'>${[i + 1]}</button>
         </li>   
      `
      buttonList.insertAdjacentHTML('beforeend',htmlString);
   }
   buttonList.firstElementChild.firstElementChild.className = 'active';
   
   buttonList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(data, e.target.textContent);
      }
   });

}

// Call functions
showPage(data, 1);
addPagination(data);
