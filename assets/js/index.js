$(function() {
  $(".main-nav a").on("click", function() {
    var target = $(this).attr('href');
    var targetTopPosition = $(target).position().top;
    $("html,body").animate({scrollTop: targetTopPosition}, "1000");
    return false;
  });
});
