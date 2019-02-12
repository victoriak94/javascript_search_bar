
document.addEventListener('DOMContentLoaded', function(e) {
  let filterInput = document.querySelector("#filterInput");
  filterInput.addEventListener("keyup", filterNames);
 
  function filterNames(){
    let filterValue = document.querySelector("#filterInput").value.toUpperCase();
    let ul = document.querySelector("#names");
    let li = ul.querySelectorAll("li.name-item");
 
    for(let i = 0; i < li.length; i++){
      let a = li[i].getElementsByTagName('a')[0];
      if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
 
  }
});