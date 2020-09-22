// let code javacsript 
window.addEventListener('load', ()=>{
// email form input gets focused animate the email field on load
 const email = document.querySelector(".email-control input");
 email.addEventListener("blur", animateOut)
 email.addEventListener("focus", animateIn)
 email.focus();
 email.parentNode.children.item(0).classList.add('move')
 
 // password form field
 const password = document.querySelector(".password-control input")
 password.addEventListener("blur", animateOut)
 password.addEventListener("focus", animateIn)
 
 function animateOut(e, item) {
    let inputText = e.target.value.trim()
    if( inputText ===""){
        e.target.parentNode.children.item(0).classList.remove('move');
        e.target.parentNode.children.item(0).classList.add('shake');
    }
    
}


function animateIn(e, item){
        e.target.parentNode.children.item(0).classList.remove('shake');
        e.target.parentNode.children.item(0).classList.add('move');
}


})