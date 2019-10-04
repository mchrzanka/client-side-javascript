

window.addEventListener("DOMContentLoaded", function(e){
    const galleryImage = document.querySelector('#gallery-image');
    const backButton = document.querySelector('.back-btn')
    const forwardButton = document.querySelector('.forward-btn')
    const imagesArray = ["img/css.png", "img/html.png", "img/javascript.png"];
    let index = 0;

    galleryImage.src = imagesArray[index]
    
    backButton.addEventListener('click', function(e){
        if(index > 0){
            index = index - 1
            galleryImage.src = imagesArray[index];
        }
    })

    forwardButton.addEventListener('click', function(e){
        if(index < imagesArray.length-1){
            index = index + 1
            galleryImage.src = imagesArray[index]
        }
        })

 


    // list of images

  // accessing array element 

 
  
})

 