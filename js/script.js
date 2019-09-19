$(document).ready(function() {
  $('button.btn-bars').on('click', function(e) {
    if ($(".cross")[0]) {
      $(this).removeClass('cross');
      $('.sidebar-mobile').removeClass('open');
      $('.fa-bars').show();
      $('.fa-times').hide();

      $(".sidebar-mobile .side-menu").animate({
        left: '-100vw',
      });
    } else {
      $(this).addClass('cross');
      $('.sidebar-mobile').addClass('open');
      $('.fa-bars').hide();
      $('.fa-times').show();

      $(".sidebar-mobile .side-menu").animate({
        left: '0px'
      });
    }
  });

  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    if ($(this).attr('href') !== '#pages' && $(this).attr('href') !== '#home') {
      $('button.btn-bars').trigger('click');
    }

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'easeOutCubic'
    );
  });
/*
  var state = "";
  $('button.play').on('click', function() {
    if (state == "play") {
      state = "pause";
      $('#player').get(0).pause();
      $('button.play .on').show();
      $('button.play .off').hide();
    } else {
      state = "play";
      $('#player').get(0).play();
      $('button.play .on').hide();
      $('button.play .off').show();
    }
  });
  $('body').on('click', function() {
    if (state == "") {
      state = "play";
      $('#player').get(0).play();
    }
  });
  */
});
