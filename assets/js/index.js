$(function() {
  $(".main-nav a").on("click", function() {
    target = $(this).attr('href');
    targetTopPosition = $(target).position().top;
    $("html,body").animate({scrollTop: targetTopPosition}, "1000");
    return false;
  });
});
