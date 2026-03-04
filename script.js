// JavaScript goes here

var guess;
const guessBtn = document.getElementById("guessBtn");

var attempts_left = 5;

var playGame = true;

const min = 1;
const max = 100;

const ans = Math.floor(Math.random()*(max-min+1)) + min;

function guessCheck() {

	if (attempts_left > 0 && playGame) {
	
		guess = Number(document.getElementById("guessInput").value);

		if (guess != ans) {
			attempts_left--;
			document.getElementById("noOfTries").innerHTML = attempts_left;

			if (attempts_left == 0) {
				document.getElementById("hintBox").innerHTML = "The number was <span class=\"specialText\">"+ans+"</span>. <span class=\"specialText\">Refresh</span> the page to play again.";

				playGame = false;
			}

			else {
			
				if (guess < ans) {
					document.getElementById("hintBox").innerHTML = "Go <span class=\"specialText\">HIGHER!</span>";
				}

				else if (guess > ans) {
					document.getElementById("hintBox").innerHTML = "Go <span class=\"specialText\">LOWER!</span>";
				}
			}
		}

		else {
			document.getElementById("hintBox").innerHTML = "The number was <span class=\"specialText\">"+ans+"</span>. <span class=\"specialText\">Refresh</span> the page to play again.";

			playGame = false;
		}		
	}	
}

guessBtn.onclick = guessCheck;
