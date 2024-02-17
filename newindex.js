
for (
  var nobutton =$(".drum").length, i = 0;
  i < nobutton;
  i++
)
 $(".drum")[i].addEventListener("click", function () {
    var e = this.innerHTML;
    makesound(e), buttonAnimation(e);
  });
function makesound(e) {
  switch (e) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log(buttonpress);
  }
}
function buttonAnimation(e) {
  console.log(e);
  var n = document.querySelector("." + e);
  n.classList.add("pressed");
  $("h1").addClass("h1add");
  setTimeout(function () {$(n).removeClass("pressed");$("h1").removeClass("h1add"); }, 100);
}
document.addEventListener("keydown", function (e) {
  makesound(event.key), buttonAnimation(event.key);
});
$(".drum").click(function(){$("p").css("color","pink");});
$("body").keydown(function(){$("h2").css("color","black");});
$("body").keydown(function(e){console.log(e.key);});

