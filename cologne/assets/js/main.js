$(".overlay").click(function(){
  $(this).fadeOut(400);
});

$(".post img").click(function(){
	$(".bigger").css("background-image", 'url("' + $(this).attr("src") + ' ")');
	
	$(".bigger").fadeIn(400);
});


$(".bigger").click(function(){
  $(this).fadeOut(400);
});




var autoSizeText;

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
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
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



$(document).ready(function() {
	autoSizeText();
	  $(".story").css("opacity","1");
	  	  $(".masky").hide();

});
$( window ).resize(function() {
	$(".inner").css("font-size","180px");
	autoSizeText();
});