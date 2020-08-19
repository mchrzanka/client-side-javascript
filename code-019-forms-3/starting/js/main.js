// create application scope
window.addEventListener("load", function(e) {
  
  const todoForm = document.querySelector("form");
  const toTosDisplay = document.querySelector('.todo-display');
  const removeIcon = `<img  src="img/icons/remove.svg" data-index>`;
  todoForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const validateItem = validateToDO(e.target);
    if (validateItem.valid) {
      const htmlString = createToDoItem(validateItem);
    }
  }); //todoForm submit

 

 

 

  


  function createToDoItem(newToDo) {
    const todoElement = `
    <table>
    <tr>
             <td class="what-todo">${newToDo.todo}</td>
             <td class="category">${newToDo.category}</td>
             <td class="time">${newToDo.time}</td>
             <td class="remove"> ${removeIcon} </td>
     </tr>
      </table>
    `;
    return todoElement;
  }

  function validateToDO(theForm) {
    const todoItem = {};
    let errorCount = 0;

    if (theForm.elements.todo.value.trim() !== "") {
      todoItem.todo = theForm.elements.todo.value;
    }

    if (theForm.elements.category.value.trim() !== "") {
      todoItem.category = theForm.elements.category.value;
    }

    if (theForm.elements.time.value !== 0) {
      todoItem.time = parseFloat(theForm.elements.time.value).toFixed(2);
    }

    if (errorCount === 0) {
      todoItem.valid = true;
      return todoItem;
    }
  }
}); // END OF APP
