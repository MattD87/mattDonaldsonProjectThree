//Global Quiz Object
const quizApp = {};

//global variables
quizApp.score = 0;

//Array of questions
quizApp.questions = [
  //category 1 questions
  {
    title: `Who designed HTML?`,
    answers: [
      `Tim Berners Lee`,
      `Ada Lovelace`,
      `Steve Wozniak`,
      `Alan Turing`
    ],
    correct: 0,
    cash: 200,
    id: 1200
  },
  {
    title: `Which of these is not a proper HTML tag?`,
    answers: [`p`, `font`, `div`, `body`],
    correct: 1,
    cash: 400,
    id: 1400
  },
  {
    title: `How many Heading tags are there in HTML?`,
    answers: [`2`, `4`, `6`, `8`],
    correct: 2,
    cash: 600,
    id: 1600
  },
  {
    title: `ARIA stands for what?`,
    answers: [
      `Accessible Ready Internet Advertisements`,
      `Accessible Rich Internet Applications`,
      `Advertising Rich Internet Applications`,
      `Assigned Ready Instant Advertisements`
    ],
    correct: 1,
    cash: 800,
    id: 1800
  },
  {
    title: `When was HTML 5 released?`,
    answers: [`1999`, `2002`, `2006`, `2010`],
    correct: 2,
    cash: 1000,
    id: 11000
  },
  //category 2 questions
  {
    title: `CSS stands for what?`,
    answers: [
      `Colourful Style Sheets`,
      `Cascading Style Sheets`,
      `Computer Social Services`,
      `Creative Server Solutions`
    ],
    correct: 1,
    cash: 200,
    id: 2200
  },
  {
    title: `Where is the best place to link an external style sheet?`,
    answers: [`The head`, `The body`, `The footer`, `The meta tags`],
    correct: 0,
    cash: 400,
    id: 2400
  },
  {
    title: `Which property is used to declare the background colour?`,
    answers: [`color`, `bgcolor`, `bgcolour`, `background`],
    correct: 3,
    cash: 600,
    id: 2600
  },
  {
    title: `What character denotes a class selector?`,
    answers: [`?`, `#`, `@`, `.`],
    correct: 3,
    cash: 800,
    id: 2800
  },
  {
    title: `Which of these will give a padding-left: of 5px?`,
    answers: [
      `padding: 10px 8px 15px 5px`,
      `5px 10px 15px 8px`,
      `10px 5px 8px 15px`,
      `15px 8px 5px 10px`
    ],
    correct: 0,
    cash: 1000,
    id: 21000
  },
  //category 3 questions
  {
    title: `What tags do we use to put javascript in HTML?`,
    answers: [`javascript`, `js`, `script`, `jscript`],
    correct: 2,
    cash: 200,
    id: 3200
  },
  {
    title: `A method is what type of property?`,
    answers: [`function`, `parameter`, `selector`, `variable`],
    correct: 0,
    cash: 400,
    id: 3400
  },
  {
    title: `Which of these creates a function in javascript?`,
    answers: [
      `function myFunction()`,
      `function = myFunction()`,
      `()myFunction`,
      `function:myFunction()`
    ],
    correct: 1,
    cash: 600,
    id: 3600
  },
  {
    title: `What does 0 === '0' evaluate to?`,
    answers: [`true`, `zero`, `000`, `false`],
    correct: 3,
    cash: 800,
    id: 3800
  },
  {
    title: `What does Boolean(10 < 9) equate to?`,
    answers: [`true`, `false`, `109`, `90`],
    correct: 1,
    cash: 1000,
    id: 31000
  },
  //category 4 questions
  {
    title: `HackerYou produces the best graduates in the world.`,
    answers: [`True`, `False`, `!True`, `Can you hack emails?`],
    correct: 0,
    cash: 200,
    id: 4200
  },
  {
    title: `Front End developers focus on what aspect of the website?`,
    answers: [`storage of information`, `security`, `the look and functionality`, `databases`],
    correct: 2,
    cash: 400,
    id: 4400
  },
  {
    title: `The first page users visit on the site should have what naming convention?`,
    answers: [`home.html`, `main.html`, `landing.html`, `index.html`],
    correct: 3,
    cash: 600,
    id: 4600
  },
  {
    title: `What programming language do back end developers fear the most?`,
    answers: [`HTML`, `CSS`, `Javascript`, `Python`],
    correct: 1,
    cash: 800,
    id: 4800
  },
  {
    title: `On a scale of 9-10, this project deserves a: `,
    answers: [`9.98`, `9.99`, `10`, `11!`],
    correct: 3,
    cash: 1000,
    id: 41000
  }
];

//quiz functions

//function to start the quiz, hides the start page
quizApp.startQuiz = function() {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
    $(".scoreBoard p").html(`0`);
  });
};

//function to show the question when corresponding button is clicked
quizApp.showQuestion = function() {
  $(".button").on("click", function() {
    const buttonId = $(this).attr("id");
    quizApp.questionContent(buttonId);
  });
};

//function expands empty div to cover quizboard
quizApp.growQuestion = function() {
  $(".button").on("click", function() {
    $(".questionContainer")
      // .animate({
      //   opacity: 0.8,
      // }, "slow")
      .show()
      .addClass("changeSize");
  });
};

//function pulls question from array that corresponds to button and dynamically adds content
quizApp.questionContent = function(clickId) {
  for (let i = 0; i < quizApp.questions.length; i++) {
    if (clickId == quizApp.questions[i].id) {
      quizApp.currentQuestion = quizApp.questions[i];
      const question = quizApp.questions[i].title;
      const answers = quizApp.questions[i].answers;
      $(".questionContainer").html(
        `<h2>${question}</h2><ul class="questions"></ul>`
      );
      for (let i = 0; i < answers.length; i++) {
        $(".questions").append(`<li>${answers[i]}</li>`);
      }
    }
  }
};

//adds selected class to answer that is clicked for user feedback
quizApp.selectOption = function() {
  $(`.questionContainer`).on(`click`, `li`, function() {
    $(`.selected`).removeClass(`selected`);
    $(this).addClass(`selected`);
  });
};

//function to convert selected answer into number and checks selected option against correct answer
quizApp.checkAnswer = function(answer) {
  quizApp.answersArray = quizApp.currentQuestion.answers;
  quizApp.correctAnswer = quizApp.answersArray[quizApp.currentQuestion.correct];
  if (answer === quizApp.correctAnswer) {
    quizApp.score = quizApp.score + quizApp.currentQuestion.cash;
    $(".scoreBoard p").html(`${quizApp.score}`);
  } else {
    quizApp.score = quizApp.score - quizApp.currentQuestion.cash;
    $(".scoreBoard p").html(`${quizApp.score}`);
  }
  $(".questionContainer").hide();
  $(`.selected`).removeClass(`selected`);
};

// checks to ensure an answer is selected and runs checkAnswer function if true
quizApp.errorCheck = function() {
  $(".guess a").click(function(e) {
    e.preventDefault();
    quizApp.guess = $("li.selected").text();
    if (quizApp.guess) {
      quizApp.checkAnswer(quizApp.guess);
    } else {
      alert(
        "You should probably select one. You want to win fake money don't you?"
      );
    }
  });
};

// disables previously answered questions from being clicked again
quizApp.hideBox = function() {
  $(".hide").click(function() {
    $(this).addClass("removeBox");
  });
};

// show results and allow restart after warning
quizApp.results = function() {
  $(`.resultsRestart a`).click(function(e) {
    e.preventDefault();
    confirm(`But why? Your score will be lost! What else will you brag about?`);
    $(`.quiz`).hide();
    $(`.results`).show();
    $(".results p").html(`Congrats, your final score is: ${quizApp.score}`);
  });
};

//restart function and resets questions
quizApp.restart = function() {
  $(`.restart a`).click(function(e) {
    e.preventDefault();
    $(`.results`).hide();
    $(`.startPage`).show();
    $(".hide").removeClass("removeBox");
    quizApp.score = 0;
  });
};

//initialization
quizApp.init = function() {
  this.startQuiz();
  this.showQuestion();
  this.growQuestion();
  this.selectOption();
  this.errorCheck();
  this.hideBox();
  this.results();
  this.restart();
};

//document ready
$(function() {
  quizApp.init();
});
