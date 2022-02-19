/*
	1.) Use setTimeout to create a timer for 60 seconds
	2.) Pass in Game over function to be called when timer runs out
	3.) Game over function shows alert saying "Game Over" when called
	4.) When the game is over, then I can save my initials and my score
*/

const highscoreSaveElement = document.getElementById("saveScoreBtn")
const highscoreRestartElement = document.getElementById("restartScoreBtn")
const enterInitialsElement = document.getElementById("username")
const finalScoreElement = document.getElementById("final-Score")
const scoreListElement = document.getElementById("scoreList")

const savedHighscoreList = JSON.parse(localStorage.getItem("highscoreList"))
let highscoreList = savedHighscoreList
if (!highscoreList) {
	highscoreList = []
}
const finalScore = sessionStorage.getItem("score")
console.log(finalScore)
finalScoreElement.innerText = finalScore
highscoreRestartElement.addEventListener('click', restartGame);
highscoreSaveElement.addEventListener('click', saveHighscore);

function restartGame() {
	// highscoreRestart.addEventListener('click', startQuiz);
	location.pathname =
		location.pathname.replace("/gamescores.html", "") + "/index.html";
}

//Create a function that assigns the score & initials inside of an array to local storage
function saveHighscore() {
	const initials = enterInitialsElement.value
	const highScore = {
		name: initials, score: finalScore
	}
highscoreList.push(highScore)
localStorage.setItem("highscoreList", JSON.stringify(highscoreList))
restartGame()
}

/*
Last TODO:
- Create an element
- Save the element to a variable by doing getElementById
- Save each highscore in the list inside of the highscore element's container
*/