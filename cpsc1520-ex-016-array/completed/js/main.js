/* 
      Aplication Scope
      string
      - startWith()
      -endsWtidh()
      -includes()
      -repeat()

      --array find
      --array filter
      --reduce
      -- 
*/
window.addEventListener("load", function (e) {
  const jobBoard = document.querySelector('.array-items')
  const query = document.querySelector('#search-string')
  const check = [...appData];

  configUI();

  console.log(query);
  query.addEventListener("input", function (e) {
     let matchJobs = []
    matchJobs = appData.filter((item, index) => {
      const userQuery = query.value;
      if (item.includes(userQuery)) {
        return  true;
      }else{
        return false;
      }
    })
  
   
      
  });
  function configUI() {
    appData.forEach((job => {
      const newJobItem = document.createElement('li');
      newJobItem.textContent = job;
      newJobItem.classList.add('array-item')
      jobBoard.appendChild(newJobItem)
    }))
  }


}) 