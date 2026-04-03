let allCharacters = [];
let currentQuestion;
let correctAnswer;
let score = 0;

// Load data
async function loadData() {
  let res = await fetch("data.json");
  let data = await res.json();

  allCharacters = [
    ...data.hsk1,
    ...data.hsk2,
    ...data.hsk3
  ];

  nextQuestion();
}

// Generate question
function nextQuestion() {
  document.getElementById("result").innerText = "";
  document.getElementById("nextBtn").style.display = "none";

  currentQuestion = allCharacters[Math.floor(Math.random() * allCharacters.length)];
  correctAnswer = currentQuestion.meaning;

  document.getElementById("questionChar").innerText = currentQuestion.char;

  let options = [correctAnswer];

  while (options.length < 4) {
    let random = allCharacters[Math.floor(Math.random() * allCharacters.length)].meaning;
    if (!options.includes(random)) {
      options.push(random);
    }
  }

  // shuffle
  options.sort(() => Math.random() - 0.5);

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  options.forEach(option => {
    let btn = document.createElement("button");
    btn.innerText = option;

    btn.onclick = () => checkAnswer(option);

    optionsDiv.appendChild(btn);
  });
}

// Check answer
function checkAnswer(selected) {
  let result = document.getElementById("result");

  if (selected === correctAnswer) {
    score++;
    result.innerText = "✅ Correct!";
    result.style.color = "lightgreen";
  } else {
    score--;
    result.innerText = "❌ Wrong! Correct: " + correctAnswer;
    result.style.color = "red";
  }

  document.getElementById("score").innerText = "Score: " + score;

  document.getElementById("nextBtn").style.display = "block";
}

// Back button
function goBack() {
  window.history.back();
}

loadData();