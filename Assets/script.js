(function() {
    // functions
    function startQuiz() {
        // stores output
        var output = [];
    
        // for each question...
        quizQuestions.forEach(
            (currentQuestion, questionNumber) => {
    
                // stores list of potential answers
                var answers = [];
    
                // for each possible answer...
                for(number in currentQuestion.answers){
    
                // adds button and allows selection of answers
                answers.push(
                    `<label>
                        <input type="button" class="btn btn-primary btn-sm" name="question + document.querySelector('#questionNumber')" value="document.querySelector('#currentQuestion.answers[number]}')">
                        </input>
                    </label>`
                );
            }

                // adds the question and its answers to the output
                output.push(
                    `<section class="slide">
                    <section class="question"> document.querySelector('currentQuestion.question') </section>
                    <section class="answers"> document.querySelector('answers.join(' ')') </section>
                    </section>`
                    );
                }
            );
            // combines output list into string and puts on page
            quizContainer.innerHTML = output.join('');
        }

        function showResults() {
            // gets answer containers from the quiz
            var answerContainers = quizContainer.querySelectorAll('.answers');
        
            // tracks all of user's answers
            var answerCounter = 0;

            // tracks user's correct answers
            var numCorrect = 0;
        
            // for each question...
            quizQuestions.forEach( (currentQuestion, questionNumber) => {
                
                // finds selected answer
                var answerContainer = answerContainers[questionNumber];
                var selector = `input[name=question${questionNumber}]:checked`;
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

        // variables
        var quizContainer = document.getElementById("quiz");
        var startBtn = document.getElementById("start");
        var submitBtn = document.getElementById("submit");
        var resultsContainer = document.getElementById('results');

        var quizQuestions = [
            {
                question: "Commonly used data types DO NOT include:",
                answers: [
                    "strings",
                    "booleans",
                    "alerts",
                    "numbers"
                ],
                correctAnswer: 2
            },
            {
                question: "The condition in an if/else statement is enclosed within ___.",
                answers: [
                    "quotes",
                    "curly brackets",
                    "parentheses",
                    "square brackets"
                ],
                correctAnswer: 2
            },
            {
                question: "Arrays in JavaScript can be used to store ___.",
                answers: [
                    "numbers and strings",
                    "other arrays",
                    "booleans",
                    "all of the above"
                ],
                correctAnswer: 3
            },
            {
                question: "String values must be enclosed within ___ when being assigned to variables.",
                answers: [
                    "commas",
                    "curly brackets",
                    "quotes",
                    "parentheses"
                ],
                correctAnswer: 2
            },
            {
                question: "A very useful tool used during development and debugging for printing content to the debugger is:",
                answers: [
                    "JavaScript",
                    "terminal/bash",
                    "for loops",
                    "console.log"
                ],
                correctAnswer: 3
            }
        ];

        // start quiz by clicking start button
        startQuiz();

        // pagination
        var previousBtn = document.getElementById("goBack");
        var nextBtn = document.getElementById("next");
        var slides = document.querySelectorAll(".slide");
        var currentSlide = 0;

        // show first slide
        showSlide(currentSlide);

        // event listeners
        startBtn.addEventListener("click", startQuiz);
        previousBtn.addEventListener("click", showPreviousSlide);
        nextBtn.addEventListener("click", showNextSlide);
        submitBtn.addEventListener("click", showResults);

})();

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

/* to review forEach method, see code in 05-third-party-apis, 02-JSDrinkList */

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