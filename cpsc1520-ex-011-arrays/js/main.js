window.addEventListener("load", function() {
  // this will be external in November
  var productOject1 = {
    id: "0",
    src: "img/strain-8.jpg"
  };

  var productOject2 = {
    id: "1",
    src: "img/strain-7.jpg"
  };

  var productOject3 = {
    id: "2",
    src: "img/strain-3.jpg"
  };
  // Pull the data place it into an array
  // array of data object JSON
  var dataArray = [];

  //  Place data object in the array
  // Push - array method  push()
  dataArray.push(productOject1);
  dataArray.push(productOject2);
  dataArray.push(productOject3);
  // view an array of data
  console.table(dataArray);

  document.querySelector(".product1").addEventListener("click", onUpdateDisplay);
  document.querySelector(".product2").addEventListener("click", onUpdateDisplay);
  document.querySelector(".product3").addEventListener("click", onUpdateDisplay);

  function onUpdateDisplay(e) {
    var dataIndex = e.currentTarget.dataset.index;
    switch (dataIndex) {
      case "0":
        setDisplay(dataArray[0]);
        break;
      case "1":
        setDisplay(dataArray[1]);
        break;
      case "2":
        setDisplay(dataArray[2]);
        break;
    }
  }

  function setDisplay(obj) {
    var imageContainer = document.querySelector(".product-info  img");
    // console.log("no need to animate", imageContainer.src, obj.src)
    // if(imageContainer.src === obj.src){
      // console.log(imageContainer.getAttribute('src'), imageContainer.src)

    // }else{
    //     TweenLite.to(imageContainer, 0.8, {ease:Power1.easeOut, opacity:1});
    //     console.log("no need to animate")
    //     imageContainer.src = obj.src;
    // }
    
    // imageContainer.style.opacity=0;
 
    
  }
});
