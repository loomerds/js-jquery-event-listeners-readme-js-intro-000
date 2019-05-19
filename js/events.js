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
  $("form #typing").on("keydown", (e)=>{
    console.log(e);
    if(e.which===70) {
      alert("You pressed G!");
    }
  })
}
