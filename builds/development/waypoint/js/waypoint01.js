$(document).ready(function() {

  $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
      animation: "animate-positive 2s",
      opacity: "1"
    });
  }, {
    offset: '75%'
  });

  $('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
  });

});
