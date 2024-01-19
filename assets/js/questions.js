

var questions = [
    {
        title:"Commonly used data types"+ '<span>DO NOT </span>'+" Include:",
        choices:["1.commas", "2.boolean", "3.alerts", "4.numbers"],
        answer:"1.commas", 
    },
    {
        title:"The condition in an if / else statement is enclosed with_____________",
        choices:["1.quotes", "2.curly brackets", "3.paranthesis", "4.square brackets"],
        answer:"2.curly brackets", 
    },
    {
        title:"String values must be enclosed within when being assigned to variables:",
        choices:["1.commas", "2.curly brackets", "3.quotes", "4.paranthesis"],
        answer:"3.quotes", 
    },
    {
        title:"Arrays in Javascript can be used to store ______________ ",
        choices:["1.numbers and Strings", "2.other arrays", "3.booleans", "4.all the above"],
        answer:"4.all the above", 
    },
    {
        title:"A very useful toolused during development and debugging the printing content to the debugger is: ______________",
        choices:["1.javascript", "2.terminal/bash", "3.for loops", "4.console.log"],
        answer:"4.console.log", 
    },
];

/*
var questionDiv =document.getElementById("questions");
var questionTitle=document.getElementById("question-title");



function displayNextElement() {
    if (currentIndex < questions.length) {
      var element=document.getElementById("question-title");
      element.textContent = array[currentIndex];
      alert(element.textContent);
      questionTitle.appendChild(element);
      currentIndex++;
    }
  
  
    //questionDiv.setAttribute("onload","pageLoad");
    //questions.forEach(pageLoad);
   // Array.foreach(function(questions,index,arr){
     //   questionTitle= questions.title;
       // alert(questionTitle);
    //});
    //choices.foreach(c=>questions.choices); */

 var i=0;
 debugger;
 //const currentQuestion;
 displayQuestions();
 function displayQuestions(){
    // Get the parent element to append the questions
const questionsContainer = document.getElementById('questions');
 const currentQuestion=questions[i];
  // Create the question title element
  const questionTitle = document.createElement('h2');
  questionTitle.id = 'question-title';
  questionTitle.textContent = questions[i].title;

  // Create the choices container element
  var choicesContainer =document.getElementById("choices");
  //const choicesContainer = document.createElement('button');
  //choicesContainer.id = 'choices';
  //choicesContainer.className = 'choices';

  // Loop through the choices for each question
  for (let j = 0; j < questions[i].choices.length; j++) {
    // Create the choice element
    const choice = document.createElement('button');
    choice.textContent = questions[i].choices[j];

    choiceButton.addEventListener('click', function() {
      // Handle the user's choice here
      console.log('User selected:', currentQuestion.choices[j]);
      });

    // Append the choice to the choices container
    choicesContainer.appendChild(choice);
  }
  questionsContainer.innerHTML = '';

  // Append the question title and choices container to the questions container
  questionsContainer.appendChild(questionTitle);
  questionsContainer.appendChild(choicesContainer);
}

//validateChoice();

//i=i+1;
// Show the questions container
//questionsContainer.classList.remove('hide');
 //}

 function validateChoice(){

 }




