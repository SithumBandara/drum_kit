//find the button
var i = document.querySelectorAll('.drum').length;

for (var x = 0; x < i; x++) {
  document.querySelectorAll('.drum')[x].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    makeAnimatio(buttonInnerHTML);
  });
}
//find the key
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  makeAnimatio(event.key);
});
//sound play function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function makeAnimatio(currentKey) {
  var element = document.querySelector("." + currentKey);
  element.classList.add("pressed");

  setTimeout(function(){
    element.classList.remove("pressed");
  }, 100);
}
