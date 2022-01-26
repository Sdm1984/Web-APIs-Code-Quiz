//Javascript Code Quiz- Source: https://www.javatpoint.com/javascript-mcq

var secondsLeft = 60
function startTimer () {
var timer = setInterval(function (){
secondsLeft--;
console.log(secondsLeft)
},1000) 

}   

//WHEN I click the start button
var startButton = document.querySelector(".start-button")
startButton.addEventListener("click",function() {
startTimer ()   
})


//THEN a timer starts and I am presented with a question and WHEN I answer a question, THEN I am presented with another question
var quizQuestions = [
{ question: "A collection of elements of the same data type which may either in order or not, is called _____.",
choiceA:"String",
choiceB:"Array",
choiceC:"Serialized Object",
choiceD:"Object",
correct:"B"
},

{ question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not?",
choiceA:"=",
choiceB:"===",
choiceC:"==",
choiceD:"&&",
correct:"C"
},

{ question: "Which type of JavaScript language is ___",
choiceA:"Object-Oriented",
choiceB:"Object-Based",
choiceC:"Assembly-language",
choiceD:"High-level",
correct:"B"
},

{question:"Which one of the following also known as Conditional Expression:",
choiceA:"Alternative to if-else",
choiceB:"Switch statement",
choiceC:"If-then-else statement",
choiceD:"immediate if",
correct:"D"
},

{question:"In JavaScript, what is a block of statement?",
choiceA:"Conditional block",
choiceB:"block that combines a number of statements into a single compound statement",
choiceC:"both conditional bloack and a single statement",
choiceD:"block that contains a single statement",
correct:"B"
},

{question:"In the JavaScript, which one of the following is not considered as an error:",
choiceA:"Syntax error",
choiceB:"Missing of semicolons",
choiceC:"Division by zero",
choiceD:"Missing of bracket",
correct:"C"
},

{question:"In JavaScript, what will be used for calling the function definition expression:",
choiceA:"Function prototype",
choiceB:"Function literal",
choiceC:"Function calling",
choiceD:"Function declaration",
correct:"B"
},

{question:"Which one of the following is not considered as statement in the JavaScript?",
choiceA:"use strict",
choiceB:"debugger",
choiceC:"if",
choiceD:"with",
correct:"A"
},

{question:"A set of unordered properties that, has a name and value is called______",
choiceA:"String",
choiceB:"Array",
choiceC:"Serialized Object",
choiceD:"Object",
correct:"D"
},

{question:"The linkage of a set of prototype objects is known as____",
choiceA:"prototype stack",
choiceB:"prototype",
choiceC:"prototype class",
choiceD:"prototype chain",
correct:"D"
}
]


//WHEN I answer a question incorrectly THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0, THEN the game is over

//WHEN the game is over, THEN I can save my initials and my score