$(document).ready(function() {

  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
      },
      1000,
      'easeOutCubic'
    )
  });

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

});
