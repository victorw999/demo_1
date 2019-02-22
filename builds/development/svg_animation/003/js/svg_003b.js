$(function(e) {
  e.preventDefault;

  // add carousel in Popovers
  $('path').popover({
    html: true,
    trigger: "hover click",
    placement: "right",
    container: ".detail_panel"
  });

  // initialize carousel in the first input / popover
  $('path').on('shown.bs.popover', function() {
    $('#myCarousel').carousel({
      interval: 2500
    });
  });


  // close previously opened popovers by clicking outside them
  // probably don't need this in bootstrap4
  $(document).on('click', function(e) {
    $('path').each(function() {
      if (!$(this).is(e.target) &&
          $(this).has(e.target).length === 0 &&
          $('.popover').has(e.target).length === 0)
      {
        $(this).popover('hide');
      }
    });
  });




});



// Swipe functions for Bootstrap Carousel
$( document ).ready(function() {
  $('.carousel').bcSwipe({ threshold: 50 });
});
