/* 
      Aplication Scope
      adding removing replacing copying moving
      elements in the dom
       Node not Element
*/

window.addEventListener('load', function(e){
  //application scope
  const saveButton = document.querySelector('button');
  const dataArray = [];
  const imageUrl = 'img/icons/remove.svg';
  const itemDisplay = document.querySelector('.array-items');
  
 
  saveButton.addEventListener('click', function(e){
    // handle saving data
    const data = document.querySelector('input').value.trim();
   
    if(data !== ""){
          dataArray.push(data);
          // nodes
           updateDisplay(data)
    }
  })//end of save button event

  function updateDisplay(data){
    // create a node (elem, markup)
    // create li node
    const newListItem = document.createElement('li');
    newListItem.dataset.index = dataArray.length -1;
    // add the submitted text to the li
     newListItem.textContent = data;
    // add the class .array-item
    newListItem.classList.add('array-item');
    

    // create img
    const newImage = document.createElement('img');
    newImage.addEventListener('click', onRemoveItem);
    // add the src for the image img/icons/remove.svg
    newImage.src = imageUrl
    // add class .remove-icon
    newImage.classList.add('remove-icon')

    // add the img to li
    newListItem.appendChild(newImage)
    // add li to the ul
    itemDisplay.appendChild(newListItem)
   

  }// end of set display

  function onRemoveItem(e){
    // which element in a group is being clicked
     const removeThisItem = e.target.parentNode.dataset.index;
    // how will we select the ul > li
    const items = itemDisplay.querySelectorAll('li');
      items.forEach((item, index)=>{
        // check for a match item.dataset.index vs removeThisItem
   
        if( item.dataset.index  === removeThisItem){
          // remove the item from the DOM
          itemDisplay.removeChild(item)
          // remove item from the data array
          dataArray.splice(removeThisItem,1); 
        }
      })
      
      console.log(dataArray)
      itemDisplay.querySelectorAll('li').forEach((item,index)=>{
        item.dataset.index = index
      })
  }


})// NO CODE OUTSIDE OF HERE

 