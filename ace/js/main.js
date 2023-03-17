var name = 0;

function popit(url,h,w,x,y) {
	var tempname = 'win' + name;
	var hwstring = 'height=' + h + ',width=' + w + ',screenX=' + x + ',screenY=' + y + '';
	newwindow=window.open(url,tempname,hwstring);
	name++;
}

$("h1").click(function() {
	
	popit("01.html",400,721,screen.width*.02,screen.height*.04);
	popit("02.html",400,715,screen.width*.2,screen.height*.6);
	popit("03.html",400,711,screen.width*.4,screen.height*.2);
	popit("04.html",400,537,screen.width*.04,screen.height*.84);
	popit("05.html",500,667,screen.width*.8,screen.height*.01);
	popit("06.html",500,679,screen.width*.7,screen.height*.7);

})