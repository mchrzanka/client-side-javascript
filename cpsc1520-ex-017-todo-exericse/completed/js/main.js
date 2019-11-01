 /* 
     To Do App
     set up you application scope
     create a sumbti event for the form
     check all fields are validated
     dataArray===> hold your objects
 
 */
window.addEventListener('load', function(e){
   const toDoListArray=[];
   const toDoListForm = document.querySelector('.to-do');
   toDoListForm.addEventListener('submit', function(e){
       e.preventDefault();
       // validate your data
       console.log(e.target.time.value)
       const validate = formValidator(e);
         if(validate.valid ===true){
             console.log("build the dom")
         }else{
             console.log("handle errors")
         }
       
   })
     // validate form function 
     function formValidator(e){
         // validated used to check to see if all fields are valid
         let validated = 0;
         // dataObject used to create dataObject to build DOM element
         let dataObject = {}
         // error object is for holding error messages for the input
         // fields ?????
         let errorObject = {}

         if(e.target.todo.value.trim() === ""){
             errorObject.item = e.target.todo;
             errorObject.message = "enter a to do item";
             validated ++;
         }else{
            dataObject.text = e.target.todo.value;
            console.log(dataObject.text)
         }

         

         if(validated === 0){
             dataObject.valid = true;
            return dataObject
         }else{
             errorObject.valid=false;
             return errorObject
         }

     }
})