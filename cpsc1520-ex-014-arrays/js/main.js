/* 
      Aplication Scope
*/

window.addEventListener('load', function(e){
  //application scope
  const saveButton = document.querySelector('button');
  const dataArray = [];
  const imageUrl = 'img/icons/remove.svg';
  const itemDisplay = document.querySelector('ul');

  saveButton.addEventListener('click', function(e){
    // handle saving data
    const data = document.querySelector('input').value.trim();
    console.log(data)
    if(data !== ""){
          dataArray.push(data);
           updateDisplay(data)
    }
  })//end of save button event

  function updateDisplay(data){
    // create a node (elem, markup)
    // create li
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
    console.log(itemDisplay)

  }// end of set display

  function onRemoveItem(e){
    // which element in a group is being clicked
    console.log(e.target.parentNode.dataset.index)
    console.table(dataArray)
  }


})// NO CODE OUTSIDE OF HERE

 