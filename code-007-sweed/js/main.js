/* 
   get ref var to
     form, product select, output
*/

const options = document.querySelector('#options')
const products = document.querySelector('#products')
const productImage = document.querySelector('#output img')

// submitting a form handler
options.addEventListener('submit', function(e){
       // stop the default behavhour
       e.preventDefault();     
})

// change handler for the product
// switch the image from the value property???
// event objct see what properties it returns

 products.addEventListener('change', (e) => {
      const imageUrl = `img/${event.target.value}.jpg`;
      productImage.src = imageUrl;
      // options returns an array
      const temp = Array.from (e.target.options)
      const index = e.target.selectedIndex
     console.log(temp[index])
      
      formatProductName()
 })


 function formatProductName(){

 }