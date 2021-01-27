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
*/ const showPage = (list, page) => {
   const startIndex = (page * 9) - 9; 
   const endIndex = (page * 9);
   const list = document.querySelector('.student-list');
   list.innerHTML = '';
   for (i = 0; i < list.length; i++) {
      if (list[i] >= startIndex && list[i] < endIndex) {
         const li = document.createElement('li');
         li.className ='student-item cf';
         const studentDiv = document.createElement('div');
         studentDiv.className = 'student-details';
         const avatar = document.createElement('img');
         avatar.className = 'avatar';
         avatar.src = list[i].email;
         const studentName = createElement('h3');
         studentName.textContext = `${list[i].title} ${list[i].first} ${list[i].last}`;
         const emailSpan = document.createElement('span');
         emailSpan.className = 'email';
         emailSpan.textContent = list[i].email;
         const joinedDiv = document.createElement('div');
         joinedDiv.className = 'joined-details';
         const joinedSpan = document.createElement('span');
         joinedSpan.className = 'date';
         joinedSpan.innerText = `Joined ${list[i].registered.date}`;
         list.appendChild(li);

      }

   }
}



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
