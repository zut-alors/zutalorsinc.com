function km_initmousemove() {
  // disable for iOS devices
  // if (km_checkios()) {
  //   var container = $('#container');
  //   container.css({left: '200px'});
  //   return;
  // }
  

  var container = $('.godinside');
  $(document).unbind('mousemove');

  function km_reposition(e) {

      var viewport_width = $(window).width();
  var viewport_height = $(window).height();
  var container_width = $(".godinside").width();
  var container_height = $(".godinside").height();

    console.log(viewport_width);
    console.log(viewport_height);
    console.log(container_width);
    console.log(container_height);



    // center
    var centerX = viewport_width/2 - container_width/2;
    // deviation depending on mouse position
    var deviationX = (e.pageX / viewport_width - 0.5) * 2;

    if (deviationX < 0) {
      deviationX = Math.pow(Math.abs(deviationX)-1,2)-1;
    } else {
      deviationX = -Math.pow(Math.abs(deviationX)-1,2)+1;
    }

    if (viewport_width < container_width) {
      // add margin
      var plusX = deviationX * (Math.abs(viewport_width/2 - container_width/2) + 150);
    } else {
      var plusX = deviationX * Math.abs(viewport_width/2 - container_width/2);
    }
    
    container.css("left", centerX - plusX + 'px');
  
    // center
    var centerY = viewport_height/2 - container_height/2;
    // deviation depending on mouse position
    var deviationY = (e.pageY / viewport_height - 0.5) * 2;

    if (deviationY < 0) {
      deviationY = Math.pow(Math.abs(deviationY)-1,2)-1;
    } else {
      deviationY = -Math.pow(Math.abs(deviationY)-1,2)+1;
    }

    var plusY = deviationY * Math.abs(viewport_height/2 - container_height/2);
  
    if (viewport_height < container_height) {
      // add margin
      var plusY = deviationY * (Math.abs(viewport_height/2 - container_height/2) + 150);
    } else {
      var plusY = deviationY * Math.abs(viewport_height/2 - container_height/2);
    }

    container.css("top", centerY - plusY + 'px');
  }

  $(document).mousemove(km_reposition);

}