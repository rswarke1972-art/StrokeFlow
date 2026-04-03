// Get character data
let charObj = JSON.parse(localStorage.getItem("character"));

// Display text info
document.getElementById("charDisplay").innerText = charObj.char;
document.getElementById("pinyinDisplay").innerText = charObj.pinyin;
document.getElementById("meaning").innerText = charObj.meaning;
document.getElementById("example").innerText = charObj.example;
document.getElementById("examplePinyin").innerText = charObj.example_pinyin;
document.getElementById("explanation").innerText = charObj.explanation;
document.body.addEventListener("click", function (e) {
  if (e.target.id !== "musicBtn") {
    let music = document.getElementById("bgMusic");
    music.play();
  }
}, { once: true });
let music = document.getElementById("bgMusic");
music.volume = 0.2; // soft sound

function toggleMusic() {
  let music = document.getElementById("bgMusic");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
// Create Hanzi Writer instance
let writer = HanziWriter.create('character-target', charObj.char, {
  width: 200,
  height: 200,
  padding: 10,
  showOutline: true,
  strokeAnimationSpeed: 1,
  delayBetweenStrokes: 300
});

// Track current stroke
let currentStroke = 0;

// ▶ Play full animation
function play() {
  currentStroke = 0;
  writer.animateCharacter();
}

// ➡ Next stroke (manual)
function nextStroke() {
  writer.animateStroke(currentStroke);
  currentStroke++;
}

// 🔄 Reset
function reset() {
  currentStroke = 0;
  writer.hideCharacter();
}

// 🔙 Back button
function goBack() {
  window.history.back();
}