$(function () {
  /*------------------------------------
  ハンバーガーメニュー
  ---------------------------------------*/
  $('.hamburger').on('click', function () {
    hamburger();
  });
  $('#navi a').on('click', function () {
    hamburger();
  });
  /*-------------------------------------
  スムーススクロール
  --------------------------------------*/
  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 50;
    $("html, body").animate({ scrollTop: position }, 500, "swing");
    return false;
  });
  /*---------------------------------------
  スライドダウン
  -----------------------------------------*/
  $('#finland .btn').on('click', function () {
    if ($('#finland .detail').css('display') == 'none') {
      $('#finland .detail').slideDown();
      $('#finland .btn').html('閉じる');
    } else {
      $('#finland .detail').slideUp();
      $('#finland .btn').html('詳しく見る');
    }
  });
  $('#estonia .btn').on('click', function () {
    if ($('#estonia .detail').css('display') == 'none') {
      $('#estonia .detail').slideDown();
      $('#estonia .btn').html('閉じる');
    } else {
      $('#estonia .detail').slideUp();
      $('#estonia .btn').html('詳しく見る');
    }
  });
  /*-----------------------------------------
  スクロールイベント
  -------------------------------------------*/
  $(window).on('scroll', function () {

    let scroll = $(window).scrollTop() + $(window).height() / 2;

    if ($('#finland .detail').css('display') == 'block') {

      let finland_start = $('.forest h4').offset().top;
      let finland_end = $('#finland .detail .btn-area').offset().top + 70;
      let sushi_pos = $('.sushi').offset().top;
      let aalto_pos = $('.aalto').offset().top;

      if (finland_start < scroll) {
        slide('.forest .slide');
        if (scroll < finland_end) {
          $('.finland-circle').css({
            'display': 'block',
            'top': scroll - finland_start + 'px',
          });
        } else {
          $('.finland-circle').css({
            'display': 'none'
          });
        }
      } else {
        $('.finland-circle').css({
          'display': 'none'
        });
      }

      if (sushi_pos < scroll) {
        slide('.sushi .slide');
      }
      if (aalto_pos < scroll) {
        slide('.aalto .slide');
      }
    }

    if ($('#estonia .detail').css('display') == 'block') {

      let estonia_start = $('.to-estonia h4').offset().top;
      let estonia_end = $('#estonia .detail .btn-area').offset().top + 70;
      let city_pos = $('.city').offset().top;
      let iconic_pos = $('.iconic').offset().top;

      if (estonia_start < scroll) {
        slide('.to-estonia .slide');
        if (scroll < estonia_end) {
          $('.estonia-circle').css({
            'display': 'block',
            'top': scroll - estonia_start + 'px',
          });
        } else {
          $('.estonia-circle').css({
            'display': 'none'
          });
        }
      } else {
        $('.estonia-circle').css({
          'display': 'none'
        });
      }

      if (city_pos < scroll) {
        slide('.city .slide');
      }
      if (iconic_pos < scroll) {
        slide('.iconic .slide');
      }
    }

  });
  /*------------------------------------------
  inview
  ---------------------------------------------*/
  $('.inview').on('inview', function (event, isInView) {
    if (isInView) {
      $(this).addClass('show');
    }
  });
  /*----------------------------------------
  スライドショー
  -----------------------------------------*/
  $('.bg').slick({
    autoplay: true,
    fade: true,
    arrows: false
  });

  $('.bg-item').css({
    'height': $('.site-title img').height() + 'px'
  });

  $(window).on('load resize', function() {
    $('.bg-item').css({
      'height': $('.site-title img').height() + 'px'
    });
  });
  
});
/*------------------------------------
ハンバーガーメニュー（共通処理）
--------------------------------------*/
function hamburger() {
  $('#header').toggleClass('open');
}
/*------------------------------------
スライダー（共通処理）
--------------------------------------*/
function slide(selector) {
  $(selector).css({
    'transform': 'translateX(0)',
    'opacity': '1'
  });
}
