$(function(e) {
  e.preventDefault;

  // tooltip for the button
  $('[data-toggle="tooltip"]').tooltip({
    placement: "top",
    trigger: "hover"
  });

  // popover for the third input in the first row
  $('.hover').popover({
    html: true,
    trigger: "hover click",
    placement: "bottom"
  });

  // popover for the last input in the first row
  $('.opened').popover({
    html: true,
    trigger: 'click',
    animate: false,
    placement: "bottom"
  }).popover('show');

  // initialize carousel in the first input / popover
  $('.input-carousel').popover({
    html: true,
    trigger: "click",
    placement: "bottom"
  });

  // initialize carousel in the lower input / popover (html is inside js)
  $('.input-carousel-2').popover({
    html: true,
    trigger: "click",
    placement: "right",
    content: "" +
      '<div id="myCarousel-2" class="carousel slide" data-interval="true"> ' +
      '<!-- Indicators -->' +
      '<div class="carousel-inner">' +
      '<div class="item active">' +
      '<blockquote>' +
      '<p>2th Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>' +
      '<small>Someone famous in <cite title="Source Title">Source Title</cite></small>' +
      '</blockquote>' +
      '</div>' +
      '<div class="item">' +
      '<blockquote>' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>' +
      '<small>Someone famous in <cite title="Source Title">Source Title</cite></small>' +
      '</blockquote>' +
      '</div>' +
      '<div class="item">' +
      '<blockquote>' +
      '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>' +
      '<small>Someone famous in <cite title="Source Title">Source Title</cite></small></blockquote>' +
      '</div>' +
      '</div>' +
      '<div class="carousel-controls">' +
      '<a class="carousel-control left" href="#myCarousel-2" data-slide="prev"><span class="fa fa-angle-double-left"></span></a>' +
      '<a class="carousel-control right" href="#myCarousel-2" data-slide="next"><span class="fa fa-angle-double-right"></span></a>' +
      '</div>' +
      '</div>' +
      '<!-- End Carousel -->'
  });

  // initialize carousel in the first input / popover
  $('.input-carousel, .opened').on('shown.bs.popover', function() {
    $('#myCarousel').carousel({
      interval: 3000
    });
  });

  // initialize carousel in the lower input / popover
  $('.input-carousel-2').on('shown.bs.popover', function() {
    $('#myCarousel-2').carousel({
      interval: 1000
    });
  });

  // close previously opened popovers by clicking outside them
  $(document).on('click', function(e) {
    $('input').each(function() {
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });

});
