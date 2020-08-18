/* 
  
*/

const options = document.querySelector("#options");
const products = document.querySelector("#products");
const display = document.querySelector("#output");

// set up the products handler to switch image and text
products.addEventListener('change', function(e){
  display.querySelector('img').src = `img/${e.target.value}.jpg`;
  display.querySelector('p').textContent = e.target.options[e.target.selectedIndex].textContent
  
})

const productPriceList = [13.33, 8.65, 10.23, 9.65, 10.69];
const shippingRates = [16.55, 24.33, 21.12, 19.78, 26.18];
options.addEventListener('submit', function(e){
   e.preventDefault();
   const selectedProduct = e.target.products.options[e.target.products.selectedIndex].textContent;
   const quantity =   e.target.quantity.value;
   const productCost = productPriceList[e.target.products.selectedIndex]
   const shippingCost =  shippingRates[e.target.province.selectedIndex]
   const cost =    Number.parseFloat ( quantity * productCost) 
   const totalCost =   ( shippingCost + cost).toFixed(2)
   const invoice = `
      <h2>Your Invoice</h2>
      <ul>
      <li>Product: ${selectedProduct}</li>
      <li>Quantity ${quantity}</li>
      <li>Price Per Gram ${productCost}</li>
      </ul>
   `
   display.querySelector('.invoice').innerHTML = invoice;

})

  