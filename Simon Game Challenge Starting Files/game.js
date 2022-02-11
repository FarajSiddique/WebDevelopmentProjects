var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

function nextSequence(){
  userClickedPattern = [];
  level ++;
  $("h1").text("level " + level);
  var randomNumber = (Math.round(Math.random() * 3));
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

}

$(".btn").click(function() {
  var userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);

  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);

})

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(document).keydown(function(){
  if (!started){
    $("h1").text("Level " + level);
    nextSequence();
    started = true;

  };
})

function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();}
        , 1000);

    }
  }
  else{
    $("body").addClass("game-over")
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function() {
      $("body").removeClass("game-over")
    }, 200);


    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
