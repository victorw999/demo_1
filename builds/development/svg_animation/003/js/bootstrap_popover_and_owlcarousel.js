/* this script is for
  Bootstrap Popover & Owl Carousel

  REF: https://codepen.io/_danko/pen/wavmjG
*/

$(function(e) {
  e.preventDefault;

  // add carousel in Popovers
  $('path').popover({
    html: true,
    trigger: "hover click",
    placement: "right",
    container: ".detail_panel"
  });


  // this code is modified for owl-carousel
  // select all path elements that have a owlCarousel in its data-content

  $('path#RL1').on('shown.bs.popover', function() {

    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      autoplay: 1,
      autoplaySpeed:500, /* transition effect speed:*/
      autoplayTimeout: 3000, /*speed: how long it stays at one position default: 5000*/
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
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
