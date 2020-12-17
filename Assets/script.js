var quizContainer = document.getElementById("quiz");
var startBtn = document.getElementById("start");
var submitBtn = document.getElementById("submit");

quizContainer.addEventListener("click", function(event) {
    if(event.target.matches("button")) {
        
    }
}
)

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
}