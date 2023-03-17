$(".overlay").click(function(){
  $(this).fadeOut(400);
}).children().click(function() {
  return false;
});