
var randomNumber1 = Math.round((Math.random() * 5))+1;
var randomNumber2 = Math.round((Math.random() * 5))+1;

var dice1 = document.querySelector(".dice .img1");
var dice2 = document.querySelector(".dice .img2");

var image1 = "images/dice" + randomNumber1 + ".png";
var image2 = "images/dice" + randomNumber2 + ".png";

dice1.setAttribute("src",image1);
dice2.setAttribute("src",image2);

var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
  heading.innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Wins!";
}
else{
  heading.innerHTML = "Draw!";
}
