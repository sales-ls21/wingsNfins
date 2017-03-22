/*
a Pen by DIACO : http://codepen.io/MAW
powered by GSAP : http://www.greensock.com/
*/
$("#logoarea").hide();

var tl = new TimelineMax({paused:true, onComplete:remove})  
tl.to("#d2",1.5,{x:-500,ease:Sine.easeInOut})
  .to("#d1",1.5,{x:500,ease:Sine.easeInOut},0)
  .to(".clicker",0.5,{autoAlpha:0},0)
  .set("#gate",{pointerEvents:'none'},1)
  
$(".clicker").click(function(){ 
  tl.play();
});
   
function remove(){
  $(".svg-container").empty();
  $("#logoarea").show();
}
