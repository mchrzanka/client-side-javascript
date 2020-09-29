window.addEventListener('load', function(e){

const thumbsUp  = document.querySelector('.thumb-up')
const thumbsDown  = document.querySelector('.thumb-down')
let likes =0;
let dislikes = 0;

thumbsUp.addEventListener('click', function(e){
    // target thats what was clicked on inside  child elements
    // currentTarget ===> thumbsUp div      parent element
     e.currentTarget.querySelector('span').textContent = likes++
})

thumbsDown.addEventListener('click', function(e){
    // target thats what was clicked on inside  child elements
    // currentTarget ===> thumbsUp div      parent element
    // dislikes ++    dislikes = dislikes + 1
     e.currentTarget.querySelector('span').textContent = dislikes--
})

})