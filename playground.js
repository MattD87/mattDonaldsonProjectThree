const quizApp = {};
quizApp.score = 0;
quizApp.categories = {
  history: {
    200: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1,
      cash: 200
    },
    400: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1,
      cash: 400
    },
    600: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1,
      cash: 600
    },
    800: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1,
      cash: 800
    },
    1000: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1,
      cash: 1000
    }
  },
  geography: {
    200: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    400: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    600: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    800: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    1000: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    }
  },
  popCulture: {
    200: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    400: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    600: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    800: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    1000: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    }
  },
  lethalDrinkables: {
    200: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    400: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    600: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    800: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    },
    1000: {
      question: "Question here",
      answers: ["answer 1", "answer 2", "answer 3", "answer 4"],
      correct: 1
    }
  }
};

//on start quiz link click, show quiz and hide startPage
quizApp.startQuiz = function() {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
  });
};
//show question function to add dynamic content to quiz page
quizApp.showQuestion = function() {
  let question = quizApp.categories.history["200"];
  $(`.quiz h2`).text(question.question);
  $(`.quiz ul`).html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(`.quiz ul`).append(`<li id = "${i}">${question.answers[i]}</li>`);
  }
};
//check user answer against correct answer
quizApp.checkAnswer = function(guess) {
  let question = quizApp.categories.history["200"];
  if (question.correct === guess) {
    score++;
  }
};

quizApp.guess = function() {
  $(`.quiz a`).click(function(e) {
    e.preventDefault();
    if ($(`li.selected`).length) {
      let guess = parseInt($(`li.selected`).attr(`id`));
      console.log(guess);
      // checkAnswer(guess);
    } else {
      alert(`Please select an answer, you don't want to be called a Rube`);
    }
  });
};

//show results
quizApp.showResults = function() {
    $(`.quiz`).hide();
    $(`.results`).show();
    if (score === 0) {
      alert(
        `Wow, you should feel bad.`
      );
    }
    $(`.results p`).text(
      `Congratulations, you finished with${score} out ${questions.length}!`
    );
  }

//Restart Quiz function
quizApp.restartQuiz = function() {
  $(`.results`).hide();
  $(`.quiz`).show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
};

//init function
quizApp.init = function() {
  quizApp.startQuiz();
  quizApp.showQuestion();
  quizApp.guess();
  //select an option
  $(`.quiz ul`).on(`click`, `li`, function() {
    $(`.selected`).removeClass(`selected`);
    $(this).addClass(`selected`);
  });
};

//document ready
$(function() {
  quizApp.init();
});

// quizApp.showResults();
// quizApp.restartQuiz();
