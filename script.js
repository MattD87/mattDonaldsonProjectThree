let score = 0;
let currentQuestion = 0;

const questions = [
  {
    title: `200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1
  }
];

//document ready, hide start, show quiz and first question
$(document).ready(() => {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
    showQuestion();
  });

//select option and keep at least one selected
  $(`.quiz ul`).on(`click`, `li`, function() {
    $(`.selected`).removeClass(`selected`);
    $(this).addClass(`selected`);
  });

//convert selected item into number to check against correct answer
//ensure an option is selected
  $(`.quiz a`).click(function(e) {
    e.preventDefault();
    if ($(`li.selected`).length) {
      let guess = parseInt($(`li.selected`).attr(`id`));
      // console.log(guess);
      checkAnswer(guess);
    } else {
      alert(`Please select an answer, you want to win fake money don't you?`);
    }
  });

// restart quiz option
  $(`.results a`).click(function(e) {
    e.preventDefault();
    restartQuiz();
  });
});

//function to show question dynamically, appends array items to the empty base li
function showQuestion() {
  let question = questions[currentQuestion];
  $(`.quiz h2`).text(question.title);
  $(`.quiz ul`).html("");
  for (let i = 0; i < question.answers.length; i++) {
    $(`.quiz ul`).append(`<li id = "${i}">${question.answers[i]}</li>`);
  }
}

//function to check selected answer against correct answer and increase score if correct
//calls next question unless all questions in array have been shown
function checkAnswer(guess) {
  let question = questions[currentQuestion];
  if (question.correct === guess) {
    score++;
  } 
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    showResults();
  } else {
    showQuestion();
  }
}

//show results after quiz completion , hides quiz and adds score dynamically to the page
function showResults() {
  $(`.quiz`).hide();
  $(`.results`).show();
  if (score === 0) {
    alert(`Wow, you should try harder.`);
  }
  $(`.results p`).text(`You scored ${score} out ${questions.length}!`);
}

//restart quiz, resets variables and starts at quiz
function restartQuiz() {
  $(`.results`).hide();
  $(`.quiz`).show();
  score = 0;
  currentQuestion = 0;
  showQuestion();
}
