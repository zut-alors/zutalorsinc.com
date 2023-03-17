var colors = ['#FFFF00', '#FF0000', '#00FF00', '#0000FF', '#00FFFF', '#FF00FF'];
var currcolor = colors[Math.floor(Math.random() * colors.length)];
$("body").css("background-color", currcolor);

$(function(){
    setInterval(flashingLights, 56);
});

$(function(){
    setInterval(setClock, 1000);
});

function flashingLights() {
	var nextcolor = colors[Math.floor(Math.random() * colors.length)];
	while (currcolor == nextcolor) {
	    nextcolor = colors[Math.floor(Math.random() * colors.length)];
	}
	$("body").css("background-color", nextcolor);
	currcolor = nextcolor;
}

function setClock() {
    $(".clock").html(countdown( new Date(2014,07,06,19,0,0,0) ).toString());
}

setClock();

document.body.addEventListener('touchmove',function(e){
	e.preventDefault();
});