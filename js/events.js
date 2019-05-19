//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
// call functions here

});

function getIt() {
  $("p").on("click", (e)=>{
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", ()=>{
    $("img").addClass("tasty");
    $(".tasty").css('border-color', '#0000FF');
  })
}

function pressIt() {
  $("form[input]").on("keydown", (e)=>{
    if(e.key==="G") {
      alert("You pressed G!");
    }
  })
}
