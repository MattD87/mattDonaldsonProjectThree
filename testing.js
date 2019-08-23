//Global Quiz Object
const quizApp = {};

//global variables
quizApp.score = 0;

//Array of questions
quizApp.questions = [
  //category 1 questions
  {
    title: `Cat 1 200$ Question`,
    answers: [`hello`, `hello 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 1200
  },
  {
    title: `Cat 1 $400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 1400
  },
  {
    title: `Cat 1 $600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 1600
  },
  {
    title: `Cat 1 $800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 1800
  },
  {
    title: `Cat 1 $1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 11000
  },
  //category 2 questions
  {
    title: `Cat 2 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 2200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 2400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 2600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 2800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 21000
  },
  //category 3 questions
  {
    title: `Cat 3 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 3200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 3400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 3600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 3800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 31000
  },
  //category 4 questions
  {
    title: `Cat 4 200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 4200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 4400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 4600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 4800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
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
      .show()
      .addClass("change-size")
      .fadeIn(600);
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
    // console.log(quizApp.score);
    $(".scoreBoard p").html(`${quizApp.score}`);
  } else {
    quizApp.score = quizApp.score - quizApp.currentQuestion.cash;
    // console.log(quizApp.score);
    $(".scoreBoard p").html(`${quizApp.score}`);
  }
  $(".questionContainer").hide();
};

quizApp.errorCheck = function() {
  $(".guess a").click(function(e) {
    e.preventDefault();
    quizApp.guess = $("li.selected").text();
    if (quizApp.guess) {
      quizApp.checkAnswer(quizApp.guess);
    } else {
      alert("You need to pick an answer");
    }
  });
};

//initialization
quizApp.init = function() {
  this.startQuiz();
  this.showQuestion();
  this.growQuestion();
  this.selectOption();
  this.errorCheck();
};

//document ready
$(function() {
  quizApp.init();
});
