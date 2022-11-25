$(function () {

  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");
    return false;
  });

  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('#navi').toggleClass('open');
  });

  $('#navi a').on('click', function(){
    $('.hamburger').toggleClass('open');
    $('#navi').toggleClass('open');
  });




});
