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
@Param list {array} the dataset that we are pulling from to create the first list. 
@Param page {number} the page number that we are trying to display.
*/ const showPage = (list, page) => {
   const startIndex = (page * 9) - 9; 
   const endIndex = (page * 9);
   const studentPage = document.querySelector('.student-list');
   studentPage.innerText = '';
   for (i = 0; i < list.length; i++) {
      if (list[i] >= startIndex && list[i] < endIndex) {

      const htmlElement = 
      ` 
      <li class="student-item cf">
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
      studentPage.insertAdjacentHTML("beforeend", htmlElement);
      }
      
   }
}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
showPage(data, 1);