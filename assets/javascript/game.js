
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
		alert("How did you know that? " + "You guessed what I was thinking! The letter " + randomLetter);
		guessesLeft = 10;
		guessesSoFar = [];
		randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);
	}
	if (guessesLeft == 0) {
		losses++;
		alert("HAHA! You cannot beat me!" + "The letter I was thinking of was " + randomLetter);
		guessesLeft = 10;
		guessesSoFar = [];
		randomLetter = alphabetLetters[Math.floor(Math.random() * alphabetLetters.length)];
		console.log("Wins: " + wins + " Losses: " + losses + " GuessesLeft: " + guessesLeft + " Guesses so far: " + guessesSoFar + " Computer picked: " + randomLetter);
	}
    var html = "<br><br><br><br><br><br><br><p><h1>Psychic Game</h1></p>" + "<p><h5>What letter I\'m thinking of</h5></p>" + 
    "<p><h5>Wins: " + wins + "</h5></p>" + "<p><h5>Losses: " + losses + "</h5></p>" + 
    "<p><h5>Guesses Left: " + guessesLeft + "</h5></p>" + 
    "<p><h5>Your guesses so far: " + guessesSoFar + "</h5></p>";
	document.querySelector("#game").innerHTML = html;
}