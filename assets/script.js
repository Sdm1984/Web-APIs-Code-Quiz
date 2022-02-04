//Javascript Code Quiz- Source: https://www.javatpoint.com/javascript-mcq

const beginButton = document.getElementById("begin-btn")
const nextButton = document.getElementById("next-btn")
const codeContainerElement = document.getElementById("code-container")
const questionElement = document.getElementById("question")
const responseButtonsElement = document.getElementById("response-buttons")

let mixQuestions, currentQuestion

// Selects element by id
var mainEl = document.getElementById("****");

var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeH.textContent = secondsLeft + " seconds left in the game.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}



nextButton.addEventListener('click', () => {
	if(currentQuestion===mixQuestions.length-1){
	}
	currentQuestion++
	showQuestion();

})

	

	function startQuiz() {
		beginButton.classList.add('hide')
		mixQuestions = questions.sort(() => Math.random() - .10)
		console.log(mixQuestions)
		currentQuestion = 0
		codeContainerElement.classList.remove('hide')
		showQuestion()
	}

	

	function showQuestion() {
		resetState()
		highlightQuestion(mixQuestions[currentQuestion])


	}
	

	function highlightQuestion(question) {
		questionElement.innerText ="Question: "+ question.question
		question.answers.forEach(answer => {
			const button = document.createElement('button')
			button.innerText = answer
			button.classList.add('button')
			if (answer.correct) {
				button.dataset.correct = answer.correct
			}
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
		const selectedButton = e.target
		const correct = selectedButton.dataset.correct
		setStatusClass(document.body, correct)
		Array.from(responseButtonsElement.children).forEach(button => {
			setStatusClass(button, button.dataset.correct)
		})
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


//WHEN I answer a question incorrectly THEN time is subtracted from the clock , come back to this on resubmit

questions = [
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


// WHEN all questions are answered or the timer reaches 0, THEN the game is over

// WHEN the game is over, THEN I can save my initials and my score

beginButton.addEventListener('click', startQuiz)
