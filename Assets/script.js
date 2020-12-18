var quizContainer = document.getElementById("quiz");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

var quizQuestions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: {
            1: "strings",
            2: "booleans",
            3: "alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if/else statement is enclosed within ___.",
        answers: {
            1: "quotes",
            2: "curly brackets",
            3: "parentheses",
            4: "square brackets"
        },
        correctAnswer: "3"
    },
    {
        question: "Arrays in JavaScript can be used to store ___.",
        answers: {
            1: "numbers and strings",
            2: "other arrays",
            3: "booleans",
            4: "all of the above"
        },
        correctAnswer: "4"
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: {
            1: "commas",
            2: "curly brackets",
            3: "quotes",
            4: "parentheses"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "terminal/bash",
            3: "for loops",
            4: "console.log"
        },
        correctAnswer: "4"
    }
];

function startQuiz() {
    // stores output
    var output = [];

    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {

            // stores list of potential answers
            var answers = [];

            // for each possible answer...
            for(number in currentQuestion.answers)

            // adds button and allows selection of answers
            answers.push(
                `<label>
                    <input type="button" class="btn btn-primary btn-sm" name="question${questionNumber}" value="${number}">
                    </input>
                    ${number} :
                    ${currentQuestion.answers[number]}
                </label>`
            );

            // adds the question and its answers to the output
            output.push(
                `<section class="question"> ${currentQuestion.question} </section>`,
                `<section class="answers"> ${answers.join('')} </section>`
            );

    // combines output list into string and puts on page
    quizContainer.innerHTML = output.join('');
}
    );
}

startBtn.addEventListener("click", startQuiz);

function showResults() {
    // gets answer containers from the quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');

    // tracks user's answers
    var numCorrect = 0;

    // for each question...
    quizQuestions.forEach( (currentQuestion, questionNumber) => {
        
        // finds selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `button.click([name=question${questionNumber}])`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if answer is correct...
        if(userAnswer === currentQuestion.correctAnswer) {
            
            // adds to number of correct answers
            numCorrect++;

            // shows correct container
        }
        // if answer is incorrect or blank...
        else{
            // shows wrong or blank container
        }
    });

    // shows number of correct answers out of total answers
    resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
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

/*function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";
    
        if(secondsLeft === 0) {
          clearInterval(timerInterval);
          sendMessage();
        }
    
      }, 1000);
    }*/