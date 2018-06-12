$(function(){
  // TweenDmo.html

  var p = $( "p:last" );
  var offset = p.offset();
  p.html( "left: " + offset.left + ", top: " + offset.top );

  var controller = new ScrollMagic({
    globalSceneOptions: { triggerHook:"onLeave"}
  });

/*
  var topoffset = 20;
  var tween1 = TweenMax.staggerFromTo("#tweendemo #tween1 .content",1,
      {opacity:0, scale:0},
      {delay:1, opacity:1, scale:1, ease:Back.easeOut});

  var scene1 = new ScrollScene({
    triggerElement: "#tweendemo #tween1 #trigger1",
    offset: -topoffset-20
  }).setTween(tween1)
    .addTo(controller);
*/

});// on load
