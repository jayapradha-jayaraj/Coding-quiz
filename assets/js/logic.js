
console.log("start triggered");
var startBtnEventListener=document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesValue = document.getElementById("choices"); 
var questionClass= document.getElementById("questions");
var startscreen = document.getElementById("start-screen");
var endScreen =document.getElementById("end-screen");
var btnSubmit=document.getElementById("submit");
var time=document.getElementById("time");
var timerCount=60;
var setTime;

startQuiz();

function startQuiz(){
//to start the game after clicking the button
startBtnEventListener.addEventListener("click", function(){ 
    //1. add attribute
    startscreen.setAttribute("class", "hide");
    //2.Remove Attribute     //navigate to questions section
    questionClass.removeAttribute("class");
    //to start the timer
    startTimer();
    //call Score board Screen
    //endScreen.removeAttribute("class");

    });
}

function startTimer(){
    setTime=setInterval(function() {
        timerCount--;
        time.textContent = timerCount;
        if (timerCount === 0) {
            // Clears interval
            clearInterval(setTime);
        }
    },1000);
}

function submit(){
    btnSubmit.addEventListener("click", function(){
    window.location.href = '../../highscores.html';
    })
}