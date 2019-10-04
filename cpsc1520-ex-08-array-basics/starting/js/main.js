/* 
      get ref var to
     form, product select, output
*/

/* 
arrray is a list
-number, string, arrays, objects, booleans
- indexed =0 first position in the array
array's declared []
get a value from an array prodouctPrices[0]
objects  const jimo = {name: "aj"}
access object value   jimo.name
*/
const productTypes = ["thor", "purple urkle", "mk ultra", 'gorilla glue']
 
const options = document.querySelector("#options");
const products = document.querySelector("#products");
const display = document.querySelector("#output");

// Product Select Element Handler 
products.addEventListener('change', function(e){
      const url =  `img/${e.target.value}.jpg`;
      display.querySelector('img').src = url;
      display.querySelector('p').textContent = productTypes[e.target.selectedIndex];

})


// Form Invoice Handler 
options.addEventListener('submit', function(e){
      e.preventDefault();
      const quantity = e.target.quantity.value;
      const productChoice = productTypes[e.target.products.selectedIndex]
       
      const invoice = `
          <ul>
            <li>Product Type: ${productChoice}</li>
            <li>Product Type: ${quantity}</li>
          </ul>
      `
      display.querySelector('div').innerHTML = invoice;
})

  