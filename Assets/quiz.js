var quiz = {
    
    start: function() {

        // add question class to start function
        document.querySelector(".quiz-container").classList.add("question");

        // add startBtn class to start function
        document.querySelector(".quiz-container").classList.add("startBtn");

        // get the HTML quiz wrapper
        var wrapper = document.getElementById("quiz");

        // loop through all questions
        // create all necessary HTML elements
        quizQuestions.forEach(
            function(quest, index) {

            // the current question number
            var number = parseInt(index) + 1;
            //a section wrapper to hold the questions and options
            var qWrap = document.createElement("section");
            // CSS class
            qWrap.classList.add("question");

            // the questions and styting
            var question = document.createElement("h4");
            question.displaySetting = qWrap.style.display;
            if(index === 0){
                qWrap.style.display = "block";
            } 
            
            question.innerHTML = number + " " + quest['q'];
            qWrap.appendChild(question);

            // the answers
            quest['a'].forEach(function(answerText, aIndex) {
                // the label tag
                var label = document.createElement("label");
                qWrap.appendChild(label);

                // the answer tag
                var answer = document.createElement("input");
                answer.type = "button";
                answer.value = aIndex;
                answer.required = true;
                answer.classList.add("aquiz");
                answer.style.backgroundColor = "purple";

                answer.name = "quiz-" + number;
                label.appendChild(answer);

                // add answer text
                var aText = document.createTextNode(quizQuestions[index]['cA'][aIndex]);
                label.appendChild(aText);
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

    },

    // quiz.submit(): handle calculations when user submits quiz
    submit: function(event) {

        // stop from submitting
        event.preventDefault();
        event.stopPropagation();

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
    startBtn.className = "startBtn";

    // adds start button to quiz section
    var quizSec = document.getElementById("quiz");
        quizSec.appendChild(startBtn);

    // adds event handler
    startBtn.addEventListener("click", quiz.start);

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