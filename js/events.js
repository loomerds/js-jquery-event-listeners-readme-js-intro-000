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

function frameIt() {
  $("img").on("load", (e)=>{
    $(this).addClass("tasty");
    $(".tasty").css('border-color', '#0000FF');
  })
}
