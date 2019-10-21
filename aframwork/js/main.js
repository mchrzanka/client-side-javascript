 /* 
    Arrays
    const namesArray=[];
    const namesList=[]

 */

window.addEventListener("load", function(e){
 
      // array is the single source of truth
      // functional programming
      // oop   and function programming
      // dataArray  =======> external resource
      // never mutate the original array dont make changes to this array.
     const dataArray = ['jack', "mary", "helen", "rusty"];

     // Explicit Return from A Function
     const namesArray = dataArray.map(function(name,index){
               return `  <li>${name}</li>`
     });

     // Explicit Return From An Arrow Function
     const newNamesArray = dataArray.map((name, index)=>{
         return`  <li>${name}</li>`
     })
 
    // Implicit Return From An Arrow Function
    const newArray = dataArray.map( (name, index) =>   name);
  
     

      this.console.log(newArray)

    });

 

 
 
    



 
