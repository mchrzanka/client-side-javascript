 /* 
   To Do List App
 */
window.addEventListener('load', function(e){
 // data array will contain entries data Objects
 const dataArray=[];
 const toDoForm = document.querySelector('.to-do');
 toDoForm.addEventListener('submit', function(e){
      e.preventDefault();
      // validate function is sent the from DOM object
      const toDoItem = validate(e.target);
     if(toDoItem.valid){
         console.log("do dom stuff")
     }else{
         console.log("do error stuff")
     }
  })// close submit event

  function validate(formData){
    // validate each form field
    let errors = 0;
    const dataObject = {};
    const errorObject = {}
     

    if(formData.elements.todo.value.trim() === ""){
        errorObject.message ="please enter a to do item";
        errorObject.item = formData.elements.todo
        errors ++;
    }else{
        dataObject.value = formData.elements.todo.value;
        dataObject.item = formData.elements.todo
    }


    // check the errors == 0 no errors
    // errors > 0 something went wrong
    if(errors === 0){
        dataObject.valid = true;
       return dataObject;
    }else{
        errorObject.valid = false;
      return errorObject;
    }
  }



     
})