/* 
   Using State Logic in Javascript with the DOM

    ref var for the icon and the input password field
    add alistner to the icon for click event
    create a state var for show and hide true or false
    inside the event handler check the state var in an
    if then else
    check my login with console.card-login
    write the js to perform the action

*/
 

const showHidePasword = document.querySelector('#icon');
const passwordField = document.querySelector('#user-password');

let showPassword = false;

showHidePasword.addEventListener('click', function(eventObject){
       if(showPassword === false){
        passwordField.type = 'text'
        showHidePasword.src = 'img/hide.svg'
        showPassword = true;
       }else{
        passwordField.type="password"
        showHidePasword.src = 'img/show.svg'
        showPassword = false;
       }
})

 