/* 
   Data Types
   Boolean True and False
   Numbers
   Strings ''  or ""
   Object antoher type of list of things
   Arrays list of things
*/
const productName   = document.querySelector('.product')
const productPrice  = document.querySelector('.bid')
const calculateProductTotal = document.querySelector('button') 
const shippingRequired = document.querySelector('#shipping')
 

// named function event handler can be used with other
// elements of your code

// a anonymous event handler function can not be use outside 
// by other code elements

/* 
            Conditional Statements
            How You Ask A Question 
            Structure/Syntax of a conditional statement
            conditional Statament can return true or false
            if(expression operator expresion/conditions){

            }

            Stubb Code
           When button is Click 
           check product id is not empty
            check price is valid and not empty
            check if shipping is required
*/


calculateProductTotal.addEventListener('click', function(eventObj){
         
       if(shippingRequired.checked){
          console.log("yes shipping is require make calculation")
       }
});

 