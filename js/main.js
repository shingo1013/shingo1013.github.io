$(function () {

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    let speed = 500;
    $("html, body").animate({
      scrollTop: position - 90
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
    header_sync();
    timelineAnime();
  });

});

$(window).on('load', function () {
  $('.leftAnime').addClass("slideAnimeLeftRight");
  $('.leftAnimeInner').addClass("slideAnimeRightLeft");
  header_sync();
});

function header_sync() {
  let scroll = $(window).scrollTop();
  let profile_pos = $('#profile').offset().top - 90;
  let career_pos = $('#career').offset().top - 90;
  let skill_pos = $('#skill').offset().top - 90;
  let works_pos = $('#works').offset().top - 90;
  let contact_pos = $('#contact').offset().top - $(window).height();
  let footer_pos = $('#footer').offset().top - $(window).height();
  let pageBottom = $(document).height() - $(window).height();
  if (scroll >= 0) {
    if (scroll < profile_pos) {
      $('a[href="#profile"]').removeClass('active');
      $('a[href="#"]').addClass('active');
    }
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
    if (scroll < footer_pos) {
      $('a[href="#skill"]').removeClass('active');
      $('a[href="#contact"]').removeClass('active');
      $('a[href="#works"]').addClass('active');
    }
  }
  if (scroll >= footer_pos) {
    $('a[href="#works"]').removeClass('active');
    $('a[href="#contact"]').addClass('active');
  }
}

function timelineAnime() {
  $('.timeline li').each(function () {
    let scroll = $(window).scrollTop();
    let elemPos = $(this).offset().top;
    let startPoint = 300;
    if (scroll >= elemPos - 1 / 2 * $(window).height()) {
      let H = $(this).height();
      let percent = (scroll + startPoint - elemPos) / (H) * 100;
      if (percent > 100) {
        percent = 100;
      }
      $(this).children('.border-line').css({
        height: percent + 30 + "%",
      });
    }
  });
}
