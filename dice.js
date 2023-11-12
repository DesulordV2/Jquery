var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

$("img.img1").attr("src", randomDiceImage1);
$("img.img2").attr("src", randomDiceImage2);

var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    $(".container h1").text("Player 1 Wins!");
}else if (randomNumber1 < randomNumber2) {
    $(".container h1").text("Player 2 Wins!");
} else{
  title.innerText ="Draw!"
}