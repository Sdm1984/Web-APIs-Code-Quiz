//Javascript Code Quiz- Source: https://www.javatpoint.com/javascript-mcq

const beginButton = document.getElementById("begin-btn")
const nextButton = document.getElementById("next-btn")
const codeContainerElement = document.getElementById("code-container")
const questionElement = document.getElementById("question")
const responseButtonsElement = document.getElementById("response-buttons")







const questions = [
	{
		question: "A collection of elements of the same data type which may either in order or not, is called a _____.",
		answers: ["Array", "String", "Serialized Object", "Object"],
		answer: "Array"
	},

	{
		question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not?",
		answers: ["=", "===", "==", "&&",],
		answer: "=="
	},

	{
		question: "Which type of JavaScript language is ___",
		answers: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level",],
		answer: "Object-Based"
	},

	{
		question: "Which one of the following is also known as Conditional Expression:",
		answers: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if",],
		answer: "immediate if"
	},

	{
		question: "In JavaScript, what is a block of statement?",
		answers: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional bloack and a single statement", "block that contains a single statement",],
		answer: "block that combines a number of statements into a single compound statement"
	},

	{
		question: "In the JavaScript, which one of the following is not considered as an error:",
		answers: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of bracket",],
		answer: "Division by zero"
	},


	{
		question: "In JavaScript, what will be used for calling the function definition expression:",
		answers: ["Function prototype", "Function literal", "Function calling", "Function declaration",],
		answer: "Function literal"
	},


	{
		question: "Which one of the following is not considered a statement in the JavaScript?",
		answers: ["use strict", "debugger", "if", "with",],
		answer: "use strict"

	},

	{
		question: "A set of unordered properties that, has a name and value is called______",
		answers: ["String", "Array", "Serialized Object", "Object",],
		answer: "Object"
	},


	{
		question: "The linkage of a set of prototype objects is known as____",
		answers: ["prototype stack", "prototype", "prototype class", "prototype chain",],
		answer: "prototype chain"
	},

]


// WHEN the game is over, THEN I can save my initials and my score

	/*
		1.) Use setTimeout to creat a timer for 30 seconds
		2.) Pass in Game over function to be called when timer runs out
		3.) Game over function shows alert saying "Game Over" when called

	*/

let timer;

function gameOver(){
	 timer = setTimeout(alertFunc, 30000);
	}
	
	function alertFunc() {
	  alert("Game Over!");
	}

gameOver();




const mixQuestions = questions.sort(() => Math.random() - .10)
let currentQuestion = 0


nextButton.addEventListener('click', () => {
	if (currentQuestion === mixQuestions.length - 1) {
	}
	currentQuestion++
	showQuestion();

})



function startQuiz() {
	beginButton.classList.add('hide')
	currentQuestion = 0
	codeContainerElement.classList.remove('hide')
	showQuestion()
}



function showQuestion() {
	resetState()
	highlightQuestion(mixQuestions[currentQuestion])


}


function highlightQuestion(question) {
	questionElement.innerText = "Question: " + question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer
		button.classList.add('button')
		button.addEventListener('click', chooseAnswer)
		responseButtonsElement.appendChild(button)
	})

}


function resetState() {
	clearStatusClass(document.body)
	nextButton.classList.add('hide')
	while (responseButtonsElement.firstChild) {
		responseButtonsElement.removeChild
			(responseButtonsElement.firstChild)
	}

}


function chooseAnswer(e) {
	const correctAnswer = mixQuestions[currentQuestion].answer
	console.log(correctAnswer)
	const selectedButton = e.target.innerText
	console.log(selectedButton)
	if (selectedButton === correctAnswer) {
		console.log("correctAnswer")
		setStatusClass(responseButtonsElement, true)
	} else {
		//WHEN I answer a question incorrectly THEN time is subtracted from the clock

		console.log("wrongAnswer")
		setStatusClass(responseButtonsElement, false)
	}

	if (mixQuestions.length > currentQuestion + 1) {
		nextButton.classList.remove('hide')
	} else {
		startButton.innerText = 'Restart'
		startButton.classList.remove('hide')
	}

}

function setStatusClass(element, correct) {
	clearStatusClass(element)
	if (correct) {
		element.classList.add('correct')
	} else {
		element.classList.add('wrong')

	}
}

function clearStatusClass(element) {
	element.classList.remove('correct')
	element.classList.remove('wrong')

}


beginButton.addEventListener('click', startQuiz);

