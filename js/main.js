$(function () {

  $('.hamburger').on('click', function(){
    $(this).toggleClass('open');
    $('#navi').toggleClass('open');
  });

  $('#navi a').on('click', function(){
    $('.hamburger').toggleClass('open');
    $('#navi').toggleClass('open');
  });




});
