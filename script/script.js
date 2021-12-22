function refresh() {
    window.location.reload();
}

var randomNumber1 = Math.floor(Math.random(1, 6) * 6) + 1;
var randomDice1 = "assets/" + "Dice" + randomNumber1 + ".png";

document.getElementById("firstdice").setAttribute("src", randomDice1);

var randomNumber2 = Math.floor(Math.random(1, 6) * 6) + 1;
var randomDice2 = "assets/" + "Dice" + randomNumber2 + ".png";

document.getElementById("seconddice").setAttribute("src", randomDice2);

var playeronename = prompt("What is your name?");
var playertwoname = prompt("How about your oponnent's name?");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = playeronename + " Has Won The Match!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = playertwoname + " Has Won The Match";
} else {
    document.querySelector("h2").innerHTML = "It's a Draw. Try Spinning Again!"
}