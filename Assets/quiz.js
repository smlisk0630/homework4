var quiz = {
    
    start: function() {

        // add question class to start function
        document.querySelector(".quiz-container").classList.add("question");

        // get the HTML quiz wrapper
        var wrapper = document.getElementById("quiz");

        // loop through all questions
        // create all necessary HTML elements
        quizQuestions.forEach(
            function(quest, index) {

            // the current question number
            var number = parseInt(index) + 1;

            // creates a section wrapper to hold the questions and answers
            var qWrap = document.createElement("section");
            // applies question class to qWrap element
            qWrap.classList.add("question");

            // the questions and styting
            // creates an h4 element and stores it in question variable
            var question = document.createElement("h4");
            // displays the style of the qWrap element
            // and stores it in question.displaySetting
            question.displaySetting = qWrap.style.display;
            // if the item displayed is the first element in the index
            // set its display style to "block"
            if(index === 0){
                qWrap.style.display = "block";
            } 
            // change the HTML content of question to
            // the current question number + space + index q of quest parameter
            question.innerHTML = number + " " + quest['q'];
            // adds newly-created qWrap element to the DOM and appends question
            // as its last child element
            qWrap.appendChild(question);

            // the answers
            // loop through all answers in the quizQuestions function
            // (index a of quest parameter)
            quest['a'].forEach(function(answerText, aIndex) {
                // create an element called "label" and store it in the label variable
                var label = document.createElement("label");
                // add the label variable as a child of the qWrap element on the DOM
                qWrap.appendChild(label);

                // create an element called "input" and store it in the answer variable
                var answer = document.createElement("input");
                    // set the properties of the answer object
                    answer.type = "button";
                    answer.value = aIndex;
                    answer.required = true;
                    answer.classList.add("aquiz");
                    answer.style.backgroundColor = "purple";
                    answer.name = "quiz-" + number;
                    answer.text = quest['a'][aIndex];

                    // add answer as a child of the label element on the DOM
                    label.appendChild(answer);

                // add answer text
                var aText = document.createTextNode(answer.text);
                label.appendChild(aText);
                console.log(label);
            });

            // add question to main quiz wrapper
            wrapper.appendChild(qWrap);
        });
    },

    //go to previous question
    prev: function() {

        // get the HTML quiz wrapper
        var wrapper = document.getElementById("quiz");


    },

    // go to next question
    next: function() {

        // get the HTML quiz wrapper
        var wrapper = document.getElementById("quiz");
        // get the selected answer
        var selAnswer = document.querySelector("aIndex");
        // a section wrapper to hold the answers
        var aWrap = document.createElement("section");
        // add selected answer to section wrapper
        var aWrap = selAnswer;

        // add answer to section wrapper
        wrapper.appendChild(aWrap);

    },

    // quiz.submit(): handle calculations when user submits quiz
    submit: function(event) {

        // get all selected answers
        var selected = document.querySelectorAll(".aquiz:checked");

        // get score
        var score = 0;
        for (var index in quizQuestions) {
            if (selected[index].value == quizQuestions[index]['cA']) {
                score++;
            }
        }

        // calculate score
        var total = selected.length;

        // update and show score
        html += "<section>You scored " + score + " out of " + total + "</section>";
        document.getElementById("quiz-wrap").innerHTML = html;
        
    }
};

// add start button and event handler to quiz wrapper
var startBtn = document.createElement("button"); 
    startBtn.type = "button";
    startBtn.innerHTML = "Start Quiz";
    startBtn.className = "startQuiz";


    // adds start button to quiz section
    var quizSec = document.getElementById("quiz");
        quizSec.appendChild(startBtn);

    // adds event handler
    startBtn.addEventListener("click", quiz.start);
    document.querySelector(".startButton").appendChild(startBtn);

// add previous button and event handler to quiz wrapper
var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.innerHTML = "Go Back";
    prevBtn.className = "prevBtn";

    // adds previous button
    var quizSec2 = document.getElementById("quiz");
    quizSec2.appendChild(prevBtn);

    // adds event handler
    prevBtn.addEventListener("click", quiz.prev);

// add next button and event handler to quiz wrapper
var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.innerHTML = "Next";
    nextBtn.className = "nextBtn";

    // adds next button
    var quizSec3 = document.getElementById("quiz");
    quizSec3.appendChild(nextBtn);

    // adds event handler
    nextBtn.addEventListener("click", quiz.next);

// add submit button and event handler to quiz wrapper
var submitBtn = document.createElement("button");
    submitBtn.type = "button";
    submitBtn.innerHTML = "Submit";
    submitBtn.className = "submitBtn";
    
    var sbtBtn = document.getElementById("quiz");
    sbtBtn.appendChild(submitBtn);

    submitBtn.addEventListener("submit", quiz.submit);

var resultsContainer = document.getElementById('results');

var quizQuestions = [
    {
        // q: question; a: answers; cA: correct answer
        q: "Commonly used data types DO NOT include:",
        a: [
            "strings",
            "booleans",
            "alerts",
            "numbers"
        ],
        cA: 2
    },
    {
        q: "The condition in an if/else statement is enclosed within ___.",
        a: [
            "quotes",
            "curly brackets",
            "parentheses",
            "square brackets"
        ],
        cA: 2
    },
    {
        q: "Arrays in JavaScript can be used to store ___.",
        a: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        cA: 3
    },
    {
        q: "String values must be enclosed within ___ when being assigned to variables.",
        a: [
            "commas",
            "curly brackets",
            "quotes",
            "parentheses"
        ],
        cA: 2
    },
    {
        q: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: [
            "JavaScript",
            "terminal/bash",
            "for loops",
            "console.log"
        ],
        cA: 3
    }
];

// variables to keep track of quiz state
var time = quizQuestions.length * 15;
var timerId;
var aIndex = quizQuestions[a];

// variables to reference DOM elements
var timerEl = document.getElementById("time");