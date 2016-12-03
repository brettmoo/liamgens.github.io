function blinker(){$("#cursor").text("|"),setTimeout(function(){$("#cursor").html("&nbsp;")},500)}blinker(),setInterval(function(){blinker()},1e3);
