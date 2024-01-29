// Define the quiz data directly in the script
const quizData = [
    {
      question: "What does 'JS' stand for in JavaScript?",
      options: ["Java Source", "JavaScript", "JustScript", "JumboScript"],
      correct: "JavaScript"
    },
    {
      question: "Which of the following is a JavaScript data type?",
      options: ["Float", "Boolean", "String", "All of the above"],
      correct: "All of the above"
    },
    {
      question: "What will the following code output? \n console.log(1 + '1');",
      options: ["2", "11", "11undefined", "SyntaxError"],
      correct: "11"
    },
    {
      question: "Which method is used to remove the last element from an array?",
      options: ["pop()", "removeLast()", "deleteLast()", "splice()"],
      correct: "pop()"
    },
    {
      question: "What is the purpose of the 'this' keyword in JavaScript?",
      options: ["Refers to the current function", "Refers to the current object", "Refers to the global object", "Refers to the parent object"],
      correct: "Refers to the current object"
    },
    {
      question: "Which event is triggered when a user clicks on an HTML element?",
      options: ["clickEvent", "mouseClick", "onClick", "click"],
      correct: "click"
    },
    {
      question: "What does the acronym AJAX stand for in the context of web development?",
      options: ["Asynchronous JavaScript and XML", "Advanced JavaScript and XML", "Asynchronous JavaScript and XHTML", "All JavaScript and XML"],
      correct: "Asynchronous JavaScript and XML"
    },
    {
      question: "How do you declare a variable in JavaScript?",
      options: ["v variableName;", "var variableName;", "variable variableName;", "let variableName;"],
      correct: "var variableName;"
    },
    {
      question: "Which function is used to parse a JSON string in JavaScript?",
      options: ["parseJSON()", "JSON.parse()", "stringifyJSON()", "decodeJSON()"],
      correct: "JSON.parse()"
    },
    {
      question: "What is the purpose of 'use strict' in JavaScript?",
      options: ["Enforces strict mode for the entire script", "Defines a new JavaScript standard", "Activates experimental features", "Ensures backward compatibility"],
      correct: "Enforces strict mode for the entire script"
    },
    // Add more questions as needed
  ];
  
  let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");

async function startQuiz() {
  
  

  currentQuestion = 0;
  score = 0;
  displayQuestion();
}

function displayQuestion() {
  const currentQuizData = quizData[currentQuestion];

  questionContainer.textContent = currentQuizData.question;
  optionsContainer.innerHTML = "";

  currentQuizData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option, button));
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer, selectedButton) {
  const currentQuizData = quizData[currentQuestion];

  if (answer === currentQuizData.correct) {
    score++;
    selectedButton.classList.add('correct-answer');
  } else {
    selectedButton.classList.add('incorrect-answer');
  }

  // Disable all buttons after the user selects an answer
  optionsContainer.querySelectorAll('button').forEach(button => {
    button.disabled = true;
  });

  nextButton.disabled = false;
}

function endQuiz() {
  questionContainer.textContent = `Your score: ${score} out of ${quizData.length}`;
  optionsContainer.innerHTML = "";
  nextButton.disabled = true;
}

function nextQuestion() {
  optionsContainer.querySelectorAll('button').forEach(button => {
    button.disabled = false;
    button.classList.remove('correct-answer', 'incorrect-answer');
  });

  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    displayQuestion();
    nextButton.disabled = true;
  } else {
    endQuiz();
  }
}

// Start the quiz when the page loads
document.addEventListener("DOMContentLoaded", startQuiz);
