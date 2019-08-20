const quizApp = {};
quizApp.score = 0;
quizApp.categories = {
  history: {
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
  geography: {
    200: "200$ question",
    400: "400$ question",
    600: "600$ question",
    800: "800$ question",
    1000: "1000$ question"
  },
  popCulture: {
    200: "200$ question",
    400: "400$ question",
    600: "600$ question",
    800: "800$ question",
    1000: "1000$ question"
  },
  lethalDrinkables: {
    200: "200$ question",
    400: "400$ question",
    600: "600$ question",
    800: "800$ question",
    1000: "1000$ question"
  }
};
//on start quiz link click, show quiz and hide startPage
quizApp.startQuiz = function() {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
    showQuestion();
  });
};

quizApp.init = function() {
  quizApp.startQuiz();
};

$(function() {
  quizApp.init();
});
