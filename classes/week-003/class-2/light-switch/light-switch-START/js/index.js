/*
    window on load event
    create two refvar img and the button
    button add click event

    read/write an element attributes
    elm.getAttribute(attribute name)
    elm.setAttribute(attribute name, assignment value)
    elm.src
*/

window.addEventListener('load',function(){
    const light = document.querySelector('.light-switch img');
    const switchButton = document.querySelector('button');
    let isLightOn = false;
    switchButton.addEventListener('click',function(e){
       
        if(isLightOn === true){
            light.src='img/light-off.jpg';
            isLightOn = false;
        }else{
            light.src='img/light-on.jpg';
            isLightOn =true;
        }
    })
})