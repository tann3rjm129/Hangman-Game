// This worked at first...then didn't

function setHalfVolume() {
    var myAudio = document.getElementById("audio1");  
    myAudio.volume = 0.5;
}

// global variables

var words = ["squanchy", "unity", "birdperson", "picklerick", "shwifty", "councilofricks", "portalgun", "summer", "morty", "szechuansauce", "wubalubadubdub", "jerry"];
var score = 0;
var letterList = [];
var answer = [];
var allowedguesses = 10;
var randomWord = words[Math.floor(Math.random() * (words.length))];

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




function winCheck(){

// if all the letters are guessed, an alert will pop up and add a point to your score
		if (answerArray.indexOf("_") === -1){
			document.getElementById("score").innerHTML = 1 + score++;
			document.getElementById("lettersGuessed").innerHTML = "";
			letterList = [];
			allowedguesses = 10;
			alert("Congratz BROH, you got a point!");
			}
// if max number of wrong guesses reached, you lose
		if (allowedguesses === 0){
			document.getElementById("word").innerHTML = randomWord;
			document.getElementById("lettersGuessed").innerHTML = "";
			letterList = [];
			allowedguesses = 10;
			alert("You suck, NO POINTS FOR YOU!!!");
			}
// if all the words are guessed then you win!
		if (score == 12) {
			alert("You are a master of Rick and Morty, NOW GET A LIFE!")
			}
}



document.onkeyup = function(event) {

// guess variable stores key pressed
		var letterGuessed = String(event.key).toLowerCase();
			function updateGuess() {

					document.getElementById("guesses").innerHTML = allowedguesses
					// determines if a letter key is pressed
					if (letterGuessed == "a" || letterGuessed == "b" || letterGuessed == "c" || letterGuessed == "d" || letterGuessed == "e" || letterGuessed == "f" || letterGuessed == "g" || letterGuessed == "h" || letterGuessed == "i" || letterGuessed == "j" || letterGuessed == "k" || letterGuessed == "l" || letterGuessed == "m" || letterGuessed == "n" || letterGuessed == "o" || letterGuessed == "p" || letterGuessed == "q" || letterGuessed == "r" || letterGuessed == "s" || letterGuessed == "t" || letterGuessed == "u" || letterGuessed == "v" || letterGuessed == "w" || letterGuessed == "x" || letterGuessed == "y" || letterGuessed == "z" )
					{

						
							// If letter is not in the word, it updates the letters guessed
							if (randomWord.indexOf(letterGuessed) === -1) {
								allowedguesses = allowedguesses - 1;
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
		updateGuess (letterGuessed);
		winCheck();

	};

startup();




