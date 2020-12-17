var quizContainer = document.getElementById("quiz");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1. "strings",
            2. "booleans",
            3. "alerts",
            4. "numbers"
        }
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: {
            1. "quotes",
            2. "curly brackets",
            3. "parentheses",
            4. "square brackets"
        }
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: {
            1. "numbers and strings",
            2. "other arrays",
            3. "booleans",
            4. "all of the above"
        }
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            1. "commas",
            2. "curly brackets",
            3. "quotes",
            4. "parentheses"
        }
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1. "JavaScript",
            2. "terminal/bash",
            3. "for loops",
            4. "console.log"
        }
        correctAnswer: "4"
    }
];

quizContainer.addEventListener("click", function(event) {
    if(event.target.matches("button")) {

    }
});

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
    
      }, 1000);
    }

function startQuiz() {
    
}

startBtn.addEventListener("click", startQuiz);

function showResults() {

}

submitBtn.addEventListener("click", showResults);

/* see all code in activity 25--one code block excerpted below
function renderToDos() {
    todoList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    for(var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute["data-index", i];

        var button = document.createElement("button");
        button.textContent = "Complete";

        li.appendChild(button);

        todoList.appendChild(li);
    }
}*/