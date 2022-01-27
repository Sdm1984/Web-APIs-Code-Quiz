//Javascript Code Quiz- Source: https://www.javatpoint.com/javascript-mcq

const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const responseButtonsElement = document.getElementById('response-buttons')


let mixQuestions, currentQuestionList

startButton.addEventListener('click', beginQuiz)
nextButton.addEventListener('click', () => {
	currentQuestionList++
	NextQuestion()
});


function beginQuiz() {
	startButton.classList.add('hide')
	mixQuestions = questions.sort(() => Math.random() - .5)
	currentQuestionList = 0
	questionContainerElement.classList.remove('hide')
	NextQuestion()

}

function NextQuestion() {
	resetState()
	seeQuestion(mixQuestions[currentQuestionList])

}

function seeQuestion(question) {
	questionElement.innerText = question.question
	question.answers.forEach(answer => {
		const button = document.createElement('button')
		button.innerText = answer.text
		button.classList.add('button')
		if (answer.correct) {
			button.dataset.correct = answer.correct
		}
		button / addEventListener('click', chooseAnswer)
		responseButtonsElement.appendChild(button)
	})
}

function resetState() {
	nextButton.classList.add('hide')
	while (responseButtonsElement.firstChild) {
		responseButtonsElement.removeChild
			(responseButtonsElement.firstChild)

	}
}

function chooseAnswer(e) {
	const selectedButton = e.target
	const correct = selectedButton.dataset.correct
	setStatusClass(document.body, correct)
	Array.from(responseButtonsElement.children).forEach(button => {
		setStatusClass(button, button.dataset.correct)
	})
	if (mixQuestions.length > currentQuestionList + 1) {
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

const questions = [
	{
		question: "A collection of elements of the same data type which may either in order or not, is called a _____.",
		answers: [
			{ text: "Array", correct: true },
			{ text: "String", correct: false },
			{ text: "Serialized Object", correct: false },
			{ text: "Object", correct: false }
		]
	},

	{
		question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not?",
		answers: [
			{ text: "=", correct: false },
			{ text: "===", correct: false },
			{ text: "==", correct: true },
			{ text: "&&", correct: false }
		]
	},

	{
		question: "Which type of JavaScript language is ___",
		answers: [
			{ text: "Object-Oriented", correct: false },
			{ text: "Object-Based", correct: true },
			{ text: "Assembly-language", correct: false },
			{ text: "High-level", correct: false }
		]
	},

	{
		question: "Which one of the following is also known as Conditional Expression:",
		answers: [
			{ text: "Alternative to if-else", correct: false },
			{ text: "Switch statement", correct: false },
			{ text: "If-then-else statement", correct: false },
			{ text: "immediate if", correct: true }
		]
	},

	{
		question: "In JavaScript, what is a block of statement?",
		answers: [
			{ text: "Conditional block", correct: false },
			{ text: "block that combines a number of statements into a single compound statement", correct: true },
			{ text: "both conditional bloack and a single statement", correct: false },
			{ text: "block that contains a single statement", correct: false }
		]
	},

	{
		question: "In the JavaScript, which one of the following is not considered as an error:",
		answers: [
			{ text: "Syntax error", correct: false },
			{ text: "Missing of semicolons", correct: false },
			{ text: "Division by zero", correct: true },
			{ text: "Missing of bracket", correct: false }

		]
	},

	{
		question: "In JavaScript, what will be used for calling the function definition expression:",
		answers: [
			{ text: "Function prototype", correct: false },
			{ text: "Function literal", correct: true },
			{ text: "Function calling", correct: false },
			{ text: "Function declaration", correct: false }
		]
	},

	{
		question: "Which one of the following is not considered a statement in the JavaScript?",
		answers: [
			{ text: "use strict", correct: true },
			{ text: "debugger", correct: false },
			{ text: "if", correct: false },
			{ text: "with", correct: false }

		]
	},

	{
		question: "A set of unordered properties that, has a name and value is called______",
		answers: [
			{ text: "String", correct: false },
			{ text: "Array", correct: false },
			{ text: "Serialized Object", correct: false },
			{ text: "Object", correct: true }

		]
	},

	{
		question: "The linkage of a set of prototype objects is known as____",
		answers: [
			{ text: "prototype stack", correct: false },
			{ text: "prototype", correct: false },
			{ text: "prototype class", correct: false },
			{ text: "prototype chain", correct: true }
		]
	}
]


//WHEN I answer a question incorrectly THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0, THEN the game is over

//WHEN the game is over, THEN I can save my initials and my score