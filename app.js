let currentQuestion = null;

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

function showQuestion() {
  currentQuestion = getRandomQuestion();
  document.getElementById("question").innerText = currentQuestion.question;
  document.getElementById("answerInput").value = "";
  document.getElementById("result").innerText = "";
  document.getElementById("answerInput").focus();
}

function normalize(str) {
  return str.trim().toLowerCase();
}

function checkAnswer() {
  const input = normalize(document.getElementById("answerInput").value);
  const resultEl = document.getElementById("result");

  const isCorrect = currentQuestion.answers.some(
    a => normalize(a) === input
  );

  if (isCorrect) {
    resultEl.innerText = "✅";
  } else {
    resultEl.innerText = `❌ Correct: ${currentQuestion.answers[0]}`;
  }

  setTimeout(showQuestion, 1000);
}

document.getElementById("answerInput").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    checkAnswer();
  }
});

showQuestion();
