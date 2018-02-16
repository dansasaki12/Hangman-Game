
// Alphabet
var alphabetLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// wins
var wins = 0;
// losses
var losses = 0;
// number of guesses left
var guessesLeft = 10;
// what you have guessed
var guessesSoFar = [];
// users input
var userInput = null;
// random letter
var randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);

document.onkeypress = function(event) {

	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	if (guessesSoFar.indexOf(userInput) < 0 && alphabetLetters.indexOf(userInput) >= 0) {
		guessesSoFar[guessesSoFar.length]=userInput;
		guessesLeft--;
	}
	if (randomLetter == userInput) {
		wins++;
		alert("You won! " + "The computer picked: " + randomLetter);
		guessesLeft = 9;
		guessesSoFar = [];
		randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);
	}
	if (guessesLeft == 0) {
		losses++;
		alert("You lost! " + "The computer picked: " + randomLetter);
		guessesLeft = 9;
		guessesSoFar = [];
		randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);
	}
    var html = "<br><br><br><br><p><h1>Psychic Game</h1></p>" + "<p><h4>What letter I\'m thinking of</h4></p>" + 
    "<p><h4>Wins: " + wins + "</h4></p>" + "<p><h4>Losses: " + losses + "</h4></p>" + 
    "<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" + 
    "<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";
	document.querySelector("#game").innerHTML = html;
}