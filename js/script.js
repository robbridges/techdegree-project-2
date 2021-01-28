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
This function will create and insert/append the elements needed to display a "page" of nine students if no results are found in the list parameter it displays no students found.
@Param list {array} the dataset that we are gathering from, and will be displaying
@param page {number} the number of the page that we want to see;
*/ 
const showPage = (list, page) => {
   const startIndex = (page * 9) - 9; 
   const endIndex = (page * 9);
   const ul = document.querySelector('.student-list');
   ul.innerText = '';
   if(list.length == 0) {
      const noResultsHTML = `<p> No students matched your results, please search again<p>`
      ul.insertAdjacentHTML("beforeend", noResultsHTML);
   }
   for ( let i = 0; i < list.length; i++) {
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
We also add an event listener to display a different page of the data object passed in
*/
const addPagination = (list) => {
   const maxPageNumber = Math.ceil(list.length / 9);
   const buttonList = document.querySelector('.link-list');
   buttonList.innerHTML ='';
   for ( let i=0; i < maxPageNumber; i++) {
      const htmlString =
      `
         <li>
            <button type='button'>${[i + 1]}</button>
         </li>   
      `
      buttonList.insertAdjacentHTML('beforeend',htmlString);
   }
   if (buttonList.firstElementChild !== null) {
      buttonList.firstElementChild.firstElementChild.className = 'active';
   }
   
   buttonList.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
      document.querySelector('.active').className = '';
      e.target.className = 'active';
      showPage(list, e.target.textContent);
      }
   });

}
/*
@Param data {array} the data that we are working with or any data set would work
Fuction creates and writes search bar to the DOM. Also has two event listeners that both perform this search function 
*/
const search = (data) => {
   const header = document.querySelector('.header');
   const searchBar = 
   `<label for="search" class ="student-search">
      <input id = 'search' placeholder='search by name...'>
      <button type='button' id='search-button'><img src='img/icn-search.svg' alt='Search icon'></button>
    </label>
   `
   header.insertAdjacentHTML('beforeend', searchBar);
   const searchButton = document.querySelector("#search-button");
   const searchField = (document.querySelector('#search'));
   const searchFilter = () => {
      const searchText = searchField.value;
      searchText.value = '';
      const filteredArray = [];
      for (let i = 0; i < data.length; i++) {
         if (data[i].name.first.toLowerCase().includes(searchText.toLowerCase()) || data[i].name.last.toLowerCase().includes(searchText.toLowerCase())) {
            filteredArray.push(data[i]);
         }
         
      }
      showPage(filteredArray,1);
      addPagination(filteredArray);
   }
   // two event listeners below, performing the same fuction wrapped in the searchFilter fuction.
   searchButton.addEventListener('click', e => {
      e.preventDefault();
      searchFilter();
   });

   searchField.addEventListener('keyup', e => {
      searchFilter();
   });
}
// Call functions
showPage(data, 1);
addPagination(data);
search(data);
