$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
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
    if(e.which===71) {
      alert("You pressed G!");
    }
  })
}

function submitIt() {
  $("form").on("submit", ()=>{
    alert("Your form is going to be submitted now.");
  })
}
