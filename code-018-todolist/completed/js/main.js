window.addEventListener('load', function(e){
    // application scope
const todoArray= [];
const todoForm = document.querySelector('form');
const removeIcon = `<img src="img/icons/remove.svg">`
todoForm.addEventListener('submit', function(e){
    e.preventDefault();
  // validate function
  // return value T F

   const validateItem = validateToDO(e.target);
   if(validateItem.valid){
       createToDoItem(validateItem)
      //displayToDoItems();
   }
})

function createToDoItem(newToDo){
    const todoElement = `
    <tr>
             <td>${newToDo.todo}</td>
             <td>${newToDo.category}</td>
             <td>${newToDo.time}</td>
             <td>${removeIcon}</td>
           </tr>
    `
   todoArray.push(todoElement)
}



  function validateToDO(theForm){
 
           const todoItem = {}
           let errorCount = 0;
  
               if(theForm.elements.todo.value.trim() !== ''){
                todoItem.todo = theForm.elements.todo.value
               }

               if(theForm.elements.category.value.trim() !== ''){
                todoItem.category = theForm.elements.category.value
            }

            if(theForm.elements.time.value !== 0){
                todoItem.time = parseFloat(theForm.elements.time.value)
            }
            

            if(errorCount === 0){
                todoItem.valid = true;
                 return todoItem
            }
  }


}) // END OF APP