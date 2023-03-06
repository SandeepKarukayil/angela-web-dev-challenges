//  to select random numbers for both dices
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// changing dice images according to random numbers
// dice1

randomDiceImage = "dice" + randomNumber1 + ".png"; //selecting a dice image

let randomDice1 = "images/" + randomDiceImage; //selecting dice image from image directory

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomDice1); //replacing source with random dice

// dice2
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let randomDice2 = "images/" + randomDiceImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩Player 1 won";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector(".container h1").innerHTML = " Player 2 won🚩";
} else {
  document.querySelector(".container h1").innerHTML = "DRAWW!!!";
}
