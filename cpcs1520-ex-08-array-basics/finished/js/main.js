/* 
      get ref var to
     form, product select, output
*/
const productPrices = [13.33, 8.65, 10.23, 9.65, 10.69];
const shippingRates = [16.55, 24.33, 21.12, 19.78, 26.18];
const productTypes = ["Thor", "Purple Urkle", "MK Ultra", "Gorilla Glue"];

const options = document.querySelector("#options");
const products = document.querySelector("#products");
const display = document.querySelector("#output");

// submitting a form handler
options.addEventListener("submit", function(e) {
  // stop the default behavhour
  e.preventDefault();
});

// change handler for the product
// switch the image from the value property???
// event objct see what properties it returns

products.addEventListener("change", e => {
  const imageUrl = `img/${event.target.value}.jpg`;
  display.querySelector("img").src = imageUrl;
  display.querySelector("p").textContent = productTypes[e.target.selectedIndex];
  console.log(e.target.selectedIndex);
});
