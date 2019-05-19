//define functions here

$(document).ready(function(){
  getIt();
// call functions here

});

function getIt() {
  $("p").on("click", (e)=>{
    alert("Hey!");
  })
}
