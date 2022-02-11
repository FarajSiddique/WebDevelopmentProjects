function HandleClick() {
  alert("I got clicked");
}

var buttonArray = document.getElementsByClassName("drum");

for (i = 0; i < buttonArray.length; i++) {
  buttonArray[i].addEventListener("click", function() {
    var ButtonInnerHTML = this.innerHTML
    makeSound(ButtonInnerHTML);
    ButtonAnimation(ButtonInnerHTML);

  })
}

document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  ButtonAnimation(event.key);
})

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log();
  }
}


function ButtonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}