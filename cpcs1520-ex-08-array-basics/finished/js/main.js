/* 
      get ref var to
     form, product select, output
*/
const productPrices = [13.33, 8.65, 10.23, 9.65, 10.69];
const shippingRates = [16.55, 24.33, 21.12, 19.78, 26.18];

const options = document.querySelector("#options");
const products = document.querySelector("#products");
const display = document.querySelector("#output");

const productTypes = ["Thor", "Purple Urkle", "MK Ultra", "Gorilla Glue"];
// select event handler for the products
products.addEventListener('change', function(e){
    // getting an option field in a select element
    const url =  `img/${e.target.value}.jpg`    
    output.querySelector('img').src =url;
   const productItem =   productTypes[e.target.selectedIndex]
   output.querySelector('p').textContent = productItem
   
})

// submit handler for the form
options.addEventListener('submit', function(e){
     e.preventDefault();
     const quantity= e.target.quantity.value;
     const selectedProduct = productTypes[e.target.products.selectedIndex]
     const invoice = `
         <ul>
            <li>Product Type: ${selectedProduct} </li>
            <li>Quantity: ${quantity}</li>
         </ul>
     `
      display.querySelector('div').innerHTML = invoice;
})


 
