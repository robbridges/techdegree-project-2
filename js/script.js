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
@param page {number} the number of the page that we want to see;
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
We also make sure that the event target is a button, so that we can call the showPage function. Before this, if the div area was clicked on, the results would be passed in as null
and return no results. 
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
/*
@Param data {array} the data that we are working with or any data set would work
we are going to filter through the results and return results in the search criteria is contained in the students first Name. There is an event listener attached to search button
that fires to return a new filtered array that contains our matches to the first time, then displays those results to the page, and paginates them accordingly
We check to make sure the filtered array is not empty before we paginate so that we do not get any errors regarding an object not existing.
*/
const addSearchBar = (data) => {
   const header = document.querySelector('.header');
   const searchBar = 
   `<label for="search" class ="student-search">
      <input id = 'search' placeholder='search by name...'>
      <button type='button' id='search-button'><img src='img/icn-search.svg' alt='Search icon'></button>
    </label>
   `
   const searchResultsMessage = document.createElement('h2');
   header.insertAdjacentHTML('beforeend', searchBar);
   const searchButton = document.querySelector("#search-button");
   // event lister for the search button being used will find if the searched value is contained in 
   searchButton.addEventListener('click', (e) => {
      searchResultsMessage.innerHTML = '';
      const searchInput = document.querySelector('#search');
      const searchText = searchInput.value;
      searchInput.value = '';
      const filteredArray = [];
      for (let i = 0; i < data.length; i++) {
         if (data[i].name.first.toLowerCase().includes(searchText.toLowerCase())) {
            filteredArray.push(data[i]);
         }
         
      }
      if (filteredArray.length !== 0) {
         showPage(filteredArray, 1);
         addPagination(filteredArray);
      } else {
         searchResultsMessage.innerHTML = `<h2 style="color:red;">Your search for ${searchText} returned no results, please view our students profiles below </h2> <br>`;  
         const pageDiv = document.querySelector('.page');     
         const studentList = document.querySelector('.student-list');
         pageDiv.insertBefore(searchResultsMessage, studentList);
         showPage(data, 1);
         addPagination(data);

      }
      
   });
}
// Call functions
showPage(data, 1);
addPagination(data);
addSearchBar(data);
