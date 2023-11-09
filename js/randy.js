
function guidString(){// ty to GottZ -> https://gist.github.com/6174/6062387
 var chars = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];// and then just do:
 return [...Array(10)].map(i=>chars[Math.random()*chars.length|0]).join``;
}


$("*").each(function(e){$(this).css('margin', Math.floor(Math.random() * Math.floor($(window).height())))});

Document.designMode = "on"
