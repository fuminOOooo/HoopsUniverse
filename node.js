function myFunction() {
    // var drop = document.getElementById("drop");
    // console.log(drop);
    document.getElementById("drop").classList.toggle("show"); 
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.classlu')) {
      var dropdowns = document.getElementsByClassName("test");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // $(document).ready(function(){
  // $(".classlu").click(()=>{
  //   $("#drop").fadeToggle(200);
  // })
  // })