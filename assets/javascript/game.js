// This worked at first...then didn't

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5;
}

// global variables

var words = ["squanchy", "unity", "bird person", "pickle rick", "shwifty", "council of ricks", "portal gun", "summer", "morty", "szechuan sauce", "wubalubadubdub", "jerry"];
var score = 0;
var letterList = [];
var answer = [];
var allowedguesses = 10;

// choose word at random
var randomWord = words[Math.floor(Math.random() * (words.length))];


// Every Letter symbolized with "_"
var answerArray = [];


// Filling in the number of underscores
function startup() {


for (var i=0; i<randomWord.length; i++) {
		answerArray[i]= "_";
}

// writing elements to the html
document.getElementById("word").innerHTML= answerArray.join(" ");
document.getElementById("guesses").innerHTML = allowedguesses; 

}


// Player guess

function updateGuess() {

		var letterGuessed = String(event.key).toLowerCase();
		document.getElementById("guesses").innerHTML = allowedguesses
		// determines if a letter key is pressed
		if (letterGuessed == "a" || letterGuessed == "b" || letterGuessed == "c" || letterGuessed == "d" || letterGuessed == "e" || letterGuessed == "f" || letterGuessed == "g" || letterGuessed == "h" || letterGuessed == "i" || letterGuessed == "j" || letterGuessed == "k" || letterGuessed == "l" || letterGuessed == "m" || letterGuessed == "n" || letterGuessed == "o" || letterGuessed == "p" || letterGuessed == "q" || letterGuessed == "r" || letterGuessed == "s" || letterGuessed == "t" || letterGuessed == "u" || letterGuessed == "v" || letterGuessed == "w" || letterGuessed == "x" || letterGuessed == "y" || letterGuessed == "z" ) {

			
				// If letter is not in the word, it updates the letters guessed
				if (randomWord.indexOf(letterGuessed) === -1) {
					allowedguesses--;
					letterList.push(letterGuessed);
					document.getElementById("lettersGuessed").innerHTML = letterList.join(", ");}

				// If the letter pressed matches a letter in the randomWord generator
				else {
					for (var i=0; i<randomWord.length; i++){
						if (randomWord[i] === letterGuessed) {
							answerArray[i] = letterGuessed;
							letterList.push(letterGuessed);
							document.getElementById("lettersGuessed").innerHTML = letterList.join(", ");
						}
					}

				document.getElementById("word").innerHTML = answerArray.join(" ");

				}

		}
	}


function winCheck(){

// if all the letters are guessed, an alert will pop up and add a point to your score
		if (answerArray.indexOf("_") === -1){
			document.getElementById("score").innerHTML = score + 1;
			alert("Congratz BROH, you got a point!");
			startup();
			}
// if max number of wrong guesses reached, you lose
		if (allowedguesses === 0){
			document.getElementById("word").innerHTML = randomWord;
			alert("You suck, NO POINTS FOR YOU!!!");
			startup();
			}
// if all the words are guessed then you win!
		if (score == 8) {
			alert("You are a master of Rick and Morty, NOW GET A LIFE!")
			}
}



document.onkeyup = function(event) {

// guess variable stores key pressed
		var letterGuessed = String(event.key).toLowerCase();
		updateGuess(letterGuessed);
		winCheck();

	};

startup();





