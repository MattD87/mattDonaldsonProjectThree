//Global Quiz Object
const quizApp = {};

//global variables
quizApp.score = 0;

quizApp.questions = [
  //category 1 questions
  {
    title: `200$ Question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 200,
    id: 1200
  },
  {
    title: `$400 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 400,
    id: 1400
  },
  {
    title: `$600 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 600,
    id: 1600
  },
  {
    title: `$800 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 800,
    id: 1800
  },
  {
    title: `$1000 question`,
    answers: [`answer 1`, `answer 2`, `answer 3`, `answer 4`],
    correct: 1,
    cash: 1000,
    id: 11000
  },
  //category 2 questions
  {
    title: `200$ Question`,
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
    title: `200$ Question`,
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
    title: `200$ Question`,
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
quizApp.startQuiz = function() {
  $(`.startPage a`).click(function(e) {
    e.preventDefault();
    $(`.startPage`).hide();
    $(`.quiz`).show();
  });
};
quizApp.showQuestion = function() {
  $("button").on("click", function() {
    const buttonId = $(this).attr("id");
    // console.log(buttonId);
    quizApp.questionContent(buttonId);

  });
};
quizApp.growQuestion = function() {
  $("button").on("click", function() {
    $(this).parent().toggleClass("change-size");
  });
};

quizApp.questionContent = (clickId) => {
  //  const question = questions[id];
   console.log(clickId);
   console.log(quizApp.questions);
}

// quizApp.questionContent = (questions) => {
//   quizApp.questions.forEach((set) => {
//     const listItem = $("<ul>");
//     const title = $("<h2>").text(set.title);
//     const answers = $("li").text(set.answers);

//     listItem.append(title, answers)
//     $(".display").append(listItem); 
//   });
//   console.log(questionContent);
// }


//initialization
quizApp.init = function() {
  this.startQuiz();
  this.showQuestion();
  this.growQuestion();
  // this.questionContent();
};

//document ready
$(function() {
  quizApp.init();
});
