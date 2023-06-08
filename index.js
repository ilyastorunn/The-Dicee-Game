                    // RANDOMIZING FIRST DICE 
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1); // ilk parametre, değiştirmek istediğimiz özellğin adı, yani src. ikinci parametre ise, değiştirmek istediğimiz şeydir, yani img.

                    // RNADOMIZING SECOND DICE
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "dice" + randomNumber2 + ".png";

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

                    // CHANGING HEADING
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Oh, it's a deuce.";
} else {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}