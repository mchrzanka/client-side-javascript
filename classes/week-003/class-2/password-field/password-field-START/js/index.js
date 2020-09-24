/*
    application scope window load
    refvar = img input
    img click event
    create state variable to switch img between eye open and eye closed
    condition check the state var toggle the image and the input
    img.search
    input.type
*/

window.addEventListener('load', function(){
    const showHideButton = document.querySelector('.password img');
    const passwordField = document.querySelector('#user-password')
   showHideButton.addEventListener('click', function (e){
  
           

           if(passwordField.type == "password"){
            e.target.src="img/icons/eye-closed.svg"
            passwordField.type="text"
           }else{
            e.target.src="img/icons/eye-open.svg"
            passwordField.type="password"
           }

   })
})