/*
	1.) Use setTimeout to create a timer for 60 seconds
	2.) Pass in Game over function to be called when timer runs out
	3.) Game over function shows alert saying "Game Over" when called
	4.) When the game is over, then I can save my initials and my score
*/

let timer = 60
let intervalId
let score = 0


//HTML Ids from gamescores.html page

let highscoreSaveElement
let highscoreRestartElement
let enterInitialsElement
let finalScoreElement



function gameOver() {
	location.pathname =
		location.pathname.replace("/index.html", "") + "/gamescores.html";
		console.log(score)
	getGameScoreElements()
	finalScoreElement.innerText = score

}

function getGameScoreElements() {
	highscoreSaveElement = document.getElementById("saveScoreBtn")
	highscoreRestartElement = document.getElementById("restartScoreBtn")
	enterInitialsElement = document.getElementById("username")
	finalScoreElement = document.getElementById("final-Score")
}

//Write logic for when the user clicks the save button on gamescores.html their name and score appears on the page.
function saveDetails() {
	highscoreSave.addEventListener('click',);
}


//When user clicks restart button from gamescores.html, the game starts over from index.html page

function restartGame() {
	highscoreRestart.addEventListener('click', startQuiz);
	//then switch to the gamescores page
	location.pathname =
		location.pathname.replace("/gamescores.html", "") + "/index.html";

}
