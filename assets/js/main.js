(function(d){d.fn.shuffle=function(c){c=[];return this.each(function(){c.push(d(this).clone(true))}).each(function(a,b){d(b).replaceWith(c[a=Math.floor(Math.random()*c.length)]);c.splice(a,1)})};d.shuffle=function(a){return d(a).shuffle()}})(jQuery);

var delay = (function(){
  var timer = 0;
  return function(callback, ms){
    clearTimeout (timer);
    timer = setTimeout(callback, ms);
  };
})();


var menuopen = false;
var zoomedout = false;



var autoSizeText;
var autoSizeTextgod;


var colors = ['#FF0000', '#00FF00', '#FFFF00', '#00FFFF', '#0000FF', '#FF00FF'];
var currcolor = colors[Math.floor(Math.random() * colors.length)];
$(".godview").css("background-color", currcolor);

function flashingLights() {
            var nextcolor = colors[Math.floor(Math.random() * colors.length)];
            while (currcolor == nextcolor) {
                nextcolor = colors[Math.floor(Math.random() * colors.length)];
            }
            $(".godview").css("background-color", nextcolor);
            currcolor = nextcolor;
        }

var blinky;

        


autoSizeText = function() {
  var el, elements, _i, _len, _results;
  elements = $('.inner');
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 8) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;

};



autoSizeTextgod = function() {
  var el, elements, _i, _len, _results;
  elements = $('.micro-inner');
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeTextgod = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 3) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeTextgod());
      }
      return _results1;
    })(el));
  }
  return _results;

};

function shuffrrray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var randos = [];

$(".photo-slide:not(.homeslide)").each(function() {
    randos.push($(this).data('original'));
  });

shuffrrray(randos);

for (var i = 0; i < 22; i++) {
      $('.mobile-img-wrap').append("<img src='" + randos[i] + "' width='100%'>");
};



$(document).ready(function() {

  

    // $(".infobug").hover(function() {
    //     $(this).html($(this).data("infostring"));
    // }, function() {
    //     $(this).html("Info");
    // });

        $(".infobug").click(function() {
            $(".infobug").hide();
        $(".infoon").show();
    });

    $(".infoon").click(function() {
            $(".infobug").show();
        $(".infoon").hide();
    });

    
      $(".slide").css("opacity","1");

      // $(".imgloader").each(function() {
      //   //console.log($(this).data("highrez"));
      //   bgstring = "url(" + $(this).data("highrez") + ")";
      //   $(this).css("background-image", bgstring);
      //   $(this).css("-webkit-background-size", $(this).data("bgsize"));
      //   $(this).css("-moz-background-size", $(this).data("bgsize"));
      //   $(this).css("-ms-background-size", $(this).data("bgsize"));
      //   $(this).css("-o-background-size", $(this).data("bgsize"));
      //   $(this).css("background-size", $(this).data("bgsize"));

      // });

      $("rando").shuffle();


      var interactbgcolor = colors[Math.floor(Math.random() * colors.length)];







    $(".section").each(function() {


                    var nextbgcolor = colors[Math.floor(Math.random() * colors.length)];
            while (interactbgcolor == nextbgcolor) {
                nextbgcolor = colors[Math.floor(Math.random() * colors.length)];
            }
            $(this).find(".setcolor").css("background-color", nextbgcolor);

            var passedanchor = $(this).data('anchor');

            $(".micro-setcolor").each(function() {
                if ($(this).data("slideuid") == passedanchor) {
                    $(this).css("background-color", nextbgcolor);
                }
            });

            interactbgcolor = nextbgcolor;
    });



    $(".imgslideshow").each(function() {





        // var slideshowimgs = $(this).data("animimgs").split(', ');
        var currslideimg = 0;
        var passedslide = $(this);

        setInterval(function(){
            //console.log(passedslide.find($(".slideshow-stack")));
        //     if (currslideimg == slideshowimgs.length) {
        //         currslideimg= 0;
        //     }
        //     //console.log(slideshowimgs[currslideimg]);
        //    var bgstring = "url(" + slideshowimgs[currslideimg] + ")";
        // passedslide.css("background-image", bgstring);
        // passedslide.css("-webkit-background-size", $(this).data("bgsize"));
        // passedslide.css("-moz-background-size", $(this).data("bgsize"));
        // passedslide.css("-ms-background-size", $(this).data("bgsize"));
        // passedslide.css("-o-background-size", $(this).data("bgsize"));
        // passedslide.css("background-size", $(this).data("bgsize"));
passedslide.prepend(passedslide.find($(".slideshow-stack")).last());
        currslideimg++;
            
        }, 1000);

    });





});


var dundun=document.getElementById("dundun"); 
$(".dundunbtn").click(function(){
  dundun.play();
});

// $( window ).resize(function() {
//     //$(".slide").css("font-size","200px");
//     //
// });

$(window).resize(function() {
    delay(function(){
    $(".inner").css("font-size","200px");
      autoSizeText();
      //...
    }, 500);
});



$(".up").click(function () {
        if ($(".section.active").prev().hasClass('bigtext')) {
        $.fn.fullpage.moveTo($(".section.active").prev().prev().data("anchor"),$(".section.active").prev().prev().find('.active').index());

} else {
    $.fn.fullpage.moveSectionUp();
}
});


$(".down, .homeoverlay").click(function () {
    if ($(".section.active").next().hasClass('bigtext')) {
        $.fn.fullpage.moveTo($(".section.active").next().next().data("anchor"),$(".section.active").next().next().find('.active').index());
    } else {
        $.fn.fullpage.moveSectionDown();
    }
    

});


$(".slide").click(function() {
            if (zoomedout == true) {
        $("body").css("-webkit-transform","scale(1)");
        $("body").css("-webkit-transform-origin","10% 10%");
        $("html").css("overflow","visible");
        $("html").css("background-color","#eee");
        $("body").css("overflow","visible");
        $(".slides").css("overflow","visible");
        zoomedout = false;
    }
});

// $(".god").click(function () {
//         if (zoomedout == true) {
//         console.log("zoomedout true");
//         $("body").css("-webkit-transform","scale(1)");
//         $("body").css("-webkit-transform-origin","10% 10%");
//         $("html").css("overflow","visible");
//         $("html").css("background-color","#eee");
//         $("body").css("overflow","visible");
//         $(".slides").css("overflow","visible");
//         zoomedout = false;
//     } else {
//         //$(".photo-slide").css("background", "none");
//         $(".photo-slide").css("background-color", "white");
//         $("body").css("-webkit-transform","scale(.05)");
//     $("body").css("-webkit-transform-origin","10% 10%");
//     $("html").css("overflow","visible");
//     $("html").css("background-color","#eee");
//     $("body").css("overflow","visible");
//     $(".slides").css("overflow","visible");
//     zoomedout = true;
//     }
    
// });



$(".god").click(function () {

            $(".godview").show();
            $(".closer").show();
            $(".godview").css("z-index","400000");
             blinky = setInterval(flashingLights, 60);
             $(".godview").scrollTop(0);
             $(".godview").scrollLeft(0);


                $( ".micro-slide" ).each(function() {
        var randtime = Math.floor(Math.random() *1200) + 200;
        var slidey = $(this);

        setTimeout(function(){
            slidey.css("opacity",1);
            //console.log(randtime);
        }, randtime);

        setTimeout(function(){
            clearInterval(blinky);
        }, 1400);


  
});



            zoomedout = true;

    
});


$(".micro-target").click(function() {



    $.fn.fullpage.moveTo($(this).data("slideuid"),$(this).data("sequence"));
                 blinky = setInterval(flashingLights, 60);


    var toppos = "-" + ($("#mainmenu li").index($("[data-menuanchor='" + $(this).data("slideuid") + "']")) * 24) + "px";
    $("li").animate({
        top: toppos
    }, 400, "easeOutCubic", function () {
    
    });

    $(this).css("opacity",0);
    $( ".micro-slide" ).each(function() {
        var randtime = Math.floor(Math.random() *1200);
        var slidey = $(this);

        setTimeout(function(){
            slidey.css("opacity",0);
            //console.log(randtime);
        }, randtime);

        setTimeout(function(){
            $(".godview").hide();
            clearInterval(blinky);
        }, 1600);

});
    
    zoomedout = false;
});


$(".closer").click(function() {

                 blinky = setInterval(flashingLights, 60);


    $(this).hide();
    $( ".micro-slide" ).each(function() {
        var randtime = Math.floor(Math.random() *1200);
        var slidey = $(this);

        setTimeout(function(){
            slidey.css("opacity",0);
            //console.log(randtime);
        }, randtime);

        setTimeout(function(){
            $(".godview").hide();
            clearInterval(blinky);

        }, 1600);

});
    
    zoomedout = false;
});






$(".mask").hover(function () {
    $("nav").addClass("open");
    $(".mask").css("background-color", "rgba(255, 255, 255, 1)");
	var ulcount = ($("#mainmenu li").size() * 24 +20) + "px";
	$("#mainmenu, .mask").stop().animate({
        height: ulcount,
        top: 0
    }, 400, "easeOutCubic", function () {
        // Animation complete.
    });
	$("li").stop().animate({
		top: 0
	}, 400, "easeOutCubic", function () {
        // Animation complete.
    });

	menuopen = true;
    //$("#mainmenu li").show();
}, function () {
    $(".mask").css("background-color", "rgba(255, 255, 255, 0)");

    $(".mask").stop().animate({
    	height: "44px"
    }, 400, "easeOutCubic", function () {
        // Animation complete.
        $("nav").removeClass("open");
            //$(".mask").css("background-color", "transparent");

    });

    $("#mainmenu").stop().animate({
        height: "24px"
    }, 400, "easeOutCubic", function () {
        // Animation complete.
            //$(".mask").css("background-color", "transparent");

    });

		//console.log($("#mainmenu li").index($("#mainmenu .active")));
		var toppos = "-" + ($("#mainmenu li").index($("#mainmenu .active")) * 24) + "px";
    $("li").stop().animate({
    	top: toppos
    }, 400, "easeOutCubic", function () {
        // Animation complete.
    });

    menuopen = false;

});





$("#mainmenu a").click(function () {
    // $("#mainmenu li").removeClass("active");
    // $(this).addClass("active");
    // $("#mainmenu li").not(".active").hide();

    
    $(this).parent().addClass("active");
    //$(this).css("color", "black");

    //console.log($(this).parent().data('menuanchor'));
    //$("nav").css("pointer-events","none");

// go to proper section here


    var toppos = "-" + ($("#mainmenu li").index($(this).parent()) * 24) + "px";
    //console.log(toppos);
    $("li").animate({
        top: toppos
    }, 400, "easeOutCubic", function () {
    
    });

    $("#mainmenu").animate({
        height: "24px"
    }, 400, "easeOutCubic", function () {
        // Animation complete.
    });

    $(".mask").animate({
        height: "44px"
    }, 400, "easeOutCubic", function () {
        // Animation complete.
    });

   // menuopen = false;

});