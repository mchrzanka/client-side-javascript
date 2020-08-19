window.addEventListener('load', function(e){
    const dataArray = []
    const displayList = document.querySelector('.array-items')
    const addButton = document.querySelector('button');
    const iconSrc = "img/icons/remove.svg"
   

    addButton.addEventListener('click', function(e){

        if(document.querySelector('input').value.trim() !== ""){
            const data = document.querySelector("input").value
            const newListItem = createListItem(data)
            displayList.appendChild(newListItem)
        }
    })

    function createListItem(data){
     dataArray.push(data);
     const newListItem = document.createElement('li');
     newListItem.classList.add("array-item");
     newListItem.textContent = data;
     const newIcon = document.createElement("img");
     newIcon.src = iconSrc;
     newIcon.classList = "remove-icon";
     newListItem.appendChild(newIcon)
     newListItem.dataset.index = dataArray.length -1;
     newIcon.addEventListener('click', removeItem)
     return newListItem
    }

    function removeItem(e){
        console.log(e.target.parentNode.dataset.index)
    }
})