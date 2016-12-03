blinker();
setInterval(function(){
  blinker();
}, 1000);

function blinker(){
$("#cursor").text("|");
  setTimeout(function(){
    $("#cursor").html("&nbsp;");
  }, 500);
}
