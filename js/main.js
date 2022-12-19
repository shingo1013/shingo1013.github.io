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

  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('#navi').toggleClass('open');
  });

  $('#navi a').on('click', function () {
    $('.hamburger').toggleClass('open');
    $('#navi').toggleClass('open');
  });

  $(window).on('scroll', function () {
    let scroll = $(window).scrollTop();
    let profile_pos = $('#profile').offset().top - $(window).height() / 2;
    let career_pos = $('#career').offset().top - $(window).height() / 2;
    let skill_pos = $('#skill').offset().top - $(window).height() / 2;
    let works_pos = $('#works').offset().top - $(window).height() / 2;
    let contact_pos = $('#contact').offset().top - $(window).height();
    if (scroll == 0) {
      $('a[href="#profile"]').removeClass('active');
      $('a[href="#"]').addClass('active');
    }
    if (scroll >= profile_pos) {
      if (scroll < career_pos) {
        $('a[href="#"]').removeClass('active');
        $('a[href="#career"]').removeClass('active');
        $('a[href="#profile"]').addClass('active');
      }
    }
    if (scroll >= career_pos) {
      if (scroll < skill_pos) {
        $('a[href="#profile"]').removeClass('active');
        $('a[href="#skill"]').removeClass('active');
        $('a[href="#career"]').addClass('active');
      }
    }
    if (scroll >= skill_pos) {
      if (scroll < works_pos) {
        $('a[href="#career"]').removeClass('active');
        $('a[href="#works"]').removeClass('active');
        $('a[href="#skill"]').addClass('active');
      }
    }
    if (scroll >= works_pos) {
      if (scroll < contact_pos) {
        $('a[href="#skill"]').removeClass('active');
        $('a[href="#contact"]').removeClass('active');
        $('a[href="#works"]').addClass('active');
      }
    }
    if (scroll >= contact_pos) {
      $('a[href="#works"]').removeClass('active');
      $('a[href="#contact"]').addClass('active');
    }
  });

});

$(window).on('load', function () {
  $('.leftAnime').addClass("slideAnimeLeftRight");
  $('.leftAnimeInner').addClass("slideAnimeRightLeft");
});