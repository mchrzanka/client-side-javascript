/*
    window load event
    all script will be inside the {}
    {} in javascript create a scope
    anything you declare inside {} is protected from being overwritten. 

*/

window.addEventListener('load', function(){
//all of your script will be here
//create a reference variable

const formElement = document.querySelector('#sum');
const numberOne = document.querySelector('#number-one');
const numberTwo = document.querySelector('#number-two');
//submit event is added to the form and not the submit button

formElement.addEventListener('submit',function(eventObject){

function addTwoNumbers(num1, num2){
    let sum = Number(num1) + Number(num2);
    console.log(sum);

}

//add two numbers, needs two arguments numone numtwo
addTwoNumbers(numberOne.nodeValue,numberTwo.value);

eventObject.preventDefault();

})


