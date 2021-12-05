const readlineSync = require('readline-sync');

let score = 0;

let questionsToBeAsked = [
  {
    question: "\"I am Groot.\"",
    answer: "Groot",
    options: { a: "Groot", b: "Hulk", c: "Captain America", d: "Raze" },
  },
  {
    question: "\"That's my secret, Captain. I'm always angry.\"",
    answer: "Hulk",
    options: { a: "Groot", b: "Hulk", c: "Captain America", d: "Raze" },
  },
  {
    question: "\"Genius, billionaire, playboy, philanthropist?\"",
    answer: "Iron Man",
    options: { a: "Groot", b: "Hulk", c: "Captain America", d: "Iron Man" },
  },
  {
    question: "\"We know each other! He's a friend from work!\"",
    answer: "Thor",
    options: { a: "Thor", b: "Hulk", c: "Captain America", d: "Loki" },
  },
  {
    question: "\"I can do this all day.\"",
    answer: "Captain America",
    options: { a: "Thor", b: "Spider Man", c: "Captain America", d: "Loki" },
  }
];

function welcome() {
  console.log("Hi there");
  const userName = readlineSync.question("What's your good name? ");

  console.log(`Hello ${userName.toUpperCase()}, Welcome to Marvel's Quiz and you have to select one option as per the dialogue given`);

  console.log('Example: a for option a)')
}

const topScorers = [
  {
    name: "Rajat",
    score: 40,
  },
  {
    name: "Akhil",
    score: 30,
  }
]

function play() {
  function putQuestion(number, question, answer, options) {
    console.log(`Q ${number + 1}: ${question}`);
    for (let prop in options)
      console.log(`${prop}) ${options[prop]}`)

    const userAnswer = readlineSync.question();

    console.log(`Option selected: ${userAnswer}`)

    if (options[userAnswer] && options[userAnswer].toLowerCase() === answer.toLowerCase()) {
      console.log('You are right.');
      score += 10;
    } else {
      console.log('You are wrong');
    }
    console.log(`------------ Current score: ${score} ------------`);
  }

  for (let i = 0; i < questionsToBeAsked.length; i++) {
    console.log();
    putQuestion(i, questionsToBeAsked[i].question, questionsToBeAsked[i].answer, questionsToBeAsked[i].options)
    console.log();
    const exitSelected = readlineSync.question("Press q to exit and any other button to continue ");
    if (exitSelected === 'q')
      break;
  }

  console.log();
  console.log(`Total Score: ${score}`)
  console.log();
}

function leaderBoard() {
  console.log("---------- Leaderboard ----------")
  for (let i = 0; i < topScorers.length; i++) {
    console.log(`${i + 1}   ${topScorers[i].name}   ${topScorers[i].score}`)
  }
}

welcome();
play();
leaderBoard();