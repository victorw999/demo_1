//jqloader.js Load JQuery with broserify


// everything in this code will execute
// after the entire page is loaded
$(function(){

  // offset top-margins when nav is sticky
  var topoffset = 20;

  var isTouch = 'ontouchstart' in document.documentElement;

  /* WINDOW HEIGHT*/
  // get window height with JQuery, becasuse it's more reliable
  // jQuery has a function to get window height
  var wheight = $(window).height();

  //mod the element with .fullheight class's height
  $('.fullheight').css('height', wheight);

  // check when window resizes
  // look for the .fullheight class, re-mod the height
  $(window).resize(function(){
    var wheight = $(window).height();
    $('.fullheight').css('height',wheight);
  });// on resize


  /* ANIMATD SCROLLING */
  // smooth scroll copied frm css tricks
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
        &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - topoffset
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            };
          });
        }
      }
    });// finished coping from css tricks



  /* HIGHLIGHT Nav During Scroll */
  $(window).scroll(function(){
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');
    if(windowpos > $('#hotelinfo').offset().top){
      $('nav li a').removeClass('active');
      $('a[href$="#hotelinfo"]').addClass('active');
    } //
    if(windowpos > $('#rooms').offset().top){
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } // windowpos
    if(windowpos > $('#dining').offset().top){
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    } // windowpos
    if(windowpos > $('#events').offset().top){
      $('nav li a').removeClass('active');
      $('a[href$="#events"]').addClass('active');
    } // windowpos
  });//window scroll


  //set up "Scroll Magic"
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook:"onLeave"
    }
  });

  /* PIN NAVIGATION*/
  var pin = new ScrollScene({
    triggerElement:'#nav',
  }).setPin('#nav').addTo(controller);

// Check if this is a touch device
if (!isTouch) {

    /* ROOM ANIMATION*/
    var roomOrigin = {
      bottom: -700,
      opacity: 0,
      scale: 0
    }

    var roomDest = {
      repeat:1,
      yoyo:true,
      bottom:0,
      opacity:1,
      scale:1,
      ease: Back.easeOut
    }

    var roomtween = TweenMax.staggerFromTo(
      "#piccadilly .content",2, roomOrigin, roomDest);
    var pin= new ScrollScene({
        triggerElement: '#piccadilly',
        offset: -topoffset, duration:1000
      }).setPin("#piccadilly")
        .setTween(roomtween).addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
      "#cambridge .content",2, roomOrigin, roomDest);
    var pin= new ScrollScene({
        triggerElement: '#cambridge',
        offset: -topoffset, duration:500
      }).setPin("#cambridge")
        .setTween(roomtween).addTo(controller);

    var roomtween = TweenMax.staggerFromTo(
      "#westminster .content",2, roomOrigin, roomDest);
    var pin= new ScrollScene({
        triggerElement: '#westminster',
        offset: -topoffset, duration:500
      }).setPin("#westminster")
        .setTween(roomtween).addTo(controller);

} // not a touch device




  /* ATTRACTION ANIMATION */
  var attractionstween = TweenMax.
    staggerFromTo('#attractions article',1,
      {opacity:0, scale:0},
      {delay:1, opacity:1, scale:1, ease:Back.easeOut});

  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset-20
  }).setTween(attractionstween)
    .addTo(controller);

  // PRACTICE
  var controller2 = new ScrollMagic({
    globalSceneOptions: { triggerHook:"onLeave"}
  });



  // follow: http://scrollmagic.io/examples/basic/simple_tweening.html
  // unfortunately, ScrollMagic.Scene() doesn't work with current installed conversation

/*
  var scene_1 = new ScrollScene({
      triggerElement:"#trigger_1"
    }).setTween(
        "#animate_1",0.5,
        {bacground:"red", scale:2})
      .addTo(controller);

*/


// demo tween on index.html
var tween1 =
    TweenMax.staggerFromTo("#tween1 .content",
    1,
    {opacity:0, scale:0},
    {delay:1, opacity:1, scale:1, ease:Back.easeOut});

var tween2 =
    TweenMax.staggerFromTo("#tween2 .content",
    2,
    {opacity:0, x:300, ease:Back.easeIn},
    {delay:0.1, x:0, opacity:1, scale:1, ease:Back.easeOut});

var target3 = $("#tween3 .content");
var tween3 = new TimelineMax({delay:0.1,repeat:0});
tween3.set(target3, {autoAlpha:0, bottom:100});
tween3.to (target3, 3, {autoAlpha:1, top:100});



var scene1 = new ScrollScene({
  triggerElement:"#tween1",offset:-topoffset-100}).setTween(tween1).addTo(controller);
var scene2 = new ScrollScene({
  triggerElement:"#tween2",offset:-topoffset-100}).setTween(tween2).addTo(controller);
var scene3 = new ScrollScene({
  triggerElement:"#tween3",offset:-topoffset-100}).setTween(tween3).addTo(controller);

});// on load
