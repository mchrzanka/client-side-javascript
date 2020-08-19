/* 
 Application State
 - Import Data
 - Parse Data
 - Display Data

 JS Import Extenal Data
   XMLHttpRequest
   fetch api
   axios library

  1. load the data with fetch
  2. building the markup
 

*/
window.addEventListener('DOMContentLoaded', function(e){
  const loadDataButton = document.querySelector('button');
  const display = document.querySelector('.display');
  let appData=[];
  let userList =``;

  /* 
   1. Bring in the data using Fetch
  */
  fetch('data/users.json').then
  (response => response.json()).then
  (data =>{
      appData =  [...data]
      buildMarkup() 
     
  }) 

 /* 
   2. Building the markup
 */

 function buildMarkup(){
   let listItem = ``;
    appData.forEach(user=>{
    listItem += `<li>${user.name}</li>`
    })
   const list = `<ul>${listItem}</ul>`
   let fragment = document.createRange().createContextualFragment(list)
   userList = fragment.querySelector('ul');
   const links = userList.querySelectorAll('li');
   links.forEach((link, index)=>{
       link.dataset.index = index;
       link.addEventListener('click', function(e){
         console.log(e.target.dataset.index)
         display.innerHTML = ""
       })
   })
   
 }




  loadDataButton.addEventListener('click', function(e){
    display.innerHTML= ""
     display.appendChild(userList)
  })
 
})// END OF APPLICATION

 