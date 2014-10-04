$(function() {
  function adjustWindow(){

    // Setup variables
    $window = $(window);
    $slide = $('.homeSlide');
    isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Init Skrollr
    if( !isMobile ) {
      var s = skrollr.init({
        render: function(data) {

        //Debugging - Log the current scroll position.
        //console.log(data.curTop);
        }
      });
    }

    // Get window size
    winH = $window.height();

    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    }

    // Resize our slides
    $slide.height(winH);

    // Refresh Skrollr after resizing our sections
    if( !isMobile ) {
      s.refresh($('.homeSlide'));
    }

  }

  adjustWindow();

  $(".main-nav a").on("click", function() {
    target = $(this).attr('href');
    targetTopPosition = $(target).position().top;
    $("html,body").animate({scrollTop: targetTopPosition}, "1000");
    return false;
  });
});
