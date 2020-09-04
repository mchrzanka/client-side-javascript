// Adding and event to the dom object button
const calculateShippingCost = document.querySelector('.calculate');
const shippingRate = 5;
/* 
  add event to a dom element
  Method addEventListener(eventType, custom function
  select a dom element
  addEventListener method to the dom element
  select a user event click focus change
 ) */

 calculateShippingCost.addEventListener('click',onCalculateShippingCost)

 function onCalculateShippingCost(e){
    const weight = document.querySelector('.weight')
    const costDisplay = document.querySelector('.cost')
    console.log(costDisplay)
    const shippingCost = weight.value * shippingRate;
    // concatinatin a string 
    costDisplay.innerHTML =  `$${shippingCost}.00`
 }












