window.addEventListener("load", e=>{
 const todoListItems = [];
 const toDoForm = document.querySelector('form');
 toDoForm.addEventListener('submit', function(e){
     e.preventDefault();
 
    const toDo = validateToDo(e.target)
    if(toDo.valid){
      addToDoItem(toDo);
    }
 })

 function addToDoItem(item){

    // Object YES
    //
    const markup = `${item.todo}     ${item.category}    ${item.time}`
    console.log(markup)
 }
 

 function validateToDo(formData){
      const toDoObject ={
          todo: formData.todo.value,
          category: formData.category.value,
          time: formData.time.value,
          valid: true,
      }
     return toDoObject
 }
})